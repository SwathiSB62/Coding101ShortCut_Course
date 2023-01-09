const maincontainer=document.querySelector('#main');

//let headercontainer=document.querySelector('#header');
//headercontainer.appendChild(header);
//header.textContent='Coding101 Web Essentials';

var header = document.createElement("header"),
h2 = document.createElement("h2");
h2.textContent = "Coding101 Web Essentials";
header.appendChild(h2);
h2.setAttribute('style','text-align:center');
maincontainer.appendChild(header);


//using imagearray

//var imgarr=['image/html.png','image/css.png','image/JS.png']

//const imagediv1=document.querySelector('.imgdiv1');
//imgarr.forEach(msg => {
    //imagediv1.innerHTML += `<p>${msg}</p>`});



const imagediv=document.querySelector('.imgdiv');
imagediv.setAttribute('style','width:80%;');
imagediv.setAttribute('style','display:flex;');
imagediv.setAttribute('style','justify-content: space-evenly');
imagediv.setAttribute('style','margin:auto;');


const image1=document.createElement('img');
image1.src='image/html.png';
image1.className='image'


const image2=document.createElement('img');
image2.src='image/css.png';
image2.className='image'

const image3=document.createElement('img');
image3.src='image/JS.png';
image3.className='image'

imagediv.appendChild(image1);
imagediv.appendChild(image2);
imagediv.appendChild(image3);
maincontainer.appendChild(imagediv);
