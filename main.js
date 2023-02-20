console.log(window.location.href); 
let url = window.location.href  
let urlBody = document.querySelector('.url')
let codeBody = document.querySelector('.code')

urlBody.textContent = urlBody.textContent + url

let rawCode = url
//let rawCode = "https://dmytro-haharin.github.io/avito-test_api/?code=M5l2zmu4Rjq_ycYmlKUpfg&state="

let startCode = rawCode.toString().indexOf("=")+1
let endCode = rawCode.toString().indexOf("&")

let code = rawCode.slice(startCode , endCode)

codeBody.textContent += code

console.log(code);



let client_secret = "3KngdlV2us5lcF3tpDUGmw-8b6GS42sabVOuL_Gr"
let client_id = "OyfvHSoj3GEZqYHV13yv"

// WARNING: For POST requests, body is set to null by browsers.
var data = `grant_type=authorization_code&client_id=${client_id}&client_secret=${client_secret}&code=${code}`;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.avito.ru/token/");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// WARNING: Cookies will be stripped away by the browser before sending the request.
xhr.setRequestHeader("Cookie", "u=2xrdytxb.1fkfp9o.l5hofpl0k700");

xhr.send(data);