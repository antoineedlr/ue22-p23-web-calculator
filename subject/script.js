// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

window.addEventListener("load", () => {
    let buttons = document.querySelectorAll("button")
    for (let button of buttons){
        button.addEventListener("click", (evenement) => {
            const button = evenement.target
            console.log(button.textContent)
            calculator_display.textContent(button.textContent)
        }
    )}

})

document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.calculator__display');
    const keys = document.querySelector('.calculator__keys');
 
 
    keys.addEventListener('click', function(event) {
        if (event.target.matches('button')) {
            const key = event.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;
 
 
 
 
            if (!action) {
                // Dans le cas où la valeur cliquée est un nombre ou un point, on l'ajoute 
                display.textContent = displayedNum === '0' ? keyContent : displayedNum + keyContent;
            }
            
            if (action === 'clear') {
                // On réinitialise à 0
                display.textContent = '0';
            }
 
 
            if (action === 'calculate') {
                // signe "égale" => il faut différencier en fonction de l'opération précédente
                const expression = display.textContent;
                
                // Addition :
                if (display.dataset.operator === 'add') { 
                    const result = Number(displayedNum) + Number(display.dataset.firstValue)
                    display.textContent = result;
                }
 
 
                if (display.dataset.operator === 'subtract') { 
                    const result = Number(display.dataset.firstValue) - Number(displayedNum) 
                    display.textContent = result;
                }
 
 
                if (display.dataset.operator === 'multiply') { 
                    const result = Number(display.dataset.firstValue) * Number(displayedNum) 
                    display.textContent = result;
                }
 
 
                if (display.dataset.operator === 'divide') { 
                    const result = Number(display.dataset.firstValue) / Number(displayedNum) 
                    display.textContent = result;
                }
            }
 
 
            if (action === 'add') {
                // On définit ici l'opérateur qui sera utilisé dans "calculate" 
                display.dataset.operator = 'add';
                display.dataset.firstValue = displayedNum;
                // Et pour ne pas risquer d'enregistrer la mauvaise valeur, on associe une valeur vide. 
                display.textContent = " "
            }
 
 
            // Autres opérations :
            if (action === 'subtract') {
                display.dataset.operator = 'subtract';
                display.dataset.firstValue = displayedNum;
                display.textContent = " "
            }
 
 
            if (action === 'multiply') {
                display.dataset.operator = 'multiply';
                display.dataset.firstValue = displayedNum;
                display.textContent = " "
            }
 
 
            if (action === 'divide') {
                display.dataset.operator = 'divide';
                display.dataset.firstValue = displayedNum;
                display.textContent = " "
            }
        }
    });
 });
 
