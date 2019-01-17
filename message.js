window.onload = () => {
    let childFrame = document.getElementById('wrap');

    let origin = window.origin,
        parsedData = '테스트 메시지 날립니다.';

    let dataObject = { origin, parsedData };
    childFrame.contentWindow.postMessage(dataObject, '*');
}