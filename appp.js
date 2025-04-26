//DOM
//selecting elements
//id
// let container=document.getElementById('container');
// console.log(container);
// //class
// let brands=document.getElementsByClassName('brand');
// console.log(brands);

// //tagname
let and=document.getElementsByTagName('h2');
console.log(and);

// //queryselector
let container1=document.querySelector('#container')
console.log(container1);
// let brands1=document.querySelector('.brand')
// console.log(brands1);
let ands=document.querySelector('h2.and')
// console.log(ands);
// container=document.querySelectorAll('#container')
// console.log(container);

//textcont
ands.innerText = '<em>cat</em>'

// console.log(ands.innerHTML);
// console.log(ands.innerText);
// console.log(ands.textContent);



//attributes
console.log(ands.getAttribute('id'));

ands.setAttribute('id', 'ify')
console.log(ands.getAttribute('id'));
console.log(ands.attributes);
let image=document.querySelector('#img')
image.setAttribute('src', "./image/avatar.png")
console.log(image);

//style
// console.log(ands.style.display = 'none');

//create Element
let span = document.createElement('span');
//append
span.innerText = 'Sample text';
span.style.marginLeft = '20px'
ands.append(span)
//remove
ands.removeChild(span);

//Event listeners
let colors = ['red', 'green', 'blue', 'brown'];

ands.addEventListener('keypress', ()=>{
    let randomIndex = Math.floor(Math.random()* colors.length);
    console.log(colors[randomIndex]);
    
    ands.style.color = colors[randomIndex]
})