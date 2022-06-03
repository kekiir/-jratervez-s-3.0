//A kód Költészet. Célod az legyen, hogy kódodat úgy lehessen olvasni, mint a mondatokat. 
//A változók és fügvények magukért beszélnek!
function calcAmount() {
    let amountInput = document.querySelector("input[name='amount-input']");
    let price = 1200;
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);
}

function showSumPrice(price = 1200, amountNumber = 1) {
    // amountNumber=amountNumber || 0;


    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!")
        return;
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolni!");
    } else {
        let amount = amountNumber * price
        showAmount.innerHTML = amount;
    }

}

function hider() {
    document.body.innerHTML = "";



}

// nevek
let n;
let nrOfProducts;
let numberOfProducts; // tudja mit tárol
// ne legeyn egy név félre vezető adder adjon össze a multiplayer legyen szorzó
function adder(x, y) {
    return x * y;
}

//kerülni az I és O karaktereket, mert lehet 0 és 1 isFinite,  10 IO

// Komment: egy soros

// Unnecessary: This function gives roles of user
function getUserRoles(user) {
    return user.roles;
}

// matches any alphabetical chars between m and n
var idPetern = /m[a-z]n/;


//Add helptext.
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltétetek!";
let parent = document.querySelector("div.mb-3:nth-child(2)");
parent.appendChild(helpText);

parent.removeChild(helpText);

//A kód Költészet. Célod az legyen, hogy kódodat úgy lehessen olvasni, mint a mondatokat.

// Windoww events
/*
let sendButton = document.querySelector('button[class="btn btn-primary"]');
sendButton.onclick = function () {
    alert("Hello JS!)");
}
*/

/*sendButton.addEventListener("click", function () {
    alert("Hello JS!)");
})
*/

/*
window.addEventListener("resize", function(){
    console.log(this.innerHeight, this.innerWidth);
})
*/

//Ürlap események.
let valuesGlobal={};
let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    
    let inputs=this.querySelectorAll("input");
    let values= {};
    for (let i = 0; i < inputs.length; i++) {
        valuesGlobal[inputs[i].name]=inputs[i].value;
    
    }
console.log(valuesGlobal);
})

// Switch
new Date(2019, 5, 2); //0= január 1=február
new Date().getDay(); // vasárnaptól kezdődik, vasárnap=0

let weekDay = new Date().getDay();
let dayName = '';
switch (weekDay) {
    case 0: dayName = "Vas";
        break
    case 1: dayName = "Hét";
        break
    case 2: dayName = "Ked";
        break
    case 3: dayName = "Sze";
        break
    case 4: dayName = "Csü";
        break
    case 5: dayName = "Pén";
        break
    case 6: dayName = "Szo";
        break
    default: dayName = "unknown"
};
console.log(dayName);

//While
let i = 0;
while (i < 10) {
    i++
}
console.log(i);

i = 0;
let animal = { name: "Cat", age: 3 };
let keys = Object.keys(animal);
while (i < keys.length) {
    console.log(animal[keys[i]]);
    i++;
};


/*
dowhile
i=10
do {
    console.log(i);
    i++;
}
while (i<0); 
*/

let alertCloseButtons = document.querySelectorAll("#btn-close");
let alertCloseEventHundlerFunction= function(ev) {
    this.parentElement.style.display="none";
}
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHundlerFunction);
}

