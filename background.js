chrome.action.onClicked.addListener(async function (tab) {

  chrome.tabs.captureVisibleTab(
    null,
    { format: "png" /* png, jpeg */, quality: 80 },
    function (dataUrl) {
      chrome.downloads.download({
        url: dataUrl, // The object URL can be used as download URL
        filename: "screenshot.png",
      });
    }
  );
});
