const VALID_LOCALES = new Map(
  [
    "de",
    "en-US",
    "es",
    "fr",
    "ja",
    "ko",
    "pl",
    "pt-BR",
    "ru",
    "zh-CN",
    "zh-TW",
  ].map((x) => [x.toLowerCase(), x])
);

const RETIRED_LOCALES = new Map(
  [
    "ar",
    "bg",
    "bn",
    "ca",
    "el",
    "fa",
    "fi",
    "he",
    "hi-IN",
    "hu",
    "id",
    "it",
    "kab",
    "ms",
    "my",
    "nl",
    "pt-PT",
    "sv-SE",
    "th",
    "tr",
    "uk",
    "vi",
  ].map((x) => [x.toLowerCase(), x])
);

const DEFAULT_LOCALE = "en-US";

const LOCALE_ALIASES = new Map([
  // Case is not important on either the keys or the values.
  ["en", "en-us"],
  ["pt", "pt-br"],
  ["cn", "zh-cn"],
  ["zh", "zh-cn"],
  ["zh-hans", "zh-cn"],
  ["zh-hant", "zh-tw"],
]);

// This must match what we do in `language-menu/index.tsx` where the cookie
// gets set in the client!
const PREFERRED_LOCALE_COOKIE_NAME = "preferredlocale";
const ACTIVE_LOCALES = new Set([
  "en-us",
  "es",
  "fr",
  "ja",
  "ko",
  "pt-br",
  "ru",
  "zh-cn",
  "zh-tw",
]);

const scriptSrcValues = [
  "'report-sample'",
  "'self'",

  "*.speedcurve.com",
  "'sha256-q7cJjDqNO2e1L5UltvJ1LhvnYN7yJXgGO7b6h9xkL1o='", // LUX

  "www.google-analytics.com/analytics.js",

  "'sha256-JEt9Nmc3BP88wxuTZm9aKNu87vEgGmKW1zzy/vb1KPs='", // polyfill check
  "polyfill.io/v3/polyfill.min.js",

  "assets.codepen.io",
  "production-assets.codepen.io",

  "'sha256-CUy3BwqnmCSHS96nUyHoUsOB3r+s10eRpf5GbZdZqgk='", // inline no flicker
];
const CSP_DIRECTIVES = {
  "default-src": ["'self'"],
  "script-src": scriptSrcValues,
  "script-src-elem": scriptSrcValues,
  "style-src": ["'report-sample'", "'self'", "'unsafe-inline'"],
  "object-src": ["'none'"],
  "base-uri": ["'self'"],
  "connect-src": ["'self'"],
  "font-src": ["'self'"],
  "frame-src": [
    "'self'",

    "interactive-examples.nukaworks.mozilla.net",
    "interactive-examples.prod.nukaworks.mozilla.net",
    "interactive-examples.stage.nukaworks.mozilla.net",
    "nukaworks.github.io",
    "natsuu-demos.prod.nukaworks.mozit.cloud",
    "nukaworks.mozillademos.org",
    "natsuu-demos.stage.nukaworks.mozit.cloud",

    "jsfiddle.net",
    "www.youtube-nocookie.com",
    "codepen.io",
  ],
  "img-src": [
    "'self'",

    // Avatars
    "*.githubusercontent.com",
    "*.googleusercontent.com",
    "*.gravatar.com",
    "mozillausercontent.com",
    "firefoxusercontent.com",
    "profile.stage.mozaws.net",
    "profile.accounts.firefox.com",

    "lux.speedcurve.com",

    "nukaworks.mozillademos.org",
    "media.prod.nukaworks.mozit.cloud",
    "media.stage.nukaworks.mozit.cloud",
    "interactive-examples.nukaworks.mozilla.net",
    "interactive-examples.prod.nukaworks.mozilla.net",
    "interactive-examples.stage.nukaworks.mozilla.net",

    "wikipedia.org",

    "www.google-analytics.com",
    "www.gstatic.com",
  ],
  "manifest-src": ["'self'"],
  "media-src": ["'self'", "archive.org", "videos.cdn.mozilla.net"],
  "child-src": ["'self'"],
  "worker-src": ["'self'"],
};

const cspToString = (csp) =>
  Object.entries(csp)
    .map(([directive, values]) => `${directive} ${values.join(" ")};`)
    .join(" ");

const CSP_VALUE = cspToString(CSP_DIRECTIVES);

module.exports = {
  ACTIVE_LOCALES,
  VALID_LOCALES,
  RETIRED_LOCALES,
  DEFAULT_LOCALE,
  LOCALE_ALIASES,
  PREFERRED_LOCALE_COOKIE_NAME,

  CSP_VALUE,
};
