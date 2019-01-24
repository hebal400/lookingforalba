function notification(text) {
    chrome.notifications.create('reminder', {
        type: 'basic',
        title: '알바몬',
        message: text,
        iconUrl: 'images/logo.jpg'
    })
}

