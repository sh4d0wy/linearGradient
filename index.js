function colorChanger(){
    var hexcode1 = "#"+hexcodeGenerator();
    var hexcode2 = "#"+hexcodeGenerator();
    var hexcode3 = "#"+hexcodeGenerator();
    document.getElementById("color1").textContent = hexcode1;
    document.getElementById("color2").textContent = hexcode2;
    document.getElementById("color3").textContent = hexcode3;
    
    document.querySelector(".container").style.backgroundImage= "linear-gradient(to right top,"+hexcode1 +","+hexcode2+","+hexcode3+")";
}

function hexcodeGenerator(){
    document.getElementById("copy").textContent = "Copy";
    var arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hexcode = "";
    for(var i = 0; i < 6; i++){
        var r = Math.floor(Math.random() * arr.length);
        hexcode += arr[r];
        }
    return hexcode;
}

function copy(){
    var copytext = document.querySelectorAll(".content p")[1];
    navigator.clipboard.writeText(copytext.textContent);
    document.getElementById("copy").textContent = "Copied";
}