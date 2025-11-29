console.log('Lec_4');
console.log('Task_1');
let k = 8;
let a = 9;
for(i=0; i<5; i++) {
    console.log("*".repeat(a));
    a = a + k;
    k = k - 2;
} 
k = 2
for(i=5; i>0; i--) {
    console.log("*".repeat(a));
    a = a - k;
    k = k + 2;
} 
console.log('Task_2');
const startTime = Date.now();
const time = 10000;
const endTime = startTime + time;
let lastSecond = 11;
while (Date.now() < endTime) {
    const second = Math.ceil((endTime - Date.now())/1000);
    if (second < lastSecond) 
    {
        console.log(second + 'sec');
        lastSecond = second;
    }
}
console.log('Lec_7');
console.log('Task_1');
let car = {speedometer: 0};
console.log(car);
console.log('Task_2');
const speedometerMethod = {
    setSpeedometer (newValue) {
        this.speedometer = newValue;
    },
    getSpeedometer () {
        return this.speedometer;
    },
    clearSpeedometer () {
        this.speedometer = 0;
    }
}
Object.assign(car, speedometerMethod);
car.setSpeedometer(350);
let speed = car.getSpeedometer();
console.log("new speed: ", speed);
car.clearSpeedometer();
console.log("end speed: ", car.getSpeedometer());
console.log('Task_3');
let speedometerMethod1 = {
    setSpeedometer (newValue) {
        this.speedometer = newValue;
        return this;
    },
    getSpeedometer () {
        return this.speedometer;
    },
    clearSpeedometer () {
        this.speedometer = 0;
        return this;
    }
}
Object.assign(car, speedometerMethod1);
car.setSpeedometer(350);
let finalSpeed = car.setSpeedometer(350).clearSpeedometer().getSpeedometer();
console.log("final speed: ", finalSpeed);
console.log('Task_4');
class Car {
    constructor (producer, year){
        this.speedometer = 0;
        this.producer = producer;
        this.year = year;
        console.log("New car:", producer, year); 
    }

    setSpeedometer (newSpeed) {
        this.speedometer = newSpeed;
        return this;
    }

    getSpeedometer() {
        return this.speedometer;
    }

    getInformation() {
        return "Виробник: " + this.producer + " Рік: " + this.year + " Швидкість: " + this.speedometer;
    };
    
}

class Electro extends Car {
    constructor(producer,year, battery) {
        super(producer,year);
        this.battery = battery;
    }
    charge(number){
        this.battery = Math.min(100, this.battery + number);
        return this;
    }
    getInformation (){
        return super.getInformation() + this.battery;
    }
}

class Mech extends Car {
    constructor (producer, year, patrol) {
        super(producer,year);
        this.patrol = patrol;
    }
    setSpeedometer(newSpeed) {
        const limitedSpeed = Math.min(newSpeed, 190);
        return super.setSpeedometer(limitedSpeed);
    }
    getInformation () {
        return super.getInformation() + this.patrol;
    }

}
const ElectroCar = new Electro ("Audi", 2020, 60);
const Mechanic = new Mech("BMW",2018, " Diesel");

ElectroCar.setSpeedometer(100).charge(20);
console.log(ElectroCar.getInformation());
Mechanic.setSpeedometer(60);
console.log(Mechanic.getInformation());
console.log('Task_5');
console.log(({}).toString());
console.log("об'єкт не має власного перевизначеного методу toString(), і він звертається до базового методу, який лише повідомляє, що об'єкт є загальною сутністю типу Object.");
console.log(" Масив перевизначає успадкований метод Object.prototype.toString()");
const checkObject = Object.prototype.toString;
const array1 = [1, 2, 3];
const arrayResult = checkObject.call(array1);
console.log(arrayResult);
console.log("Щоб отримати внутрішній тег [object Array] для масиву, необхідно викликати базовий метод Object у контексті масиву, використовуючи Object.prototype.toString.call([]).")
