chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.send === 'requestDataFromDOM') {

        let title = document.querySelector('p.detailTitle').textContent.trim(),
            workingPeriod = document.querySelector('ul.info>li.workperiodcd>a').textContent.trim(),
            DayOfWeek = document.querySelector('ul.info>li.workweekcd>a').textContent.trim(),
            workingTime = document.querySelector('ul.info>li.worktimecd').childNodes[1].textContent.trim(),
            paySelector = document.querySelector('ul.info>li.getPay.divide'),
            payType = paySelector.querySelector('p.pay>img').alt,
            pay = paySelector.querySelector('p.pay>strong').textContent.trim(),
            workingAddress = document.querySelector('ul.info>li.address.divide>strong').childNodes[0].textContent.trim(),
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