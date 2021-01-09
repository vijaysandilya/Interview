var input = document.querySelector("#inputAge");
var btn = document.querySelector("#button");
var outputText = document.querySelector("#output");



function functionhandling()
{
    var inpt = input.value;
    var years = 2020-inpt;
    outputText.innerHTML = "You are "+ years + " years old";
}

btn.addEventListener("click",functionhandling)
