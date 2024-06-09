let isCalculated = false;

function clearDisplay() {
    document.calcForm.display.value = '';
    isCalculated = false;
}

function deleteLast() {
    if (!isCalculated) {
        document.calcForm.display.value = document.calcForm.display.value.slice(0, -1);
    }
}

function appendCharacter(character) {
    if (isCalculated) {
        document.calcForm.display.value = '';
        isCalculated = false;
    }
    document.calcForm.display.value += character;
}

function calculate() {
    try {
        document.calcForm.display.value = eval(document.calcForm.display.value);
        isCalculated = true;
    } catch (e) {
        document.calcForm.display.value = 'Error';
        isCalculated = true;
    }
}
