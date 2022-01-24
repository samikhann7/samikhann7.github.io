// let i=document.images;
// let s=document.scripts;
// Array.from(i).forEach((x)=>{
//     console.log(x);
// })
// Array.from(s).forEach((x)=>{
//     console.log(x);
// })
let l=document.links
let arr=[]
Array.from(l).forEach((x)=>{
    if(x.innerText.includes("M")){
        console.log(x);
    }
})
