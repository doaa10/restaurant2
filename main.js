window.addEventListener('scroll',function(){
    const header=document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY >0);
});
const btn=document.getElementById('bb');
function food(){
    fetch("https://foodish-api.herokuapp.com/images/idly/idly22.jpg")
    .then(res => res.json())
    .then(data =>{
    document.addEventListener('click',btn)
    
    });
}