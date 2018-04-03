 function numEnt(event){
     var num = event.target.innerText;
     var resultBox = document.getElementById("answere-box").innerText;
     document.getElementById("answere-box").innerHTML=resultBox+num;
 }
function equalToOperator(){
    var resultBox = document.getElementById("answere-box").innerText;
    var finalAns = eval(resultBox);
    document.getElementById("answere-box").innerHTML=finalAns;
}
function resetfun(){
    document.getElementById("answere-box").innerHTML="";
}
function deletingChar(){
     var resultBox = document.getElementById("answere-box").innerText;
     var deletedString = resultBox.slice(0,resultBox.length-1);
     document.getElementById("answere-box").innerText = deletedString;
}