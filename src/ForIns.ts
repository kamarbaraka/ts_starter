class ForIns extends Array<String | number>{
}

let items: Array<String |number> = new ForIns();
items.push("spoons", 254, "gallery");

for (let item in items)
    console.log(items[item])

for (let i:number = 0; i < items.length; i++)
    console.log(items[i]);

var greeting = (message: string) => console.log(message);
greeting('hello kamar');

function test(no1:number, no2:number, func:(num1:number, num2:number)=>number):number{
    let res:number = func(no1, no2);
    return res;
}

function tree(number1:number, number2:number): number{
    var res = number1 * number2;
    return res;
}

let res:number = test(2, 3, tree);
console.log(res);