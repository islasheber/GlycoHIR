function toggleInfo(infoId) {
    var infoElements = document.getElementsByClassName('info');
    for (var i = 0; i < infoElements.length; i++) {
        infoElements[i].style.display = 'none';
    }
    var infoElement = document.getElementById(infoId);
    if (infoElement.style.display === 'none') {
        infoElement.style.display = 'block';
    } else {
        infoElement.style.display = 'none';
    }
}
