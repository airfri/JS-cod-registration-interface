//从Dom中选择元素
//console.log(window);
//window.alert(1);
//singel element
//console.log(document.querySelector("h1"));

//multiple element
//console.log(document.querySelectorAll('.item'))
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

//const items=document.querySelectorAll('.item')
//items.forEach((item)=>console.log(item))//遍历


//const ul=document.querySelector('.items');

//修改
//ul.remove();
//ul.lastElementChild.remove()
//ul.firstElementChild.textContent="Hello";
//ul.children[1].innerText="Brad"
//ul.lastElementChild.innerHTML='<h1>Hello</h1>'

//const btn=document.querySelector('.btn');
//btn.style.background="red" //写成函数 建立与用户之间的交互
//创建事件监听
// btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     //classList.add增加类
//     //console.log(e.target.className);
//     document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'
// });

const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg')
const userList=document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    //console.log(nameInput.value);
    if(nameInput.value===''||emailInput.value==''){
        msg.classList.add('error');
        msg.innerHTML='Plsese enter all fileds';
        setTimeout(()=>msg.remove(),3000);
    }
    else{
        //console.log('success');
        const li=document.createElement('li');//新建
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));//赋值
        userList.appendChild(li);

        //clear fields
        nameInput.value=''
        emailInput.value=''
    }
}