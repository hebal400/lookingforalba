

function whenLoaded() {
    
    window.addEventListener('message', (event) => {
        if(event.data !== 'requestDataFromParent') return;

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
    }, false);
    
}

function callbackAfterLoad(parsedData) {
    let childFrame = document.getElementById('wrap');
    let origin = window.origin;
    let dataObject = { result: true, origin, parsedData };

    childFrame.contentWindow.postMessage(dataObject, '*')
}

window.addEventListener('DOMContentLoaded', function () {
    window.removeEventListener('DOMContentLoaded', arguments.callee, false);
    whenLoaded();
}, false);