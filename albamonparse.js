chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.send === 'requestDataFromDOM') {

        let infoBox = document.querySelector('div.companyInfo.infoBox');

        let title = infoBox.querySelector('div.recruitInfo>h1').textContent.trim(),
            companyName = document.querySelector('span.companyName').textContent.trim(),
            workInfo = infoBox.querySelectorAll('div.viewWorkInfo.clearfix>div.item'),
            workingPeriod = workInfo[1].querySelector('div.itemInfo').textContent.trim(),
            payType = workInfo[0].querySelector('div.circle').textContent.trim(),
            pay = workInfo[0].querySelector('div.itemInfo').textContent.trim(),
            DayOfWeek = workInfo[2].querySelector('div.itemInfo').textContent.trim(),
            workingTime = workInfo[3].querySelector('div.itemInfo').textContent.trim(),
            workingAddress = document.querySelector('div.tabItem_workArea>div.workAddr>span').textContent.trim(),
            // tel = document.querySelector('ul.info>li.telEmail>')
            uri = window.location.href;

        let sendData = {
            title,
            companyName,
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