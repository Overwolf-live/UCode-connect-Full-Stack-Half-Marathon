let blockInput = false;
let calculate = (a, op, b) => {
    let firstNum = parseFloat(a);
    let secondNum = parseFloat(b);
    if (op === 'add') return firstNum + secondNum
    if (op === 'subtract') return firstNum - secondNum
    if (op === 'multiply') return firstNum * secondNum
    if (op === 'divide') return firstNum / secondNum
    if (op === 'percent') return firstNum * secondNum / 100;
    if (op === 'sign') return firstNum * secondNum;
    if (op === 'root') return Math.sqrt(firstNum);
    if (op === 'factorial') return factorial(firstNum);
    if (op === 'pow') return Math.pow(firstNum, secondNum);
    if (op === 'second') return firstNum * firstNum;
    if (op === 'round') return Math.round(firstNum);
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

const getKeyType = key => {
    const {
        action
    } = key.dataset;
    if (!action)
        return 'number';
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' ||
        action === 'percent' ||
        action === 'sign' ||
        action === 'root' ||
        action === 'factorial' ||
        action === 'pow' ||
        action === 'second' ||
        action === 'round')
        return 'operator';
    return action;
}


let createResult = (key, displayedNum, state) => {
    const keyContent = key.textContent;
    const keyType = getKeyType(key);
    const {
        firstValue,
        operator,
        modValue,
        previousKeyType
    } = state;

    if (keyType === 'number') {
        return displayedNum === '0' ||
            previousKeyType === 'operator' ||
            previousKeyType === 'calculate' ?
            keyContent :
            displayedNum + keyContent;
    }

    if (keyType === 'decimal') {
        if (!displayedNum.includes('.'))
            return displayedNum + '.';
        if (previousKeyType === 'operator' || previousKeyType === 'calculate')
            return '0.';
        return displayedNum;
    }

    if (keyType === 'operator') {
        if (key.dataset.action === "sign")
            return calculate(displayedNum, "sign", "-1");
        if (key.dataset.action === "root")
            return calculate(displayedNum, "root", "0");
        return firstValue &&
            operator &&
            previousKeyType !== 'operator' &&
            previousKeyType !== 'calculate' ?
            calculate(firstValue, operator, displayedNum) :
            displayedNum;
    }

    if (keyType === 'clear')
        return 0;

    if (keyType === 'calculate') {
        return firstValue ?
            previousKeyType === 'calculate' ?
            calculate(displayedNum, operator, modValue) :
            calculate(firstValue, operator, displayedNum) :
            displayedNum;
    }
}

keys.addEventListener("click", e => {
    if (!e.target.matches("button"))
        return;
    const key = e.target;
    const numOnDisplay = display.textContent;
    const resultStr = createResult(key, numOnDisplay, calculator.dataset);
    display.textContent = resultStr;
    updateCalculatorState(key, calculator, resultStr, numOnDisplay);
    updateVisualState(key, calculator);
});

const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
    const keyType = getKeyType(key)
    const {
        firstValue,
        operator,
        modValue,
        previousKeyType
    } = calculator.dataset;

    calculator.dataset.previousKeyType = keyType;

    if (keyType === 'operator') {
        calculator.dataset.operator = key.dataset.action;
        calculator.dataset.firstValue = firstValue &&
            operator &&
            previousKeyType !== 'operator' &&
            previousKeyType !== 'calculate' ?
            calculatedValue :
            displayedNum;
    }

    if (keyType === 'calculate') {
        calculator.dataset.modValue = firstValue && previousKeyType === 'calculate' ?
            modValue :
            displayedNum;
    }

    if (keyType === 'clear' && key.textContent === 'AC') {
        calculator.dataset.firstValue = '';
        calculator.dataset.modValue = '';
        calculator.dataset.operator = '';
        calculator.dataset.previousKeyType = '';
    }
}

const updateVisualState = (key, calculator) => {
    const keyType = getKeyType(key);
    Array.from(key.parentNode.children).forEach(k => k.classList.remove('pressed'));

    if (keyType === 'operator') key.classList.add('pressed');
    if (keyType === 'clear' && key.textContent !== 'AC') key.textContent = 'AC';
    if (keyType !== 'clear') {
        const clearButton = calculator.querySelector('[data-action=clear]');
        clearButton.textContent = 'CE';
    }
}

var property = new Array();
var unit = new Array();
var factor = new Array();

property[0] = "Area";
unit[0] = new Array("Square meter (m^2)", "Hectare", "Rood", "Square centimeter", "Square kilometer", "Circular mil", "Square foot (ft^2)", "Square inch (in^2)", "Square mile (mi^2)", "Square yard (yd^2)");
factor[0] = new Array(1, 10000, 1011.71413184285, .0001, 1000000, 5.067075E-10, 9.290304E-02, 6.4516E-04, 2589988, .8361274);

property[1] = "Length";
unit[1] = new Array("Meter (m)", "Centimeter (cm)", "Kilometer (km)", "Foot (ft)", "Inch (in)", "League (int'l)", "League (UK)", "Light year (LY)", "Micrometer (mu-m)", "Mil", "Millimeter (mm)", "Nanometer (nm)", "Mile (int'l nautical)", "Mile (UK nautical)", "Mile (US nautical)", "Mile (US statute)", "Parsec", "Pica (printer)", "Picometer (pm)", "Point (pt)", "Rod", "Yard (yd)");
factor[1] = new Array(1, .01, 1000, .3048, .0254, 5556, 5556, 9.46055E+15, .000001, .0000254, .001, 1E-9, 1852, 1853.184, 1852, 1609.344, 3.08374E+16, 4.217518E-03, 1E-12, .0003514598, 5.0292, .9144);

property[2] = "Mass";
unit[2] = new Array("Kilogram (kgr)", "Gram (gr)", "Milligram (mgr)", "Microgram (mu-gr)", "Carat (metric)(ct)", "Hundredweight (long)", "Hundredweight (short)", "Pound mass (lbm)", "Pound mass (troy)", "Ounce mass (ozm)", "Ounce mass (troy)", "Slug", "Ton (assay)", "Ton (long)", "Ton (short)", "Ton (metric)", "Tonne");
factor[2] = new Array(1, .001, 1e-6, .000000001, .0002, 50.80235, 45.35924, .4535924, .3732417, .02834952, .03110348, 14.5939, .02916667, 1016.047, 907.1847, 1000, 1000);

property[3] = "Temperature";
unit[3] = new Array("Degrees Celsius ('C)", "Degrees Fahrenheit ('F)", "Degrees Kelvin ('K)", "Degrees Rankine ('R)");
factor[3] = new Array(1, 0.555555555555, 1, 0.555555555555);
tempIncrement = new Array(0, -32, -273.15, -491.67);

property[3] = "Time";
unit[3] = new Array("Second (sec)", "Day (mean solar)", "Day (sidereal)", "Hour (mean solar)", "Hour (sidereal)", "Minute (mean solar)", "Minute (sidereal)", "Month (mean calendar)", "Second (sidereal)", "Year (calendar)", "Year (tropical)", "Year (sidereal)");
factor[3] = new Array(1, 8.640E4, 86164.09, 3600, 3590.17, 60, 60, 2628000, .9972696, 31536000, 31556930, 31558150);


function UpdateUnitMenu(propMenu, unitMenu) {
    var i;
    i = propMenu.selectedIndex;
    FillMenuWithArray(unitMenu, unit[i]);
}

function FillMenuWithArray(myMenu, myArray) {
    var i;
    myMenu.length = myArray.length;
    for (i = 0; i < myArray.length; i++) {
        myMenu.options[i].text = myArray[i];
    }
}

function CalculateUnit(sourceForm, targetForm) {
    var sourceValue = sourceForm.unit_input.value;

    sourceValue = parseFloat(sourceValue);
    if (!isNaN(sourceValue) || sourceValue == 0) {
        sourceForm.unit_input.value = sourceValue;
        ConvertFromTo(sourceForm, targetForm);
    }
}

function ConvertFromTo(sourceForm, targetForm) {
    var propIndex;
    var sourceIndex;
    var sourceFactor;
    var targetIndex;
    var targetFactor;
    var result;

    propIndex = document.property_form.the_menu.selectedIndex;

    sourceIndex = sourceForm.unit_menu.selectedIndex;
    sourceFactor = factor[propIndex][sourceIndex];

    targetIndex = targetForm.unit_menu.selectedIndex;
    targetFactor = factor[propIndex][targetIndex];

    result = sourceForm.unit_input.value;
    if (property[propIndex] == "Temperature") {
        result = parseFloat(result) + tempIncrement[sourceIndex];
    }
    result = result * sourceFactor;
    result = result / targetFactor;
    if (property[propIndex] == "Temperature") {
        result = parseFloat(result) - tempIncrement[targetIndex];
    }
    targetForm.unit_input.value = result;
}
window.onload = function(e) {
    FillMenuWithArray(document.property_form.the_menu, property);
    UpdateUnitMenu(document.property_form.the_menu, document.form_A.unit_menu);
    UpdateUnitMenu(document.property_form.the_menu, document.form_B.unit_menu)
}


var calculator__display = $('.calculator__display');
calculator__display.text(calculator__display.text().substring(0, 26));
