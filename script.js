
console.log("we are here")
const mtnCode = [
    {code:300,word:'Call Center'},
    {code:303,word:'Borrow airtime/data'},
    {code:305,word:'stop VAS'},
    {code:310,word:'Account Balance'},
    {code:300,word:'Call Center'},
    {code:303,word:'Borrow airtime/data'},
    {code:305,word:'stop VAS'},
    {code:310,word:'Account Balance'},
    
]

const flexContainer = document.getElementById('flex-container')

buildArray()



function buildArray(){
    let number = 0;
    let innerText = '';
    for(let i= 0; i< mtnCode.length; i+=2){

       innerText += ` <div class="row">
          <div class="col">
            <p class="left">${mtnCode[number].code}</p>
            <p class="right">${mtnCode[number].word}</p>
          </div>
          <div class="col">
            <p class="left">${mtnCode[number + 1].code}</p>
            <p class="right">${mtnCode[number + 1].word}</p>
          </div>
        </div>
        `
        number += 2
    }

    flexContainer.innerHTML = innerText;
   
}
