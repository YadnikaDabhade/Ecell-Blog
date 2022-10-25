// modal js
//grt modal element
var modal = document.getElementById("simplemodal");
//get open modal button
// var modelBtn = document.getElementsByClassName("Open")[0];
//get close button
var closeBtn = document.getElementsByClassName("closebtn")[0];


//listen for a openclick 
// modelBtn.addEventListener('click',openModal);
//listem for close click
closeBtn.addEventListener('click',closeModal);
//listen for outside click
window.addEventListener('click',clickOut);

//funtion to open modal
function openModal(){
    modal.style.display = 'block';
}

//funtion to close modal
function closeModal(){
    modal.style.display = 'none';
}

//function to close the modal by clicking outside the modal

function clickOut(e){
    if(e.target == modal)
        modal.style.display = 'none';
}


// Event feature and submit button script
const submitBtn = document.getElementById("submit-btn");
const eventNameEl = document.getElementById("EventNameInput");
const eventTimeEl = document.getElementById("Time-Input");
let arr=[];

// Event Listner of Submit Button
submitBtn.addEventListener("click",function(){
    let data =new Data(eventNameEl.value,eventTimeEl.value);
    arr.push(data);
    closeModal();
});
