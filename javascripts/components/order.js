import utlities from '../helpers/utlities.js';
import cheese from './cheese.js';

const createOrderEvent = ()=>{
    const createFinalorder = (items)=>{
        let domString2 = '';
        for (let i = 0; i < items.length; i++) {
          domString2 += `<h2>${items[i].name}</h2>`
        }
        utlities.printToDom('final-order', domString2);
    };
    const selectedCheeses = cheese.getSelectedCheeses();
    createFinalorder(selectedCheeses);
}

const printOrderButton = ()=>{
    const domString = '<button id = "order-button" class="btn-secondary">Make pizza</button>';
    utlities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};
export default {printOrderButton};