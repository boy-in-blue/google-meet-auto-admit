chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'reload') {
        chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log('injected'));
    }
});