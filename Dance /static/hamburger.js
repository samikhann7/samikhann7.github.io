burger=document.querySelector('.burger')
ul=document.querySelector('.ul')
schedule=document.querySelector('#schedule')
nav=document.querySelector('#nav')
logo=document.querySelector('#logo')

burger.addEventListener('click', ()=>{
    ul.classList.toggle('v-class')
    schedule.classList.toggle('v-class')
    logo.classList.toggle('l-class')
    nav.classList.toggle('h-nav')
    
})
