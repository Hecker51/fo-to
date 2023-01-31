
////////////////////////////////////////////////////
var reconhecimentofala = window.webkitSpeechRecognition;

var reconhecidu = new reconhecimentofala();  

var Textbox = document.getElementById("chat"); 





function criativo()
 {
    Textbox.innerHTML = " ";
    reconhecidu.start(); 



}

reconhecidu.onresult = function(event)
{



    console.log(event)
var escrevido = event.results[0][0].transcript;

document.getElementById("chat").innerHTML = escrevido;
if(escrevido == "tire minha selfie"){
    falativo()

}



}

function falativo()
{
var sintese = window.speechSynthesis
var texto = "tirando sua selfie em  5, 4, 3, 2, 1"
texto_falado = new SpeechSynthesisUtterance(texto);

sintese.speak(texto_falado);
Webcam.attach(camera);

       
setTimeout(function(){
    takeSelfie()
save()
},5000);

}
camera = document.getElementById("camera"); 
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });


  function takeSelfie()
  {
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img id='selfieimage' src="+data_uri+">"




    }       )
  }

  function save()
  {
image = document.getElementById("selfieimage").src;

document.getElementById("link").href = image
document.getElementById("link").click();    


  }