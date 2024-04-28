function aboutPopUp() {
  let body = document.getElementsByClassName('Container')[0];
  let popUpHeader = "<div class='PopUpHeader'><h1 class='PopUpText'>About</h1></div>";
  let popUpBodyText = "<h1 class='PopUpBodyText'>Developed by<br>Ali BEYAZ<br>for<br>İlknur BEYAZ<br>with ❤<br>v1.0.0 - 2024/04/28</h1>";
  let br = "<br>";

  let buttonsContainer = "<div id='buttonsContainer'><button id='closeButton' class='generalButton' style='cursor: pointer;'>Close</button></div>";

  let popUpBody = "<div class='PopUpBody'>" + popUpBodyText + br + br + buttonsContainer + "</div>";
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
