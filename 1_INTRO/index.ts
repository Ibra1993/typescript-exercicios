
let x: number[] = [10, 56,99,90];
x.push(32)
console.log(x);


// segunda sintaxe do array

const nums: Array<number> = [334,567]

console.log(nums)

// O tipo any
const arr1: any = [1, "teste", true, [3,4,5,6], {nome: "Ibra"}]
console.log(arr1)


// 4 - parâmetros tipados

function soma(a: number, b: number){

    console.log( a+b)
}

soma(4,5)

// 5 - retorno de função

function greeting(name: string): string{
    return `Ola ${name}`
}

console.log(greeting("Ibra"))

// 6 - função anônima

setTimeout(function(){

    const sallary: number = 1000
    console.log(sallary)
}, 2000)


// 7 - TIPOS DE OBJETO

function passCoordinates(coord: {x: number, y: number}){

    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)

// propriedades opcionais
function showNumbers(a: number, b: number, c?: number){

    console.log("A: " + a)
    console.log("B: " + b)

    if(c){
    console.log("C: " + c)
    }
}

showNumbers(1,2,3)
showNumbers(5,6)

// 9 - validando argumento opcional
function advancedGreenting(firstName: string, lastName?: string){

    if(lastName !== undefined){
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`

}

console.log(advancedGreenting("Ibra", "Có"))
console.log(advancedGreenting("Marciano"))

// 10 - Union type
function showBalance(balance: string | number){
    console.log(`O saldo da conta é R$${balance}`)

}
showBalance(100)
showBalance("500")

// 11 - avancando em union types

function showUsrrRole(role: boolean | string){

    if(typeof role === "boolean"){
        return " Usuário não aprovado"
    }

     return `A função do usuário é: ${role}`
}

console.log(showUsrrRole(false))
console.log(showUsrrRole("Admin"))

// 12 - type alias
type ID = string | number
console.log("==================== Alias ======================")
function showId(id: ID){
    console.log(`O ID é: ${id}`)
}

showId(569)
showId('5690')

// 13 - interface
interface Point {
    x: number
    y: number
    z: number

}

function showCoords(obj: Point){
    
    console.log(`X: ${obj.x} Y: ${obj.y} z: ${obj.z}`)
}


const coordObj:Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

// 14 - interface x type alias
interface Person{
    name: string
}

interface Person{
    age: number
}

const somePerson: Person ={name: "Matheus", age: 30}
console.log(somePerson)

// 15 - Literal types
let test: "testando"
test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center"){
    console.log(`Adireção é: ${direction}`)
}

showDirection("left")

// 16 - non null assertion operators
const p = document.getElementById("some-p")
console.log(p!.innerText)

// 17 - bigint
let n: bigint
n = 1000n

console.log(typeof n)
console.log(n +100n)

// 18 - Symbol
let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)
