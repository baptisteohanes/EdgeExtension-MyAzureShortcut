function openPage() {
  browser.tabs.create({
    url: "https://portal.azure.com"
  });
}
browser.browserAction.onClicked.addListener(openPage);