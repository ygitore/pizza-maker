const printToDom = (divId, printSomthing)=>{
    document.getElementById(divId).innerHTML = printSomthing;
}
export default {printToDom};