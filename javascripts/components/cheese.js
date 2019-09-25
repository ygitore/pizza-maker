
import utilities from '../helpers/utlities.js';
const cheeses = [
    {id:'cheese1',name:'swiss',price:50},
    {id:'cheese2',name:'yello',price:90},
    {id:'cheese3',name:'white',price:10},
    {id:'cheese4',name:'green',price:100},
    {id:'cheese5',name:'green',price:30},
];
const getSelectedCheeses = ()=>{
    //get all cheese checkboxes
    //keep the checked ones in a new array
    //return new array
    const selectedcheeses = [];
    const cheesecheckboxs = document.getElementsByClassName('cheese');
    for (let i = 0; i < cheesecheckboxs.length; i++) {
        for (let k = 0; k < cheeses.length; k++) {
           if(cheesecheckboxs[i].checked && cheesecheckboxs[k].id === cheeses[k].id){
                selectedcheeses.push(cheeses[k]);
           }
        }        
    }
    return selectedcheeses;
}
const printCheeseOptions = ()=>{
    let domString = '';
    for (let i = 0; i < cheeses.length; i++) {
        domString += `<div class="form-group form-check">
                <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}">
                <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
            </div>`;
    }
    utilities.printToDom('cheese-counter', domString);
};
export default {printCheeseOptions,getSelectedCheeses};