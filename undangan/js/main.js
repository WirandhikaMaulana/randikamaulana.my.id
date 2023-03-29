console.log("javascript-loaded");
initialisieren();
var rb_matrimony_rsvp=document.getElementsByName("matrimony_rsvp");
var rb_reception_rsvp=document.getElementsByName("reception_rsvp");
function initialisieren(){
    "use strict";
    countDownDate();
    rsvp_status();
    var holy_matrimony_rsvp=document.getElementById("holy_matrimony_rsvp");
    var reception_rsvp=document.getElementById("reception_rsvp");
    var cant_attend_rsvp=document.getElementById("cant_attend_rsvp");

    // holy_matrimony_rsvp.addEventListener("click", checkbox_open_close_cant);
    reception_rsvp.addEventListener("click", checkbox_open_close_cant);
    cant_attend_rsvp.addEventListener("click", checkbox_open_close);


    // hidden item
    // document.querySelector("main").style.display="none";
    // document.querySelector("footer").style.display="none";

    // document.getElementById("weddingPasscode").addEventListener('keypress', function (e) {
    //     if (e.key === 'Enter') {
    //     check_passcode();
    //     }
    // });
    
}
function rsvp_status(){
    var rsvp_status=document.querySelector("#rsvp").dataset.rsvp_status;
    if(rsvp_status==0){
        document.querySelector(".rsvp_confirmed").style.display="none";
    }else if(rsvp_status==1){
        document.querySelector(".rsvp_confirmed").style.display="block";
        document.querySelector(".rsvp_card").style.display="none";
    }
}

function countDownDate() {
    "use strict";
    // Set the date we're counting down to
    //Note: JavaScript counts months from 0 to 11:
    // January = 0.
    // December = 11.
    
    var countDownDate = new Date("October 1, 2023 18:00:00");

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("countDay").textContent = days;
        document.getElementById("countHour").textContent = hours ;
        document.getElementById("countMin").textContent = minutes ;
        document.getElementById("countSec").textContent = seconds;
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countDay").textContent = 0 ;
            document.getElementById("countHour").textContent = 0 ;
            document.getElementById("countMin").textContent = 0 ;
            document.getElementById("countSec").textContent = 0;
            }
    }, 1000);
}





function checkbox_open_close_cant(){
    // if(holy_matrimony_rsvp.checked==true ||reception_rsvp.checked==true ){
    if(reception_rsvp.checked==true ){
        cant_attend_rsvp.disabled=true;
        // if(holy_matrimony_rsvp.checked==true){
            
        //     rb_matrimony_rsvp[0].disabled=false;
        //     rb_matrimony_rsvp[1].disabled=false;
        // }
        if(reception_rsvp.checked==true){
            
            rb_reception_rsvp[0].disabled=false;
            rb_reception_rsvp[1].disabled=false;
        }
        
    }else {
        cant_attend_rsvp.disabled=false;
    }
    //if(holy_matrimony_rsvp.checked==false ||reception_rsvp.checked==false ){
    if(reception_rsvp.checked==false ){
        // if(holy_matrimony_rsvp.checked==false){
        //     for(var i=0;i<rb_matrimony_rsvp.length;i++){
        //         rb_matrimony_rsvp[i].checked = false;
        //     }
        //     rb_matrimony_rsvp[0].disabled=true;
        //     rb_matrimony_rsvp[1].disabled=true;
        // }
        if(reception_rsvp.checked==false){
            for(var i=0;i<rb_reception_rsvp.length;i++){
                rb_reception_rsvp[i].checked = false;
            }
            rb_reception_rsvp[0].disabled=true;
            rb_reception_rsvp[1].disabled=true;
        }
    }
}
function checkbox_open_close(){
    if(cant_attend_rsvp.checked==true){
        reception_rsvp.disabled=true;
        // holy_matrimony_rsvp.disabled=true;
        // rb_matrimony_rsvp[0].disabled=true;
        // rb_matrimony_rsvp[1].disabled=true;
        rb_reception_rsvp[0].disabled=true;
        rb_reception_rsvp[1].disabled=true;
        // for(var i=0;i<rb_matrimony_rsvp.length;i++){
        //     rb_matrimony_rsvp[i].checked = false;
        // }
        for(var i=0;i<rb_reception_rsvp.length;i++){
            rb_reception_rsvp[i].checked = false;
        }
   
    }else {
        reception_rsvp.disabled=false;
        // holy_matrimony_rsvp.disabled=false;
    }
}

function check_passcode(){
    "use strict";
    let info=document.getElementById("weddingPasscode");
    let userinput=info.value;
    let pass=document.getElementById("wedding_info").dataset.pass;

    if(userinput==pass){
        open_invitation();
    }else if (userinput=="") {
        alert("Please input the passcode");
    }else{
        alert("Wrong Passcode, Please input again.");
    }
}

function open_invitation(){
    "use strict";
    const popupScreen=document.querySelector(".popup_screen")
    popupScreen.classList.remove("active");
    music_play();
    document.querySelector("main").style.display="inline";
    document.querySelector("footer").style.display="inline";
}


function music_play(){
    "use strict";
    var mediaSong= document.getElementById("mediaSong");
    var icon_button=document.getElementById("music_icon");
    var audio_status=document.getElementById("audioStatus");
    mediaSong.play();
    icon_button.src="Image/PauseButton.png";
    audio_status.value = "playing";
}

function music_player(){
    var mediaSong= document.getElementById("mediaSong");
    var icon_button=document.getElementById("music_icon");
    var audio_status=document.getElementById("audioStatus");
    if(audio_status.value=="playing"){
        mediaSong.pause();
        icon_button.src="Image/PlayButton.png";
        audio_status.value="pause"
    }else{
        mediaSong.play();
        icon_button.src="Image/PauseButton.png";
        audio_status.value="playing"
    }
}



function rsvp_alert() {
    "use strict";
    
    var name = document.getElementById("name_rsvp").value;
    var phone = document.getElementById("telp").value;
    // var holy_matrimony_rsvp=document.getElementById("holy_matrimony_rsvp");
    var reception_rsvp=document.getElementById("reception_rsvp");
    // var cant_attend_rsvp=document.getElementById("cant_attend_rsvp");


    if(reception_rsvp.checked==false){
        alert("Please check the box")
        return false;
    }
    // if(cant_attend_rsvp.checked==false &&reception_rsvp.checked==false && holy_matrimony_rsvp.checked==false){
    //     alert("Please check one box")
    //     return false;
    // }
    // if(holy_matrimony_rsvp.checked==true){
    //     if( rb_matrimony_rsvp[0].checked==false && rb_matrimony_rsvp[1].checked==false ){
    //         alert ("Please select, how many pax");
    //         return false;
    //     }
    // }
    if(reception_rsvp.checked==true ){
        
        if( rb_reception_rsvp[0].checked==false && rb_reception_rsvp[1].checked==false ){
             alert ("Please select, how many pax");
            return false;
        }
    }
    if (name == "" && phone == undefined) {
        alert("Please fill the form")
        return false;
    }
    if (name == "") {
        return false;
    }
    if (phone == "") {
        return false;
    }
    else {
        alert("RSVP already sent, Thank you!");
        return true;
    }
    
}
function validateFormRSVP() {
    "use strict";
    var name = document.getElementById("name").value;
    var phone = document.getElementById("telp").value;
    var rsvp_status = document.getElementsByName("rsvp_status");
    let name_bride=document.getElementById("rsvp_data").dataset.name_bride;
    let name_groom=document.getElementById("rsvp_data").dataset.name_groom;
    let whatsapp_number=document.getElementById("rsvp_data").dataset.whatsapp;
    
    if(rsvp_status[0].checked){
        rsvp_status="Yes";
    }else if(rsvp_status[1].checked){
        rsvp_status="No";
    }else{
        rsvp_status="Unknown";
        return false;
    }

    if (name == "" && phone == undefined && rsvp_status =="Unknown") {
        alert("Please fill the form")
        return false;
    }
    if (name == "") {
        return false;
    }
    if (phone == "") {
        return false;
    }
    else {
        var url = 
        "https://wa.me/+"+whatsapp_number+"?text="+name_groom+"%20%26%20"+name_bride+"%20Wedding%20%0A1%20October%202022%20-%20Fairmont%20Jakarta%0A%0AATTENDANCE%20CONFIRMATION%0A%0ADear%20"+name_groom+"%20%26%20"+name_bride+"%2C%20thank%20you%20for%20the%20invitation%20to%20your%20wedding%20day.%0AIt%20is%20with%20a%20great%20pleasure%20that%20I%20would%20like%20to%20inform%20you%20as%20follows%3A%0A%0AGuest%20Name%3A%20"+name+"%0A"+"Phone%3A%20%2B62"+phone+"%0A"+ "Attend%3A%20"+rsvp_status+"%0A%0AThank%20you!"
        window.open(url, '_blank').focus();
        alert("RSVP already sendet");
        return true;
    }
}
function validateForm() {
    "use strict";
    var name = document.getElementById("sender_name").value;
    var phone = document.getElementById("sender_number").value;
    var wish = document.getElementById("wedding_message").value;
    if (name == "" && phone == undefined && wish=="") {
        alert("Please fill the form")
        return false;
    }
    if (name == "") {
        return false;
    }
    if (phone == "") {
        return false;
    }
    if(wish==""){
        alert("Write your message.")
        return false;
    }
    else {
        alert("Message already sendet")
        return true;
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

