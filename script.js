let size=24;
function mouseover(e){
    if(e.buttons==1){
        e.target.style.backgroundColor = 'green';
    }
    
}
let grid=document.getElementById("grid");
for( let i=0;i<(size*size);i++){
    let div=document.createElement('div');
    div.classList.add('grid-element');
    div.style.minWidth=(grid.offsetHeight/size)+'px';
    div.addEventListener('mouseover',mouseover);
    div.addEventListener('mousedown',mouseover);
    grid.appendChild(div);
}
