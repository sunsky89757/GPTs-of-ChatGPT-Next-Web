export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const DEFAULT_CORS_HOST = "https://a.nextweb.fun";
export const DEFAULT_API_HOST = `${DEFAULT_CORS_HOST}/api/proxy`;
export const OPENAI_BASE_URL = "https://api.openai.com";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum ApiPath {
  Cors = "/api/cors",
  OpenAI = "/api/openai",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Azure = "Azure",
}

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const Azure = {
  ExampleEndpoint: "https://{resource-url}/openai/deployments/{deploy-id}",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = `
You are ChatGPT, a large language model trained by OpenAI.
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
Latex inline: $x^2$ 
Latex block: $$e=mc^2$$
`;

export const SUMMARIZE_MODEL = "gpt-3.5-turbo";

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2021-09",
  "gpt-4-1106-preview": "2023-04",
  "gpt-4-vision-preview": "2023-04",
};

export const DEFAULT_MODELS = [
  {
    name: "gpt-4",
    description: "gpt-4",
    available: true,
  },
  // {
  //   name: "gpt-4-0314",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-0613",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k-0314",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k-0613",
  //   available: true,
  // },
  {
    name: "gpt-4-1106-preview",
    description: "gpt-4-turbo",
    available: true,
  },
  // {
  //   name: "gpt-4-vision-preview",
  //   available: true,
  // },
  {
    name: "gpt-3.5-turbo",
    description: "gpt-3.5-turbo",
    available: true,
  },
  // {
  //   name: "gpt-3.5-turbo-0301",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-0613",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-1106",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-16k",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-16k-0613",
  //   available: true,
  // },
  // 下方为GPTs新增模型
  {
    name: "gpt-4-gizmo-g-klnwRQk7U",
    description: "DALL·E绘图",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-UPuGbvUJn",
    description: "论文润色大师",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-GEzVGowiN",
    description: "论文写作助手 Pro",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-joNEaBeza",
    description: "AI新闻通讯GPT",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-5tc5vh3P3",
    description: "易经机器人",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-CitwvF94s",
    description: "完美简历",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-pQASTHPAq",
    description: "历史猫插图师",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-T1xui4tJ3",
    description: "企业LOGO生成器",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-L2HknCZTC",
    description: "学术资源ScholarAI",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-LpCnTpHvZ",
    description: "色彩助手",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-Nu089W0wg",
    description: "方法论生成器",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-hesntNTso",
    description: "妈妈爸爸GPT",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-RuhDS8mbd",
    description: "GPT商店",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-85Y0gYQuO",
    description: "创业网站文案",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-evJ22Dnnp",
    description: "创业公司取名",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-klnwRQk7U",
    description: "冰霜DALLE3（带参数！）",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-ZQ9Dzykak",
    description: "股票趋势分析师",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-mCfGq6FWq",
    description: "全球中文快讯",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-0FgRLpAvT",
    description: "Youtube视频摘要生成器",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-u0kf5rQm3",
    description: "市场情绪分析器",
    available: true,
  },
  {
    name: "gpt-4-gizmo-g-RXKmXYE3q",
    description: "双人编程",
    available: true,
  },
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;
