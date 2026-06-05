//Take Buttons Vlue
function takeValue(value){
    document.getElementById('display').value += value;  
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function deleteValue(){
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function calculateResult(){
    let expression = document.getElementById('display').value;
    try {
        
        expression = expression.replace(/Math\.sin\(([^)]+)\)/g, 'Math.sin(($1) * Math.PI / 180)');
        expression = expression.replace(/Math\.cos\(([^)]+)\)/g, 'Math.cos(($1) * Math.PI / 180)');
        expression = expression.replace(/Math\.tan\(([^)]+)\)/g, 'Math.tan(($1) * Math.PI / 180)');
        
        let result = eval(expression);
        document.getElementById('display').value = Number(result.toFixed(10)); 
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function shoeSci() {
    let sciCals = document.querySelectorAll('.sci_cal');

    sciCals.forEach(panel => {
        let currentVisibility = window.getComputedStyle(panel).visibility;
        
        if (currentVisibility === 'hidden') {
            panel.style.visibility = 'visible';
            panel.style.width = "auto"
        } else {
            panel.style.visibility = 'hidden';
            panel.style.width = 0;
        }
    });
}