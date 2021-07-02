document.querySelector("body").addEventListener('click',(function(){

    let color =Math.floor(Math.random()*16777215).toString(16);

    document.querySelector("body").style.backgroundColor = "#"+color;
    document.querySelector("button").innerHTML= color;
})) 