const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const number_count = document.getElementById("number_count");
const background = document.getElementById("background");
const body = document.getElementById("body");

let count=0;

// function to update the count

function update_count(){
    number_count.innerText=count;

  if (count <= 0) {
    decrement.disabled = true;
  } else {
    decrement.disabled = false;
  }
}

// Adding eventlistener

increment.addEventListener("click", ()=>{
    count++;
    update_count();
});
decrement.addEventListener("click", ()=>{
    if(count>0){
        count--;
        update_count();
    }
   
});

reset.addEventListener("click",()=>{
    count=0;
    update_count();
});

background.addEventListener("click", ()=>{

  body.classList.toggle("dark");

  // if(body.style.backgroundColor=="white"){
  //   body.style.backgroundColor="black";
  //   body.style.color="white";
  // }

  // else{
  //   body.style.backgroundColor="white";
  //   body.style.color="black";
  // }
});

// keyword access
document.addEventListener("keydown",(e)=>{
  if(e.key==="+"){
        count++;
    update_count();

  }
  else if(e.key==="-"){
    if(count>0){
        count--;
        update_count();
    }
  }

    else if(e.key.toLowerCase()==="r"){
      count=0;
      update_count();

    }
});


// inital display
update_count();





