function aboutPopUp() {
    let body = document.getElementsByClassName('Container')[0];
    
    let popUpHeader = "<div class='PopUpHeader'><h1 class='PopUpText'>About:</h1></div>";
    let popUpBodyText = "<h1 class='PopUpBodyText'>Developed by<br>Ali BEYAZ<br>for<br>İlknur BEYAZ<br>with ❤<br>2024/04/28</h1>";
    let br = "<br>";

    // buttonsContainer ve restartButton div'lerini oluşturma
    let buttonsContainer = "<div id='buttonsContainer'>" +
        "<div id='generalButton'></div>" +
        "</div>";

    let popUpBody = "<div class='PopUpBody'>" + popUpBodyText + br + br + buttonsContainer + "</div>";
    
    let popUp = "<div id='PopUp'>" + popUpHeader + popUpBody + "</div>";
    body.innerHTML += popUp;

    // Close butonunu restartButton div'ine ekleme
    let closeButton = "<button id='closeButton' style='cursor: pointer;'>Close</button>";
    document.getElementById('generalButton').innerHTML = closeButton;

    // Close butonuna tıklama olayını ekleyen fonksiyon
    document.getElementById('closeButton').addEventListener('click', closePopUp);
}

function closePopUp() {
    let popUp = document.getElementById('PopUp');
    if (popUp) {
        popUp.parentNode.removeChild(popUp);
    }
}
