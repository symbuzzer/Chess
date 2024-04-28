function aboutPopUp(){
    let body = document.getElementsByClassName('Container')[0];
    
    let popUpHeader = "<div class='PopUpHeader'> <h1 class='PopUpText'>About</h1></div>";
    let popUpBodyText = "<h1 class='PopUpBodyText'>Developed by<br>Ali BEYAZ<br>for<br>İlknur BEYAZ ❤</h1>";
    let br = "<br>";

    let closeButton = "<button id='closeButton' style='cursor: pointer;'>Close</button>";  // Close butonu ekleme

    let popUpBody = "<div class='PopUpBody'>" + popUpBodyText + br + br + closeButton + "</div>";  // Butonu pop-up body'e ekleme

    let popUp = "<div id='PopUp'>" + popUpHeader + popUpBody + "</div>";
    body.innerHTML += popUp;

    document.getElementById('closeButton').addEventListener('click', closePopUp);
}

function closePopUp() {
    let popUp = document.getElementById('PopUp');
    if (popUp) {
        popUp.parentNode.removeChild(popUp);
    }
}
