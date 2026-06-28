const LANGUAGE_KEY = "ef_air_vla_project_language";

const PAGE_META = {
  en: {
    title: "Execution-Feedback AIR-VLA Current Server Evidence",
    description: "A bounded AIR-VLA and EF-AIR-VLA D0-D7 project page from the Work4 RTX5090 server sweep.",
    htmlLang: "en",
    toggleText: "中文",
    toggleAria: "Switch to Chinese",
  },
  zh: {
    title: "Execution-Feedback AIR-VLA 当前服务器证据",
    description: "Work4 RTX5090 服务器上的 AIR-VLA 和 EF-AIR-VLA D0 至 D7 有界证据页面。",
    htmlLang: "zh-CN",
    toggleText: "EN",
    toggleAria: "切换为英文",
  },
};

const STATIC_ZH = {
  "nav.abstract": "摘要",
  "nav.method": "方法",
  "nav.results": "结果",
  "nav.iterations": "迭代",
  "nav.media": "视频",
  "nav.evidence": "证据",
  "hero.eyebrow": "Work4 RTX5090 服务器扫测",
  "hero.title": "Execution-Feedback AIR-VLA 当前服务器证据",
  "hero.subtitle": "真实服务器证据包含评测 GIF、核心指标、训练曲线和门控相对放置公式。",
  "hero.authors": "Work4 具身空中操作研究",
  "hero.evidenceJson": "证据 JSON",
  "hero.projectPage": "项目主页",
  "teaser.montageCaption": "完整测试蒙太奇。三个评测诊断片段完整展示，共 300 帧，10 fps，总时长 30.0 秒。完成信号仍为零。",
  "teaser.trainingCaption": "训练 GIF。20 episode HDF5-only BC CUDA 冒烟验证。它验证数据路径和检查点，不代表策略性能。",
  "abstract.title": "摘要",
  "abstract.p1": "本页记录 Work4 服务器上 AIR-VLA 复现和 Execution-Feedback AIR-VLA 设计的当前证据。HDF5 审计、CUDA 冒烟验证、评测诊断和 D1 至 D7 候选运行均链接到本地工件。",
  "abstract.p2": "当前结果是工程诊断，不是性能声明。官方训练代码、策略推理资产、检查点、充分数据覆盖和稳定完整评测器仍然缺失。",
  "method.title": "方法概览",
  "method.desc": "页面采用论文项目主页结构，同时把每一条结论绑定到证据路径和真实性等级。",
  "method.step1.title": "子集审计",
  "method.step1.body": "在学习冒烟验证前，打开并检查 20 个可用 AIR-VLA HDF5 文件。",
  "method.step2.title": "HDF5-only BC 冒烟验证",
  "method.step2.body": "基于全部 20 个 HDF5 episode，从状态均值到动作均值训练一个小型 CUDA 模型。",
  "method.step3.title": "反馈冒烟验证",
  "method.step3.body": "拼接状态均值与执行反馈字段，并测试检查点、续训和推理流程。",
  "method.step4.title": "复现门控",
  "method.step4.body": "在公开资产、数据覆盖、评测器稳定性和检查点齐备前，阻止长时训练。",
  "results.title": "当前服务器结果",
  "results.desc": "以下数值均为冒烟验证或门控测量，不是论文级性能结果。",
  "candidate.title": "状态门控候选迭代",
  "candidate.desc": "小规模诊断、真实 GIF 和紧凑公式记录当前放置修复分支。",
  "candidate.spotlight.caption": "D5-20 稳定性检查。20 个 episode 中有 15 个达到完成信号。周期性失败仍出现在第 1、5、9、13、17 个 episode。",
  "equation.title": "门控相对抬升模型",
  "equation.objective": "目标",
  "equation.approach": "接近",
  "equation.gate": "门控",
  "equation.close": "闭合",
  "equation.d4": "D4 目标",
  "equation.d5": "D5 更新",
  "equation.decision": "结论",
  "media.title": "训练与测试视频",
  "media.desc": "训练媒体来自当前服务器的 loss CSV 文件。测试媒体来自已经同步到 Work4 的完整 AIR-VLA 评测诊断 MP4 文件。",
  "media.note.title": "媒体完整性检查",
  "media.note.body": "迭代区候选片段是基于真实评测帧生成的 4.0 秒循环。下方完整测试 GIF 保留原始 10.0 秒诊断片段和 30.0 秒蒙太奇。",
  "media.bc.caption": "HDF5-only BC CUDA 冒烟验证，20 条记录，1000 步加 100 步续训。",
  "media.ef.caption": "EF-AIR-VLA CUDA 冒烟验证，2 条反馈记录，500 步加 100 步续训。",
  "media.montage.caption": "三个同步评测诊断片段组成的完整测试蒙太奇。",
  "media.meta.montage": "完整 30.0 秒蒙太奇",
  "media.meta.full10": "完整 10.0 秒",
  "media.download": "下载 MP4",
  "media.policy.caption": "Policy-side grasp-transfer 评测诊断。完成信号仍为零。",
  "media.hdf5raw.caption": "HDF5 raw replay 诊断。它验证评测器媒体输出，不是学习策略证据。",
  "media.hdf5target.caption": "HDF5 target-base replay 诊断。完成分数仍为零。",
  "evidence.title": "证据与边界",
  "evidence.desc": "页面使用 Work4 证据台账和当前服务器目标扫测中的源文件。",
  "evidence.supported.title": "本页支持",
  "evidence.supported.li1": "当前服务器可以运行 HDF5-only BC 和 EF 反馈管线的 CUDA 冒烟验证。",
  "evidence.supported.li2": "可用 HDF5 子集可用于 D0 检查，包含 20 个文件和 1 个任务。",
  "evidence.supported.li3": "完整复现仍受缺失资产、数据覆盖不足和官方评测器不稳定限制。",
  "evidence.unsupported.title": "本页不支持",
  "evidence.unsupported.li1": "没有 AIR-VLA+ 完整复现。",
  "evidence.unsupported.li2": "没有官方 AIR-VLA 训练结果。",
  "evidence.unsupported.li3": "没有学习策略任务完成声明。",
  "evidence.unsupported.li4": "没有硬件验证或仿真到真实迁移声明。",
  "evidence.table.artifact": "工件",
  "evidence.table.truth": "真实性等级",
  "evidence.table.role": "作用",
  "evidence.table.primary": "主报告",
  "evidence.table.bc": "20 episode CUDA 冒烟验证",
  "evidence.table.ef": "2 行反馈冒烟验证",
  "evidence.table.gate": "受阻复现门控",
  "footer.updated": "最后更新 2026-06-28。本页仅报告有界工程证据。",
};

const STATIC_HTML_ZH = {
  "footer.references": "设计参考：<a href=\"https://github.com/eliahuhorwitz/Academic-project-page-template\">Academic Project Page Template</a>、<a href=\"https://airvla.github.io/\">AirVLA</a> 和 <a href=\"https://nerfies.github.io/\">Nerfies 风格项目主页语法</a>。",
};

const UI_TEXT = {
  en: {
    pass: "PASS",
    blocked: "BLOCKED",
    metricTotal: "Total",
    metricUav: "UAV",
    metricArm: "Arm",
    metricCompletion: "Completion",
    summary: "Rationale and boundary",
    sourceSummary: "Source summary",
    episodeLabel: "episode",
    frames: "frames",
    seconds: "s",
    mp4: "MP4",
    returnCode: "return",
    dataLoad: "Data load",
    dataLoadError: "Data load error",
    error: "Error",
  },
  zh: {
    pass: "通过",
    blocked: "受阻",
    metricTotal: "总分",
    metricUav: "无人机",
    metricArm: "机械臂",
    metricCompletion: "完成度",
    summary: "依据与边界",
    sourceSummary: "来源摘要",
    episodeLabel: "第",
    frames: "帧",
    seconds: "秒",
    mp4: "MP4",
    returnCode: "返回码",
    dataLoad: "数据加载",
    dataLoadError: "数据加载失败",
    error: "错误",
  },
};

const RESULT_TEXT_ZH = {
  hdf5Title: "HDF5 子集审计",
  hdf5Detail: (hdf5) => `${hdf5.task_count} 个任务。真实性等级 ${hdf5.truth_level}。`,
  bcTitle: "HDF5-only BC CUDA 冒烟验证",
  bcValue: (bc) => `${bc.record_count} 条记录`,
  bcDetail: (bc) => `${bc.train_record_count} 条训练记录，${bc.val_record_count} 条验证记录，动作维度 ${bc.action_dim}，检查点 ${bc.checkpoint_reload_status}。`,
  efTitle: "EF 反馈 CUDA 冒烟验证",
  efValue: (ef) => `${ef.record_count} 行`,
  efDetail: (ef) => `特征维度 ${ef.feature_dim}，动作维度 ${ef.action_dim}，检查点 ${ef.checkpoint_reload_status}。`,
  publicTitle: "公开 AIR-VLA+ 资产",
  publicDetail: () => "缺少训练代码、策略推理代码，以及检查点或权重候选。",
  readinessTitle: "完整复现就绪性",
  readinessDetail: (ready) => `${ready.checks.dataset_episode_count}<${ready.checks.min_dataset_episodes} 个 episode，${ready.checks.evaluator_task_count}<${ready.checks.min_evaluator_tasks} 个评测任务。`,
  evaluatorTitle: "官方原始评测器",
  evaluatorDetail: (official) => `${official.result_file_count} 个结果文件，运行 ${official.elapsed_seconds} 秒。`,
};

const STATUS_VALUE_ZH = {
  blocked_wait_for_public_assets: "等待公开资产",
  blocked_full_algorithm_reproduction: "完整算法复现受阻",
};

const CANDIDATE_ZH = {
  AB: {
    role: "当前提升的工程候选",
    hypothesis: "运动残差与阶段控制可能互补，并提高工程总分。",
    mechanism_source: "A 具备无人机信号，B 在独立门控中具备机械臂信号。",
    decision: "进入状态门控修复分支。",
    boundary: "没有完成信号，且第 1 个 episode 丢失无人机信号。",
  },
  "D1-20": {
    role: "状态门控闭合稳定性检查",
    hypothesis: "D1 增益需要在 5 episode 门控之外继续保持。",
    mechanism_source: "D1 的 5 episode 结果相对 AB 定时闭合恢复了无人机和机械臂信号。",
    decision: "保留为稳定但未完成的状态门控闭合基线。",
    boundary: "总分较强，但仍没有完成信号。",
  },
  "D2-5": {
    role: "请求状态机械臂保持消融",
    hypothesis: "去除请求状态机械臂保持，用于判断 D1 增益来自状态门控还是来自闭合后的评测器机械臂状态保持。",
    mechanism_source: "D1 同时包含门控闭合和闭合后的请求状态机械臂保持。",
    decision: "不把请求状态保持视为主要增益来源。",
    boundary: "总分略低，且没有完成信号。",
  },
  "D3-20": {
    role: "接近速度稳定性检查",
    hypothesis: "D3 的完成事件需要在 20 episode 上检查，之后才能形成更强判断。",
    mechanism_source: "D3 的 5 episode 门控产生了一个完成 episode，而 D1 没有。",
    decision: "将速度 0.04 的门控分支作为下一阶段算法设计种子。",
    boundary: "20 个 episode 中只有 1 个完成，因此不是稳健成功声明。",
  },
  "D4-5": {
    role: "失败的放置修复消融",
    hypothesis: "把保持、抬升、转移和释放锚定到真实门控闭合事件，可能修复 D3 的稀疏放置失败。",
    mechanism_source: "D3 在 20 次运行中只有 1 次完成。代码检查显示，后闭合阶段先前绑定到配置的 close_start_step，而不是真实门控闭合起点。",
    decision: "不提升。容器偏移转移降低无人机分数，且没有改善完成度。",
    boundary: "负向 5 episode 诊断。它验证了门控相对阶段锚定，但否定了这个激进转移目标。",
  },
  "D5-5": {
    role: "当前提升的放置修复候选",
    hypothesis: "移除 D4 的容器偏移，同时保留真实闭合锚定和小幅抬升，应能保持 D3 接近质量并提升放置完成度。",
    mechanism_source: "D4 否定了激进容器偏移转移，因此 D5 保留真实门控闭合锚点，将 transfer_base_mode 恢复为 standoff，并只使用小幅后闭合抬升。",
    decision: "提升到 20 episode 稳定性检查，之后再讨论论文级声明。",
    boundary: "正向 5 episode 诊断，5 个 episode 中 3 个完成，但第 1 和第 5 个失败，稳健性尚未建立。",
  },
  "D5-20": {
    role: "20 episode 稳定性检查",
    hypothesis: "若门控相对 lift-standoff 修复足够稳定，D5 在 20 episode 稳定性门控中应保持高于 D3。",
    mechanism_source: "D5 的 5 episode 运行在移除 D4 激进容器偏移转移后，提高了总分和完成度。",
    decision: "保留为当前最佳小规模工程候选，并利用周期性失败设计 D6。",
    boundary: "20 个 episode 中有 15 个完成，但第 1、5、9、13、17 个仍失败，因此不是论文级稳健性能声明。",
  },
  "D6-5": {
    role: "负向后释放保护消融",
    hypothesis: "短时后释放保护可能在不改变 D5 门控和抬升机制的情况下，避免 D5 的周期性目标逃逸。",
    mechanism_source: "D5-20 诊断显示第 5、9、13、17 个 episode 在打开后反复出现目标逃逸。",
    decision: "否定后释放基座冻结。它使完成度降为零，并降低总分。",
    boundary: "负向 5 episode 诊断，仅用于机制排除。",
  },
  "D7-5": {
    role: "负向释放延迟消融",
    hypothesis: "额外保持抓取闭合 4 个动作步，可能在打开前稳定目标。",
    mechanism_source: "D6 显示打开后冻结过强，因此 D7 只测试打开前时序变化。",
    decision: "否定简单释放延迟。它破坏 D5 接近分数，并使完成度保持为零。",
    boundary: "负向 5 episode 诊断，仅用于排除单独释放延迟修复。",
  },
};

const MEDIA_ZH = {
  AB20: "定时 A+B 分支保留机械臂信号，但未完成任务。",
  "D1-20": "速度 0.05 的状态门控闭合。它恢复了无人机和机械臂分数。",
  "D3-20": "速度 0.04 的慢速状态门控。这是 D3 的 20 episode 组中唯一完成的诊断 episode。",
  "D4-5": "门控相对转移分支。它证明了闭合锚定机制，但降低分数，因此作为负向放置修复消融。",
  "D5-5": "门控相对 lift-standoff 分支。它移除 D4 容器偏移，并给出当前最强 5 episode 完成信号。",
  "D5-20": "D5 的 20 episode 稳定性检查。该运行完成 15 个 episode，同时保留了用于 D6 的周期性失败模式。",
  "D6-5": "D6 后释放保护。它消除了远距离目标逃逸，但破坏 D5 成功路径，因此被否定。",
  "D7-5": "D7 释放延迟。它略微提高机械臂分数，但完全丢失无人机分数，因此被否定。",
};

const state = {
  language: readStoredLanguage(),
  siteData: null,
  candidateData: null,
};

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

function readStoredLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_KEY) === "zh" ? "zh" : "en";
  } catch {
    return "en";
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch {
    // The page still works when localStorage is unavailable.
  }
}

function ui(key) {
  return UI_TEXT[state.language][key] || UI_TEXT.en[key] || key;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[char]));
}

function applyLanguage() {
  const meta = PAGE_META[state.language];
  document.documentElement.lang = meta.htmlLang;
  document.title = meta.title;
  const description = document.querySelector("meta[name=\"description\"]");
  if (description) {
    description.setAttribute("content", meta.description);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (!element.dataset.i18nDefault) {
      element.dataset.i18nDefault = element.textContent;
    }
    const key = element.dataset.i18n;
    element.textContent = state.language === "zh" && STATIC_ZH[key] ? STATIC_ZH[key] : element.dataset.i18nDefault;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    if (!element.dataset.i18nHtmlDefault) {
      element.dataset.i18nHtmlDefault = element.innerHTML;
    }
    const key = element.dataset.i18nHtml;
    element.innerHTML = state.language === "zh" && STATIC_HTML_ZH[key] ? STATIC_HTML_ZH[key] : element.dataset.i18nHtmlDefault;
  });

  const toggle = document.getElementById("language-toggle");
  if (toggle) {
    toggle.textContent = meta.toggleText;
    toggle.setAttribute("aria-label", meta.toggleAria);
    toggle.setAttribute("title", meta.toggleAria);
  }
}

function card({ stateName, title, value, detail }) {
  const className = stateName === "pass" ? "metric-card pass" : "metric-card blocked";
  const status = stateName === "pass" ? ui("pass") : ui("blocked");
  return `
    <article class="${className}">
      <span class="status">${escapeHtml(status)}</span>
      <h3>${escapeHtml(title)}</h3>
      <strong>${escapeHtml(value)}</strong>
      <p>${escapeHtml(detail)}</p>
    </article>
  `;
}

function normalizedStatusValue(value) {
  if (state.language === "zh" && STATUS_VALUE_ZH[value]) {
    return STATUS_VALUE_ZH[value];
  }
  return String(value).replaceAll("_", " ");
}

function renderResults(data) {
  const hdf5 = data.summaries.hdf5;
  const bc = data.summaries.bc;
  const ef = data.summaries.ef;
  const pub = data.summaries.public;
  const ready = data.summaries.readiness;
  const official = data.summaries.official_evaluator.row;
  const zh = state.language === "zh";

  const rows = [
    {
      stateName: hdf5.status === "passed_d0_hdf5_subset" ? "pass" : "blocked",
      title: zh ? RESULT_TEXT_ZH.hdf5Title : "HDF5 subset audit",
      value: `${hdf5.valid_file_count}/${hdf5.file_count}`,
      detail: zh ? RESULT_TEXT_ZH.hdf5Detail(hdf5) : `${hdf5.task_count} task. Truth level ${hdf5.truth_level}.`,
    },
    {
      stateName: bc.status === "passed" ? "pass" : "blocked",
      title: zh ? RESULT_TEXT_ZH.bcTitle : "HDF5-only BC CUDA smoke",
      value: zh ? RESULT_TEXT_ZH.bcValue(bc) : `${bc.record_count} records`,
      detail: zh ? RESULT_TEXT_ZH.bcDetail(bc) : `${bc.train_record_count} train, ${bc.val_record_count} validation, action dim ${bc.action_dim}, checkpoint ${bc.checkpoint_reload_status}.`,
    },
    {
      stateName: ef.status === "passed" ? "pass" : "blocked",
      title: zh ? RESULT_TEXT_ZH.efTitle : "EF feedback CUDA smoke",
      value: zh ? RESULT_TEXT_ZH.efValue(ef) : `${ef.record_count} rows`,
      detail: zh ? RESULT_TEXT_ZH.efDetail(ef) : `Feature dim ${ef.feature_dim}, action dim ${ef.action_dim}, checkpoint ${ef.checkpoint_reload_status}.`,
    },
    {
      stateName: "blocked",
      title: zh ? RESULT_TEXT_ZH.publicTitle : "Public AIR-VLA+ assets",
      value: normalizedStatusValue(pub.status),
      detail: zh ? RESULT_TEXT_ZH.publicDetail(pub) : "Missing training code, policy inference code, and checkpoint or weight candidates.",
    },
    {
      stateName: "blocked",
      title: zh ? RESULT_TEXT_ZH.readinessTitle : "Full reproduction readiness",
      value: normalizedStatusValue(ready.status),
      detail: zh ? RESULT_TEXT_ZH.readinessDetail(ready) : `${ready.checks.dataset_episode_count}<${ready.checks.min_dataset_episodes} episodes and ${ready.checks.evaluator_task_count}<${ready.checks.min_evaluator_tasks} evaluator tasks.`,
    },
    {
      stateName: "blocked",
      title: zh ? RESULT_TEXT_ZH.evaluatorTitle : "Official original evaluator",
      value: `${ui("returnCode")} ${official.return_code}`,
      detail: zh ? RESULT_TEXT_ZH.evaluatorDetail(official) : `${official.result_file_count} result files after ${official.elapsed_seconds} seconds.`,
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
  return `<span><em>${escapeHtml(label)}</em>${escapeHtml(numberText(value))}</span>`;
}

function candidateField(item, field) {
  if (state.language === "zh" && CANDIDATE_ZH[item.id]?.[field]) {
    return CANDIDATE_ZH[item.id][field];
  }
  return item[field] || "";
}

function mediaCaption(item) {
  if (state.language === "zh" && MEDIA_ZH[item.run_id]) {
    return MEDIA_ZH[item.run_id];
  }
  return item.caption || "";
}

function episodeText(episode) {
  return state.language === "zh" ? `${ui("episodeLabel")} ${episode} 个 episode` : `${ui("episodeLabel")} ${episode}`;
}

function renderCandidateIterations(data) {
  const promoted = new Set([
    "AB",
    "D1-20",
    "D2-5",
    "D3-20",
    "D4-5",
    "D5-5",
    "D5-20",
    "D6-5",
    "D7-5",
    "D8-5",
    "D9-050",
    "D10",
    "D11",
  ]);
  const rows = data.iterations.filter((item) => promoted.has(item.id) || item.id === "AB");
  const cards = rows.map((item) => {
    const metrics = item.metrics || {};
    return `
      <article class="candidate-card">
        <div class="candidate-topline">
          <span>${escapeHtml(item.id)}</span>
          <strong>${escapeHtml(item.label)}</strong>
        </div>
        <p class="candidate-role">${escapeHtml(candidateField(item, "role"))}</p>
        <div class="candidate-metrics">
          ${metricTile(ui("metricTotal"), metrics.total_score_mean)}
          ${metricTile(ui("metricUav"), metrics.uav_score_mean)}
          ${metricTile(ui("metricArm"), metrics.arm_score_mean)}
          ${metricTile(ui("metricCompletion"), metrics.completion_score_mean)}
        </div>
        <p class="candidate-decision">${escapeHtml(candidateField(item, "decision"))}</p>
        <details class="candidate-details">
          <summary>${escapeHtml(ui("summary"))}</summary>
          <p>${escapeHtml(candidateField(item, "hypothesis"))}</p>
          <p>${escapeHtml(candidateField(item, "mechanism_source"))}</p>
          <p>${escapeHtml(candidateField(item, "boundary"))}</p>
          <a href="${escapeHtml(item.source_summary)}">${escapeHtml(ui("sourceSummary"))}</a>
        </details>
      </article>
    `;
  });
  document.getElementById("candidate-grid").innerHTML = cards.join("");

  const media = (data.analysis_outputs?.media || []).filter((item) => item.display === true);
  document.getElementById("candidate-media").innerHTML = media.map((item) => `
    <figure class="media-card candidate-clip">
      <img src="${escapeHtml(item.display_path)}" alt="${escapeHtml(mediaCaption(item))}">
      <figcaption><strong>${escapeHtml(item.run_id)} ${escapeHtml(episodeText(item.episode))}</strong>${escapeHtml(mediaCaption(item))}</figcaption>
      <div class="media-meta">
        <span>${escapeHtml(numberText(item.duration_sec))} ${escapeHtml(ui("seconds"))}</span>
        <span>${escapeHtml(item.frame_count)} ${escapeHtml(ui("frames"))}</span>
        <span>${escapeHtml(ui("metricTotal"))} ${escapeHtml(numberText(item.total_score))}</span>
        <span>${escapeHtml(ui("metricCompletion"))} ${escapeHtml(numberText(item.completion_score))}</span>
      </div>
      <div class="media-actions">
        <a href="${escapeHtml(item.video_path)}">${escapeHtml(ui("mp4"))}</a>
      </div>
    </figure>
  `).join("");
}

function rerender() {
  applyLanguage();
  if (state.siteData) {
    renderResults(state.siteData);
  }
  if (state.candidateData) {
    renderCandidateIterations(state.candidateData);
  }
}

function setupLanguageToggle() {
  const toggle = document.getElementById("language-toggle");
  if (!toggle) {
    return;
  }
  toggle.addEventListener("click", () => {
    state.language = state.language === "zh" ? "en" : "zh";
    storeLanguage(state.language);
    rerender();
  });
}

setupLanguageToggle();
applyLanguage();

Promise.all([loadSiteData(), loadCandidateData()]).then(([siteData, candidateData]) => {
  state.siteData = siteData;
  state.candidateData = candidateData;
  renderResults(siteData);
  renderCandidateIterations(candidateData);
}).catch((error) => {
  const target = document.getElementById("result-grid");
  if (target) {
    target.innerHTML = `<article class="metric-card blocked"><span class="status">${escapeHtml(ui("blocked"))}</span><h3>${escapeHtml(ui("dataLoad"))}</h3><strong>${escapeHtml(ui("error"))}</strong><p>${escapeHtml(error.message)}</p></article>`;
  }
  const candidateTarget = document.getElementById("candidate-grid");
  if (candidateTarget) {
    candidateTarget.innerHTML = `<article class="candidate-card"><strong>${escapeHtml(ui("dataLoadError"))}</strong><p>${escapeHtml(error.message)}</p></article>`;
  }
});
