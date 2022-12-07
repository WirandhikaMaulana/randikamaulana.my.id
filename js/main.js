function countDownDate() {
    "use strict";
    // Set the date we're counting down to
    //Note: JavaScript counts months from 0 to 11:
    // January = 0.
    // December = 11.
    var countDownDate = new Date("October 1, 2022 18:00:00");

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
// Enable hidden nav bar
{
    const nav = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
        console.log("going up");
      } else {
        nav.classList.remove("nav--hidden");
        console.log("going down");
      }
  
      lastScrollY = window.scrollY;
    });
  }
  
countDownDate();

function open_invitation(){
    "use strict";
    const popupScreen=document.querySelector(".popup_screen")
    
    popupScreen.classList.remove("active");
    music_play();
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
    var phone = document.getElementById("phone_rsvp").value;
    var rsvp_status = document.getElementsByName("rsvp_status");
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
        alert("RSVP already sendet, Thank you!");
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
    if (name == "" && phone == undefined && wish == "") {
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