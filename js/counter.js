//Counter
let counter=0;


//Counter div
const divCounter= document.createElement("div");
divCounter.className=  "divCounter";
divCounter.innerHTML= counter;
document.body.appendChild(divCounter);

//- Button
const reductionButton= document.createElement("button");
reductionButton.className= "reductionButton";
reductionButton.innerHTML= "-";
reductionButton.addEventListener("click", () =>{
    counter --;
    divCounter.innerHTML=counter;

})

document.body.appendChild(reductionButton);

// Reset Button
const resetButton= document.createElement("button");
resetButton.className= "resetButton";
resetButton.innerHTML= "reset";
resetButton.addEventListener("click", () =>{
    counter=0;
    divCounter.innerHTML=counter;
})
document.body.appendChild(resetButton);

//+ Button
const increaseButton= document.createElement("button");
increaseButton.className= "increaseButton";
increaseButton.innerHTML= "+";
increaseButton.addEventListener("click", () =>{
    counter ++;
    divCounter.innerHTML=counter;
})
document.body.appendChild(increaseButton);



