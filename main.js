prediciction_1="";
prediciction_2="";
Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+ "' />";
    });
}
console.log("ml5version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RN4RsiveN/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speakdata1="The first prediction is "+prediciction_1;
    speakdata2="And the second prediction is "+prediciction_2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}
if(result[0].label=="victory"){
    document.getElementById("update_enmoji1").innerHTML="&#9996"; 
 }
 if(result[0].label=="Crossed Fingers"){
     document.getElementById("update_enmoji1").innerHTML="&#128532"; 
  }
  if(result[0].label=="Best"){
     document.getElementById("update_enmoji1").innerHTML="&#129310"; 
  }
  
  if(result[0].label=="Amazing"){
     document.getElementById("update_enmoji2").innerHTML="&#128516"; 
  }
  

