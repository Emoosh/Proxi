// Default BurpSuite Proxy Settings
let proxySettings = {
  type: "http",
  host: "127.0.0.1",
  port: 8080,
};

let proxyEnabled = false;

// Load stored settings on startup
browser.storage.local.get(["proxyHost", "proxyPort"]).then((result) => {
  if (result.proxyHost) proxySettings.host = result.proxyHost;
  if (result.proxyPort) proxySettings.port = result.proxyPort;
});

// Proxy request handler
function handleProxyRequest(details) {
  if (proxyEnabled) {
    return proxySettings;
  }
  return { type: "direct" };
}

// Register the proxy listener
browser.proxy.onRequest.addListener(handleProxyRequest, {
  urls: ["<all_urls>"],
});

browser.proxy.onError.addListener((error) => {
  console.error("Proxy onError:", error);
});

// Handle extension messages
browser.runtime.onMessage.addListener((message) => {
  if (message.action === "enable") {
    proxyEnabled = true;
    console.log("Proxy enabled:", proxySettings);
  } else if (message.action === "disable") {
    proxyEnabled = false;
    console.log("Proxy disabled");
  } else if (message.action === "configure") {
    proxySettings.host = message.host;
    proxySettings.port = message.port;
    console.log("Proxy settings updated:", proxySettings);
  }
});
