"strict use";
//1
/*Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
Сделайте два варианта решения.Через setTimeout и через setInterval*/

function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(function() {
            console.log(current);
            if (current == to) {
                clearInterval(timerId);
            };
            current++;
        },
        1000);
}

printNumbers(1, 11);

function printNumbers(from, to) {
    let current = from;

    setTimeout(function step() {
        console.log(current);
        if (current < to) {
            setTimeout(step, 1000);
        }
        current++;
    }, 1000);
}

printNumbers(2, 8);







//2
/*Напишите функцию, которая будет каждые 3 секунды выводить в консоль сообщение, а на 10 прекратит свою работу*/
let timerId = setInterval(() => console.log("This message is displayed every 3 seconds"), 3000);

setTimeout(() => {
    clearInterval(timerId);
    console.log("This function will stop executing in 10 seconds");
}, 10000);







//3
/*Подумать самостоятельно в каком порядке будут выведены числа в консоль
После чего себя проверить latentflip.com*/


function firstCall() {
    console.log(1);
    secondCall();
    setTimeout(function() {
        console.log(3)
    }, 3000);
    console.log(4);
}

function secondCall() {
    setTimeout(function() {
        console.log(5)
    }, 0);
    console.log(6);
}

firstCall();

//ПРОверка показала
//1,5,6,3,4







//4
/*Создать в одном из объектов метод, который будет выводить в консоль его имя, используя this
А также добавить метод, позволяющий изменять контекст вызова.При вызове в одном объекте, чтобы я мог получить имя другого*/
function showMessage() { console.log("Hello from:", this); }

let jordan = {
    name: "Michael",
    age: 59,
    sayHelloFrom: showMessage.bind(window),
    showInfo: function() {
        console.log(`Name: ${this.name}`);
    },

}

let messi = {
    name: "Lionel",
    age: 34,
}

jordan.showInfo();
jordan.showInfo.bind(messi, `Name: ${this.name}`)();


//