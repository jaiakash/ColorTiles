console.log("True");

color=['Red','Blue','White','yellow','chartreuse','orange']

var qgrd = document.querySelectorAll('.ansgrid')
var qarr=[];
var agrd = document.querySelectorAll('.quesgrid')
var aarr=[];

function set_a_color(){
    for(let i=0;i<qgrd.length;++i){
        let a= Math.random()*color.length;
        let j=Math.floor(a);
        qgrd[i].style.backgroundColor = color[j];
        qarr.push(color[j]);
    }
}

function set_q_color(){
    for(let i=0;i<agrd.length;++i){
        let a= Math.random()*color.length;
        let j=Math.floor(a);
        agrd[i].style.backgroundColor = color[j];
        aarr.push(color[j]);
    }
}

set_a_color();
set_q_color();