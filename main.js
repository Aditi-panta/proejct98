var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML=" ";
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content=="take my selfie"){
        speak();
    }
    

}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in five seconds" ;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
    },5000);
    setTimeout(function(){
        take_snapshot1();
    },10000);
    setTimeout(function(){
        take_snapshot2();
    },15000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+ data_uri+'">';
    });
}
function take_snapshot1(){
    Webcam.snap(function(data_uri1){
        document.getElementById("result1").innerHTML='<img id="selfie_image1" src="'+ data_uri1+'">';
    });
}
function take_snapshot2(){
    Webcam.snap(function(data_uri2){
        document.getElementById("result2").innerHTML='<img id="selfie_image2" src="'+ data_uri2+'">';
    });
}