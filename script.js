

let container = document.querySelector('.container');

for(i =0; i< 30; i++){
    let color_container=document.createElement('div');
    color_container.classList.add('color-container');
    container.appendChild(color_container);
}

const colorContainers=document.querySelectorAll('.color-container');

function generateThem(){
    colorContainers.forEach( (containers,idx) => {
        let colors = randomColor()
        containers.style.backgroundColor=`#${colors}`;
        containers.innerHTML=`#${colors}`;
    })
}

generateThem()


function randomColor(){
    const chars= '0123456789ABCDEF';
    colorLenght=6;
    let color='';
    for(let i=0; i< colorLenght;i++){
        const randomNum= Math.floor(Math.random()*chars.length);
        color += chars.substring(randomNum, randomNum+1);

        
    }
    return color;
}

randomColor()