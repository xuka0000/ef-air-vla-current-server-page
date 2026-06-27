async function loadSiteData() {
  const response = await fetch("data/site.json");
  if (!response.ok) {
    throw new Error(`Unable to load site data: ${response.status}`);
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

loadSiteData().then(renderResults).catch((error) => {
  const target = document.getElementById("result-grid");
  if (target) {
    target.innerHTML = `<article class="metric-card blocked"><span class="status">BLOCKED</span><h3>Data load</h3><strong>Error</strong><p>${error.message}</p></article>`;
  }
});
