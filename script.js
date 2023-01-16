let size=24;
let color='black';
let mode='Color Select';
document.getElementById('gridsizelabel').innerText = size;
document.getElementById('mode').value= mode;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function mouseover(e){
    if(e.buttons==1){
        if(mode=='Eraser'){
            e.target.style.backgroundColor = 'white';
        }else if(mode=='Color Select'){
            e.target.style.backgroundColor = color;
        }else if(mode=='Rainbow'){
            e.target.style.backgroundColor = getRandomColor();
        }else if(mode='Darken'){
    
        }
    }
}
function setSliderValue(e){
    size = e.target.value;
    document.getElementById('gridsizelabel').innerText= size;
    loadGrid(size);
}
function loadGrid(size){
    let grid=document.getElementById("grid");
    grid.innerHTML='';
    for( let i=0;i<(size*size);i++){
        let div=document.createElement('div');
        div.classList.add('grid-element');
        div.style.minWidth=(grid.offsetHeight/size)+'px';
        div.addEventListener('mouseover',mouseover);
        div.addEventListener('mousedown',mouseover);
        grid.appendChild(div);
    }
}
function clearGrid(e){
    loadGrid(size);
}

function selectColor(e){
    color= e.target.value;
}

function selectMode(e){
    mode= e.target.value;
    erase=false;
    if(mode=='Color Select'){
        document.getElementById("color-selector").setAttribute("type",'color');
    }else if(mode=='Rainbow'){
        document.getElementById("color-selector").setAttribute("type",'hidden');
    }else if(mode=='Darken'){
        document.getElementById("color-selector").setAttribute("type",'hidden');
    }else if(mode=='Eraser'){
        document.getElementById("color-selector").setAttribute("type",'hidden');
    }
}

loadGrid(size);
let slider=document.getElementById("slider");
slider.addEventListener('change',setSliderValue);

let clear=document.getElementById("clear");
clear.addEventListener('click',clearGrid);

let colorSelector=document.getElementById("color-selector");
colorSelector.addEventListener('change',selectColor);

let selector=document.getElementById("mode");
selector.addEventListener('change',selectMode);