document.querySelector(".send-btn").onclick = myClick;
const account = document.querySelector(".account4");

function myClick(){
    let a = document.querySelector('.write-stroke').value;
    console.log(a);
    document.querySelector('.message2').innerHTML = a;
    account.classList.add("text")
}