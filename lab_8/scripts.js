console.log("lec_1");
console.log("Ex.1");
let its_string = "It is text!";
console.log('its_string and type: ', its_string, typeof its_string);
let its_number= 42;
console.log('its_number and type: ', its_number, typeof its_number);
let its_boolean=true;
console.log('its_boolean and type: ',its_boolean, typeof its_boolean);
let its_object={name: "Ira"};
console.log('its_object and type: ', its_object, typeof its_object);
let its_array=[1,2,3];
console.log('its_array and type: ', its_array, typeof its_array);
let its_null=null;
console.log('its_null and type: ',its_null, typeof its_null);
let its_undefined;
console.log('its_undefined and type: ',its_undefined, typeof its_undefined);
let its_function=function () 
{
    return "It`s Function"
};
console.log('its_function and type: ',its_function, typeof its_function);

console.log("Ex.2");
let its_string1 = "2";
console.log('its_string1 type: ', typeof its_string1);
let its_number1= 42;
console.log('its_number1 type: ', typeof its_number1);
its_string1= Number(its_string1);
console.log('its_string1 new type: ', typeof its_string1);
its_number1= String(its_number1);
console.log('its_number1 new type: ', typeof its_number1);

console.log("Ex.3");
let string2= "101";
let number2= 101;
sameOrNotSame=string2==number2;
console.log("==: ", sameOrNotSame);
sameOrNotSame=string2===number2;
console.log("===: ", sameOrNotSame);

console.log("Ex.4");
let firstNumber= 333;
let secondNumber= 666;
let secretNumber= firstNumber+secondNumber;
console.log("Secret number: ", secretNumber);
let knownNumber1= secretNumber-secondNumber;
console.log("Known number 1: ", knownNumber1);
let knownNumber2= secretNumber-firstNumber;
console.log("Known number 2: ", knownNumber2);
console.log("Або");
console.log("Шифрування");
newSecretNumber=123..toString(2);
console.log("Secret Number =", newSecretNumber);
console.log("Дешифрування");
newKnownNumber=parseInt("123",10);
console.log("Known Number =", newKnownNumber);

console.log("lec_2");
console.log("Ex.1");
var foo = 1; 
function bar() { 
    if (!foo) { 
        var foo = 10; 
    } 
    alert(foo); 
} 
bar();
//результат виконання: Сповіщення з числом 10
/*var foo має функціональну область видимості 
Усередині функції var foo піднімається на початок і його значення = undefined
В умові перевірки виявляється, що: !undefined=true, а отже foo присвоюється 10
Виконується вивід у вікні сповіщення*/
console.log("Результат виконання: Сповіщення з числом 10. var foo має функціональну область видимості. Усередині функції var foo піднімається на початок і його значення = undefined. В умові перевірки виявляється, що: !undefined=true, а отже foo присвоюється 10. Виконується вивід у вікні сповіщення");

console.log("Ex.2");
var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a);
/* На початку змінна а є глобальною, їй присвоєно значення 1. Локальна функція а закрила доступ до глобальної змінної а. всередині функції локально було присвоєнно значення 10. У результаті глобальна змінна а не змінює своє значення і дорівнює 1. */
console.log("На початку змінна а є глобальною, їй присвоєно значення 1. Локальна функція а закрила доступ до глобальної змінної а. всередині функції локально було присвоєнно значення 10(Для функції а). У результаті глобальна змінна а змінює своє значення і дорівнює 10.");
console.log("Також теоретично було можливо, що а = 1: ");
console.log("На початку змінна а є глобальною, їй присвоєно значення 1. Локальна функція а закрила доступ до глобальної змінної а. всередині функції локально було присвоєнно значення 10(Для функції а). У результаті глобальна змінна а не змінює своє значення і дорівнює 1.");
console.log("Рішення, щоб а=10:");
var a = 1; 
function b() { 
    a = 10; 
    return; 
} 
b(); 
console.log(a);
console.log("Зараз ми звертаємося до глобальної а.")

console.log("lec_3");
console.log("Ex.1");
let firstValue = 10;
let secondValue = 15;
console.log("Унарні оператори");
console.log("firstValue = 10");
console.log("secondValue = 15");
firstValue++;
secondValue--;
console.log("firstValue++ = ", firstValue);
console.log("secondValue-- = ", secondValue);
let doubleValue = +"666";
console.log("Строге переведення тексту у число з +:",  doubleValue);
doubleValue = -"666";
console.log("Строге переведення тексту у число з -:",  doubleValue);
let itsFalse = true;
itsFalse =!itsFalse;
console.log("Логічне заперечення:",  itsFalse);
console.log("Бінарні оператори");
console.log("Сума firstValue and secondValue: ", firstValue + secondValue);
console.log("Різниця firstValue and secondValue: ", firstValue - secondValue);
console.log("Добуток firstValue and secondValue: ", firstValue * secondValue);
console.log("Ділення firstValue and secondValue: ", firstValue / secondValue);
console.log("Залишок від ділення secondValue and firstValue: ", secondValue % firstValue);
console.log("Складне присвоєння firstValue+=5: ", firstValue+=5);
console.log("Додавання рядків: ", "Ira"+ " " + "Developer");
console.log("Тернарні оператори");
let age = 15;
let allowFragolino = (age>18)? "Можеш пити Фраголіно" : "Пий молоко, дітваку!";
console.log("Якщо тобі ", age, allowFragolino);
age = 25;
allowFragolino = (age>18)? "Можеш пити Фраголіно" : "Пий молоко, дітваку!";
console.log("Якщо тобі ", age, allowFragolino);

console.log("Ex.2");
let firstLine = "Нехай завжди буде сонце,";
let secondLine = "Нехай завжди буде небо,";
let thirdLine = "Нехай завжди буде мама,";
let fourthLine = "Нехай завжди буду я.";
let mamaAndI = firstLine.concat("\n", secondLine, "\n", thirdLine, "\n",fourthLine);
console.log(mamaAndI);

console.log("lec_Arrays");
console.log("Ex.1");
var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function maxOfSubArray () 
{
    if (!array || array.length === 0)
    {
        return[];
    }
    let maxSum = array[0];
    let start = 0;
    let end = 0;
    for (let i = 0; i< array.length; i++) 
    {
        let sumOfStart = 0;
        for (let j = i; j< array.length; j++)
        {
            sumOfStart = sumOfStart + array[j];
            
            if (sumOfStart > maxSum) 
            {
                maxSum = sumOfStart;
                start = i;
                end = j;
            }
        }
    }
    let subArray = array.slice(start, end+1);
    return (subArray);
}
let result = maxOfSubArray(array);
console.log("Максимальний підмасив масиву: ", result);

console.log("Ex.2");
num1 = "647289294950604"
num2 = "86464670402705"
let result1 = [];
function addTwoLongNumbers(firstNum, secondNum)
{
 let i = num1.length-1;
 let j = num2.length-1;
 let carry = 0;

 while (i>=0 || j>=0 || carry>0)
 {
    let Chyslo1 = (i>=0)? parseInt (num1[i]) : 0;
    let Chyslo2 = (j>=0)? parseInt (num2[j]) : 0;
    let sum=Chyslo1+Chyslo2+carry;
    let newChyslo = sum % 10;
    carry = Math.floor(sum/10);
    result=result1.unshift(newChyslo);
    j--;
    i--;
 }
 return result1.join("");
}
result1 = addTwoLongNumbers(num1,num2);
console.log("num1+num2= ", result1);
console.log("Ex.3");
function arrayDifference (array1,array2)
{
    let counter = new Map();
    for (let item of array2)
    {
        counter.set(item,(counter.get(item) || 0) + 1);
    }
    let result2=[]
    for (let item of array1)
    {
        let count = counter.get(item);
        if (count > 0) 
        {
            counter.set(item, count - 1);
        }
        else 
        {
            result2.push(item);
        }
    }
    return result2;
}

let array1 = [1,2,3,4,4,4,5,8,7,7];
let array2 = [1,3,4,4,5,8,7];
let result2= arrayDifference(array1, array2);
console.log("Різниця масиву: ", result2);