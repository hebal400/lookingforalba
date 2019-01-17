

function whenLoaded(event) {
    window.addEventListener('message', (event) => {
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
    let dataObject = { origin, parsedData };

    childFrame.contentWindow.postMessage(dataObject, '*')
    console.log('test 메시지')
}

window.addEventListener('DOMContentLoaded', whenLoaded);