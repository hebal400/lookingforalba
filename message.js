function sendContentScriptMessage() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { send: "requestDataFromDOM" },
            callbackAfterLoad
        )
    })
}

function openNewTab(url) {
    chrome.tabs.create({ url });
}

function sendNotification(text) {

}
function whenLoaded() {
    
    window.addEventListener('message', (event) => {
        let receivedData = event.data;

        switch(receivedData.message) {
            case 'requestDataFromParent':
                sendContentScriptMessage();
                break;
            case 'requestParentOpenTab':
                console.log("됐으");
                let { link } = event.data;
                openNewTab(link);
                break;
            case 'sendNotification':
                let { text } = event.data;
                sendNotification(text);
            default:
                return;
        }
        if(receivedData.message !== 'requestDataFromParent') return;

        
    }, false);
    
}

function callbackAfterLoad(parsedData = null) {
    let childFrame = document.getElementById('wrap');
    let origin = window.origin;

    let dataObject = { result: (parsedData !== null), origin, parsedData };

    childFrame.contentWindow.postMessage(dataObject, '*')
}

window.addEventListener('DOMContentLoaded', function () {
    window.removeEventListener('DOMContentLoaded', arguments.callee, false);
    whenLoaded();
}, false);