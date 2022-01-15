var SpeechRecognition = window.webkitSpeechRecognition; //webspeech API it converts speech to text

var recognition = new SpeechRecognition(); //new keyword is used to create webspeech API

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie --- ")
        speak();
    }


    document.getElementById("textbox").innerHTML = Content;
}

function speak() {
    var synth = window.speechSynthesis; // this is an API which converts text to speech

    speak_data = "Taking your Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data); //SpeechSynthesisUtterance is a function of API which converts text to speech 

    synth.speak(utterThis);
    Webcam.attach(camera); // Webcam.attach is to automate the process of starting the camera

    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image"  src= "' + data_uri + '">';
    }); // Webcam.snap is an inbuilt function inside webcam.js 
} // we pass the data_uri to get the preview of the snapshot

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}