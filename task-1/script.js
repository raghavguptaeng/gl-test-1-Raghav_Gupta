document.getElementById('colorChanger').addEventListener('click', function(){
    var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    document.getElementById('colorBox').style.backgroundColor = color;
    document.getElementById('colorChanger').style.backgroundColor = color;
    document.getElementById('teller').innerText = "Background Color :"+color;
});