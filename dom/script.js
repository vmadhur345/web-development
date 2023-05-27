const decrement =document.getElementById("decrement");
const increment=document.getElementById("increment");
const rest=document.getElementById("reset");
const value=document.getElementById("value");

decrement.addEventListener("click",()=>{
    const ans=Number(value.innerText);
    if(ans>0){
        ans.innerText=value-1;
    }else{
        console.log("negative value not allowed");
    }
});
increment.addEventListener("click",()=>{
    const ans=Number(value.innerText);
    if(value>=10){
        console.log("values greater than 10 are not allowed");
    }else{
        value.innerText=ans+1;
    }
});

rest.addEventListener("click",()=>{
    value.innerText=0;
})
