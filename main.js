

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90

});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function Take_Snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("Result").innerHTML="<img id='image1' src='"+data_uri+"'>";
    });
}
console.log("p5jsversion-",p5.version);
classifier=p5.imageClassifier("https://teachablemachine.withgoogle.com/models/VrN8lNEZP/model.jason",modelloaded);
function modelloaded(){
    console.log("model is loaded")
}
function check(){
    img=document.getElementById("image1");
    classifier.classify(img,gotResult);
}
function gotResult(error, results) { if (error) { console.error(error); } else { console.log(results);
     document.getElementById("result_object_name").innerHTML = results[0].label;
 document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
 } }