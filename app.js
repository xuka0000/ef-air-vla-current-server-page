async function loadSiteData() {
  const response = await fetch("data/site.json");
  if (!response.ok) {
    throw new Error(`Unable to load site data: ${response.status}`);
  }
  return response.json();
}

async function loadCandidateData() {
  const response = await fetch("data/candidate_iterations_20260628.json");
  if (!response.ok) {
    throw new Error(`Unable to load candidate data: ${response.status}`);
  }
  return response.json();
}

function card({ status, title, value, detail }) {
  const className = status === "PASS" ? "metric-card pass" : "metric-card blocked";
  return `
    <article class="${className}">
      <span class="status">${status}</span>
      <h3>${title}</h3>
      <strong>${value}</strong>
      <p>${detail}</p>
    </article>
  `;
}

function renderResults(data) {
  const hdf5 = data.summaries.hdf5;
  const bc = data.summaries.bc;
  const ef = data.summaries.ef;
  const pub = data.summaries.public;
  const ready = data.summaries.readiness;
  const official = data.summaries.official_evaluator.row;

  const rows = [
    {
      status: hdf5.status === "passed_d0_hdf5_subset" ? "PASS" : "BLOCKED",
      title: "HDF5 subset audit",
      value: `${hdf5.valid_file_count}/${hdf5.file_count}`,
      detail: `${hdf5.task_count} task. Truth level ${hdf5.truth_level}.`,
    },
    {
      status: bc.status === "passed" ? "PASS" : "BLOCKED",
      title: "HDF5-only BC CUDA smoke",
      value: `${bc.record_count} records`,
      detail: `${bc.train_record_count} train, ${bc.val_record_count} validation, action dim ${bc.action_dim}, checkpoint ${bc.checkpoint_reload_status}.`,
    },
    {
      status: ef.status === "passed" ? "PASS" : "BLOCKED",
      title: "EF feedback CUDA smoke",
      value: `${ef.record_count} rows`,
      detail: `Feature dim ${ef.feature_dim}, action dim ${ef.action_dim}, checkpoint ${ef.checkpoint_reload_status}.`,
    },
    {
      status: "BLOCKED",
      title: "Public AIR-VLA+ assets",
      value: pub.status.replaceAll("_", " "),
      detail: "Missing training code, policy inference code, and checkpoint or weight candidates.",
    },
    {
      status: "BLOCKED",
      title: "Full reproduction readiness",
      value: ready.status.replaceAll("_", " "),
      detail: `${ready.checks.dataset_episode_count}<${ready.checks.min_dataset_episodes} episodes and ${ready.checks.evaluator_task_count}<${ready.checks.min_evaluator_tasks} evaluator tasks.`,
    },
    {
      status: "BLOCKED",
      title: "Official original evaluator",
      value: `return ${official.return_code}`,
      detail: `${official.result_file_count} result files after ${official.elapsed_seconds} seconds.`,
    },
  ];

  document.getElementById("result-grid").innerHTML = rows.map(card).join("");
}

function numberText(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return "NA";
  }
  return number.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}

function metricTile(label, value) {
  return `<span><em>${label}</em>${numberText(value)}</span>`;
}

function renderCandidateIterations(data) {
  const promoted = new Set(["AB", "D1-20", "D2-5", "D3-20", "D4-5", "D5-5", "D5-20", "D6-5", "D7-5"]);
  const rows = data.iterations.filter((item) => promoted.has(item.id) || item.id === "AB");
  const cards = rows.map((item) => {
    const metrics = item.metrics || {};
    return `
      <article class="candidate-card">
        <div class="candidate-topline">
          <span>${item.id}</span>
          <strong>${item.label}</strong>
        </div>
        <p class="candidate-role">${item.role}</p>
        <div class="candidate-metrics">
          ${metricTile("Total", metrics.total_score_mean)}
          ${metricTile("UAV", metrics.uav_score_mean)}
          ${metricTile("Arm", metrics.arm_score_mean)}
          ${metricTile("Completion", metrics.completion_score_mean)}
        </div>
        <p class="candidate-decision">${item.decision}</p>
        <details class="candidate-details">
          <summary>Rationale and boundary</summary>
          <p>${item.hypothesis}</p>
          <p>${item.mechanism_source}</p>
          <p>${item.boundary}</p>
          <a href="${item.source_summary}">Source summary</a>
        </details>
      </article>
    `;
  });
  document.getElementById("candidate-grid").innerHTML = cards.join("");

  const media = (data.analysis_outputs?.media || []).filter((item) => item.display === true);
  document.getElementById("candidate-media").innerHTML = media.map((item) => `
    <figure class="media-card candidate-clip">
      <img src="${item.display_path}" alt="${item.caption}">
      <figcaption><strong>${item.run_id} episode ${item.episode}</strong>${item.caption}</figcaption>
      <div class="media-meta">
        <span>${numberText(item.duration_sec)} s</span>
        <span>${item.frame_count} frames</span>
        <span>Total ${numberText(item.total_score)}</span>
        <span>Completion ${numberText(item.completion_score)}</span>
      </div>
      <div class="media-actions">
        <a href="${item.video_path}">MP4</a>
      </div>
    </figure>
  `).join("");
}

Promise.all([loadSiteData(), loadCandidateData()]).then(([siteData, candidateData]) => {
  renderResults(siteData);
  renderCandidateIterations(candidateData);
}).catch((error) => {
  const target = document.getElementById("result-grid");
  if (target) {
    target.innerHTML = `<article class="metric-card blocked"><span class="status">BLOCKED</span><h3>Data load</h3><strong>Error</strong><p>${error.message}</p></article>`;
  }
  const candidateTarget = document.getElementById("candidate-grid");
  if (candidateTarget) {
    candidateTarget.innerHTML = `<article class="candidate-card"><strong>Data load error</strong><p>${error.message}</p></article>`;
  }
});
