  function gotp (){

let gotp = Math.floor(1000 + Math.random()*9000);
console.log(gotp);

window.localStorage.setItem("otp",gotp);


  }

  function validateOtp(){
let validOtp = document.querySelector("#validOtp").value;

let otp = window.localStorage.getItem("otp");

if(validOtp == otp){
    alert("success");
}
else{
    alert("fail");
}

  }