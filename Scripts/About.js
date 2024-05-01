window.onload = function() {
    makePopUp(About);
};

function makePopUp(event){
    let body = document.getElementsByClassName('Container')[0];
    
    let popUpHeader = "<div class='PopUpHeader'> <h1 class='PopUpText'>"+ event +"</h1>    </div>";

    let popUpAboutText = "<h3 class='PopUpBodyText'><br><br>from ALİ to İLKNUR with ❤<br><br>v1.0.2 - 2024/05/01</h3>";

    let popUpBody = "<div class='PopUpBody'>" + popUpAboutText + "</div>";

    let popUp = "<div id='PopUp'>"+ popUpHeader + popUpBody +"</div>";
    body.innerHTML += popUp;
}
