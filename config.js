/*
 * https://rentry.org/teralomaniac_clewd
 * https://github.com/teralomaniac/clewd
 */

// SET YOUR COOKIE BELOW

module.exports = {
  Cookie: "SET YOUR COOKIE HERE",
  CookieArray: [
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
  ],
  Cookiecounter: 1,
  CookieIndex: 0,
  ProxyPassword: "9016",
  Ip: "127.0.0.1",
  Port: 8444,
  localtunnel: false,
  BufferSize: 1,
  SystemInterval: 3,
  rProxy: "https://claude.ai",
  api_rProxy: "",
  padtxt_placeholder: "",
  PromptExperimentFirst: "",
  PromptExperimentNext: "",
  PersonalityFormat: "{{char}}'s personality: {{personality}}",
  ScenarioFormat: "Dialogue scenario: {{scenario}}",
  Settings: {
    RenewAlways: true,
    RetryRegenerate: false,
    PromptExperiments: true,
    SystemExperiments: true,
    PreventImperson: false,
    AllSamples: false,
    NoSamples: false,
    StripAssistant: false,
    StripHuman: false,
    PassParams: false,
    ClearFlags: true,
    PreserveChats: false,
    LogMessages: true,
    FullColon: true,
    padtxt: 15000,
    xmlPlot: true,
    Superfetch: true,
  },
};

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */
