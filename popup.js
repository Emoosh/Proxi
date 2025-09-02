/**
 * @param {number} stepNumber - The step number to show.
 * @returns {void}
 */
function showStep(stepNumber) {
  document.querySelectorAll(".step").forEach((step) => {
    step.classList.remove("active");
  });

  document.getElementById("step" + stepNumber).classList.add("active");
}

/**
 * @returns {void}
 */
function checkInitialSetup() {
  browser.storage.local
    .get("setupCompleted")
    .then((setupConfig) => {
      if (setupConfig.setupCompleted) {
        showStep(3);
      } else {
        showStep(1);
      }
    })
    .catch((error) => {
      console.error("Error browser storage : ", error);
      showStep(1);
    });
}

// When the DOM content is loaded (extensions') check for the setup,
// to prevent showing the wrong step initially (step 1 each time even after setup is complete)
document.addEventListener("DOMContentLoaded", () => {
  checkInitialSetup();
});

// Step 1: accept-default button selected.
document.getElementById("accept-default").addEventListener("click", () => {
  browser.storage.local
    .set({
      proxyHost: "127.0.0.1",
      proxyPort: 8080,
      setupCompleted: true,
    })
    .then(() => {
      browser.runtime.sendMessage({ action: "enable" });
      showStep(3);
    });
});

// Step 1: Configure button selected.
document.getElementById("configure").addEventListener("click", () => {
  showStep(2);
});

// Step 2: Configuration Page.
document.getElementById("save-config").addEventListener("click", () => {
  // Get configured host and port values.
  const host = document.getElementById("host").value;
  const port = parseInt(document.getElementById("port").value, 10);

  // Validate host and port.
  if (!host || isNaN(port)) {
    alert("Please enter valid host and port values.");
    return;
  }

  browser.storage.local
    .set({
      proxyHost: host,
      proxyPort: port,
      setupCompleted: true,
    })
    .then(() => {
      browser.runtime.sendMessage({
        action: "configure",
        host: host,
        port: port,
      });
      showStep(3);
    });
});

// Step 2: Back to Step 1 button selected.
document.getElementById("back-to-step1").addEventListener("click", () => {
  showStep(1);
});

// Step 3: Proxy Control Panel.

// Step 3: Enable button selected.
document.getElementById("enable").addEventListener("click", () => {
  browser.runtime.sendMessage({ action: "enable" });
});

// Step 3: Disable button selected.

document.getElementById("disable").addEventListener("click", () => {
  browser.runtime.sendMessage({ action: "disable" });
});

// Step 3: Reconfigure button selected.

document.getElementById("reconfigure").addEventListener("click", () => {
  browser.storage.local
    .get(["proxyHost", "proxyPort"])
    .then((proxySettings) => {
      if (proxySettings.proxyHost) {
        document.getElementById("host").value = proxySettings.proxyHost;
      }
      if (proxySettings.proxyPort) {
        document.getElementById("port").value = proxySettings.proxyPort;
      }
      showStep(2);
    });
});
