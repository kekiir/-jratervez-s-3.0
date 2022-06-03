let feltetInput = document.querySelector("input[name='top-input']");
let showFeltet = document.querySelector("span.top-input");
showFeltet.innerHTML = feltetInput.value;

function massModify(selector, attribute, value) {
    let nodeList=document.querySelectorAll(selector);
    for (let i = 0; i< nodeList.length; i++) {
      nodeList[i][attribute]=value;
       
    }
}