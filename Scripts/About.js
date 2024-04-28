function aboutPopUp(){
    let body = document.getElementsByClassName('Container')[0];
    
    let popUpHeader = "<div class='PopUpHeader'> <h1 class='PopUpText'>About:</h1>    </div>";
    let popUpBodyText = "<h1 class='PopUpBodyText'>Developed by Ali BEYAZ for İlknur BEYAZ with ❤</h1>";

    let br = "<br>";

    let popUpBody = "<div class='PopUpBody'>" + popUpBodyText +br + br + "</div>";

    let popUp = "<div id='PopUp'>"+ popUpHeader + popUpBody +"</div>";
    body.innerHTML += popUp;
}
