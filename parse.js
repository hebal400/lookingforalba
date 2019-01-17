chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.send === 'requestDataFromDOM') {
        let send = "추후 보내질 데이터";
        response(send);
    }
})