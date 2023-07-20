var switcher = document.getElementById("switcher");
switcher.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        switcher.src = "images/sun.png";
    }else{
        switcher.src = "images/moon.png";
    }
}