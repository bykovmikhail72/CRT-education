// 1. Примеры замыкания.

const func = () => {        
    const name = "Ivan";
    return function sayName () {
        console.log(name);
    }
}

const ivan = func();

ivan();  // Ivan

// Создаем функцию, в которой создаем переменную name, возвращаем новую функцию, которая выводит 
// в консоль name. Так как возвращаемая анонимная функция создана в лексическом окружении func, она
// имеет доступ к переменной name. Функция func возвращает другую функцию, по этому присваиваем
// результат работы переменной ivan. Затем вызываем ivan. Несмотря на то, что функция func
// отработала, анонимная функция стала замыканием и имеет доступ к переменной name.


const someFunc = () => {
    const person = {
        name: 'Viktor',
        age: '25',
    }

    return function writePersonData() {
        console.log(`Person name is ${person.name}, his age is ${person.age} y.o.`);
    }
}

const person = someFunc();

person();  // Person name is Viktor, his age is 25


const simpleFunc = (name) => {
    const someAge = (age) => {
        const result = () => {
            console.log(`His name is ${name} and his age is ${age}`);
        }
        result();
    };
    someAge(25);
}

simpleFunc("Ivan");  // His name is Ivan and his age is 25


// Примеры использования map, reduce, filter

const data = [
    {
        name: 'Аанг',
        element: 'All',
        gender: 'male',
        age: 112, 
    },
    {
        name: 'Tof',
        element: 'Earth',
        gender: 'female',
        age: 12,
    },
    {
        name: 'Katara',
        element: 'Water',
        gender: 'female',
        age: 14,
    },
    {
        name: 'Zuko',
        element: 'Fire',
        gender: 'male',
        age: 16,
    },
    {
        name: 'Aero',
        element: 'Fire',
        gender: 'male',
        age: 56,
    },
    {
        name: 'Azula',
        element: 'Fire',
        gender: 'female',
        age: 14,
    },
];

const showHeroesInfo = (data, filter) => {
    const modify = modifyHeroes();
    const filtered = filterHeroes(filter);
    const middleAge = showMiddleAge();

    function modifyHeroes() {
        const newArr = data.map((item, i) => {
            return {...item, id: i}
        })
        return newArr;
    }

    function filterHeroes(filter) {
        const newArr = data.filter(item => item.element === filter);
        return newArr;
    }

    // function showMiddleAge() {
    //     const newArr = data.map(item => {
    //         const newItem = item.age;
    //         return newItem;
    //     })
    //     const sumAge = newArr.reduce((acc, val) => {
    //         return acc + val;
    //     })
    //     return Math.floor(sumAge/data.length);
    // }

    function showMiddleAge() {  // Увидел ошибку, сделал сразу через дот нотацию
        const middleAge = data.reduce((acc, val) => {
            return acc + +val.age;
        }, 0);
        return Math.round((middleAge)/data.length);
    }
    
    console.log(modify);
    console.log(filtered);  // [ { name: 'Katara', element: 'Water', gender: 'female', age: 14 } ]
    console.log(middleAge);  // 37
}

showHeroesInfo(data, 'Water');


// Вывести все ключи Объекта в виде массива

const obj = {
    name: 'Bob',
    age: '44',
    gender: 'male',
    hasCar: true
}

const arrOfKeys = () => {
    const newArr = [];
    for (let key in obj) {
        newArr.push(key);
    }
    console.log(newArr);
}

const keysOfObj = Object.keys(obj);  // Быстрее и проще) Спасибо

console.log(keysOfObj);

arrOfKeys();

// Сделать функцию и использовать параметры по умолчанию 

const defaultParFunc = (data = 'Ничего не нашлось') => {
    console.log(data);
}

defaultParFunc();

// Создать класс Human, расширить его фукницональность у его дочерних классов


class Human {
    constructor({name, surname, age, gender}) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
    }
    showPersonInformation() {
        console.log(`Hi! My name is ${this.name}, my surname - ${this.surname}. I am ${this.age} y.o. and I am a ${this.gender === 'male' ? 'man' : 'woman'}`);
    }

    showName() {
        console.log(this.name);
    }
}

const james = new Human({
    name: 'James',
    surname: 'Hatfild',
    age: 59,
    gender: 'male',
})

james.showPersonInformation();  // Hi! My name is James, my surname - Hatfild. I am 59 y.o. and I am a man

const anna = new Human({
    name: 'Anna',
    surname: 'Smith',
    age: 27,
    gender: 'female',
})

anna.showPersonInformation();  // Hi! My name is Anna, my surname - Smith. I am 27 y.o. and I am a woman

class HumanProfession extends Human {
    constructor(props, profession) {
        super(props);
        this.profession = profession;
    }

    showProfession() {
        console.log(`My profession is ${this.profession}.`);
    }
}

const jamesExt = new HumanProfession(james, 'musician');

jamesExt.showProfession();  // My profession is musician   Наследование работает
jamesExt.showPersonInformation();  // Hi! My name is James, my surname - Hatfild. I am 59 y.o. and I am a man.

const annaExt = new HumanProfession(anna, 'web-developer');

annaExt.showPersonInformation();  // Hi! My name is Anna, my surname - Smith. I am 27 y.o. and I am a woman
annaExt.showProfession();  // My profession is web-developer.


// Создать  экземпляры каждого класса и превратить в JSON

const jamesJSON = JSON.stringify(jamesExt);
const annaJSON = JSON.stringify(annaExt);

console.log(jamesJSON, annaExt);