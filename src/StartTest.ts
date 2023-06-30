class Person{

    private _name:string;
    private _age:number;

    constructor(name:string, age:number) {
        this._name = name;
        this._age = age;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}

let kamar = new Person('kamar', 23);
console.log(kamar.name, kamar.age);

let myName: string = "kamar";
console.log(myName);

myName = "25";

let myArray: Array<string> = ['kamar', 'baraka', 'kombe'];
myArray.push('karisa', 'katore');
myArray.forEach(v => console.log(v));
console.log(typeof myArray);

let credentials: Array<string | number> = ["kamar", 23, 25000]

console.log(typeof credentials);