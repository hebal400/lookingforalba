chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.send === 'requestDataFromDOM') {

        let title = document.querySelector('p.detailTitle').innerText,
            workingPeriod = document.querySelector('ul.info>li.workperiodcd>a').innerText,
            DayOfWeek = document.querySelector('ul.info>li.workweekcd>a').innerText,
            workingTime = document.querySelector('ul.info>li.worktimecd').innerText,
            paySelector = document.querySelector('ul.info>li.getPay.divide'),
            payType = paySelector.querySelector('p.pay>img').alt,
            pay = paySelector.querySelector('p.pay>strong').innerText,
            workingAddress = document.querySelector('ul.info>li.address.divide>strong').innerText,
            // tel = document.querySelector('ul.info>li.telEmail>')
            uri = window.location.href;

        let sendData = {
            title,
            workingPeriod,
            DayOfWeek,
            workingTime,
            payType,
            pay,
            workingAddress,
            uri
        };

        response(sendData);
    }
})