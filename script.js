function send(){
    var addressBox = document.getElementById("address");
    var subjectBox = document.getElementById("subject");
    var bodyBox = document.getElementById("body");
    const script = "https://script.google.com/a/macros/fcpsschools.net/s/AKfycbwAC6Oaozf2Qta8I2I1rlCLeIhIww50EXG0TAq82C93KawKmveOcJz-x-y5gawbX_CP_A/exec"
    open(script+"?method="+addressBox.value+"|"+subjectBox.value+"|"+bodyBox.value);
}
function decrypt(){
    var inputBox = document.getElementById("unencrypt");
    var outputBox = document.getElementById("output");
    var temparray = inputBox.value.split("|");
    var temp = "";
    for(i in temparray){
        temp = temp + String.fromCharCode(Number(temparray[i]))
    }
    outputBox.innerHTML = temp;
}