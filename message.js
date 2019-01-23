

function whenLoaded() {
    
    window.addEventListener('message', (event) => {
        let receivedData = event.data;

        switch(receivedData.message) {
            case 'requestDataFromParent':
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
                break;
            case 'requestParentOpenTab':
                console.log("됐으");
                let { link } = event.data;
                chrome.tabs.create({ url: link });
                break;
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