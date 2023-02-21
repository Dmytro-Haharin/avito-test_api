
let url = window.location.href  
let codeBody = document.querySelector('.code')

let rawCode = url
//let rawCode = "https://dmytro-haharin.github.io/avito-test_api/?code=M5l2zmu4Rjq_ycYmlKUpfg&state="

let startCode = rawCode.toString().indexOf("=")+1
let endCode = rawCode.toString().indexOf("&")

let code = rawCode.slice(startCode , endCode)

if(code != "https://" + window.location.hostname){
    codeBody.textContent += code
}else{
    codeBody.textContent = "код необнаружен "
}




