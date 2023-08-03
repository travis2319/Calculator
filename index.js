function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;
    try {
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
let string = "";
let buttons = document.querySelectorAll(".button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        if(e.target.innerHTML ==  '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML ==  'c'){
            string = "";
            document.querySelector('input').value = string;
        }else{
        console.log(e.target)
        string+= e.target.innerHTML;
        document.querySelector('input').value = string;}
    })

}