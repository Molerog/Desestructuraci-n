
/*1.  Ejercicios destructuring
Dado el siguiente objeto:
*/

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

//Extrae la empleada Ana con todos sus datos personales:

//{"name":"Ana", "email":"Ana@gmail.com"}

const[,pers2] = empleados;

console.log(pers2);

//Extrae el email del empleado Luis --> Luis@gmail.com

const[Luis] = empleados;

const{email} = Luis;

console.log(email);

/*
Usa la desestructuración para intercambiar los valores de a y b
// Inicialmente
*/

let a = 5;
let b = 3;


// Al final

// let a = 3;
// let b = 5;

[a,b] = [b,a]

console.log(a,b);

/*
2. Ejercicios spread/rest
Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
*/



const sumEveryOther = (...b) =>{
   const suma = b.reduce((a,b) => a+b)
   return suma
} 

 
const resultado1 = (sumEveryOther(6, 8, 2, 3, 1)); //20
const resultado2 = (sumEveryOther(11, 3, 12)); //26 

console.log(resultado1);
console.log(resultado2);


//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

const addOnlyNums = (...b) =>{
    const filtro = b.filter(num => typeof num == "number") //b.filter(Number) también srive
    const suma = filtro.reduce((a,b) => a + b)
    return suma    
}   

const numerosFiltrados = addOnlyNums(1, 'perro', 2, 4); //7

console.log(numerosFiltrados);


//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.


const countTheArgs = (...arr) =>{
    return arr.length
    
}

console.log(countTheArgs('gato', 'perro')); //2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso',)); //4


//Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const arr1 = [3,6,7,9];
const arr2 = [1,10,23];

const combineTwoArrays = ((arr1,arr2) =>{
    return [...arr1, ...arr2];
})

console.log(combineTwoArrays(arr1,arr2));


//Extras:

//Dado el siguiente objeto:

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

//Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana

// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
// console.log(maximaHoy)
// console.log(maximaManana)

const {today:maximaHoy, tomorrow:maximaManana} = HIGH_TEMPERATURES;

console.log(maximaHoy);
console.log(maximaManana);

//Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

//** Método con forEach **/

const onlyUniques = (...data) =>{
          let vacia = []
          data.forEach(value => {
        if (!vacia.includes(value)){
            vacia.push(value)
            // vacia = [...vacia, value]
        }
    })
    return vacia
}

/** Método con filter e indexOf **/

// const onlyUniques = (...data)=>{
//       const filtro = data.filter((value,i) => data.indexOf(value) == i)
//       return filtro
// }

const resultados1 = onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); 
console.log(resultados1)
const resultados2 = onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]
console.log(resultados2)



//Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.



const combineAllArrays = (...arrays) => {
  console.log(arrays)
   const numbers = arrays.reduce((a,b) => a + b).split(",").map(Number)         //Se puede hacer de esta manera en lugar de escalonarlo.
  // const separation = [...numbers.split(",").map(Number)]                
   return numbers  
}


const Array1 = combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]);
//[3, 6, 7, 8, 2, 7, 3, 1]
const Array2 = combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
//[2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

console.log(Array1);
console.log(Array2);

//Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.



const sumaAndSquare = (...data) =>{
 const operation = data.map(num => num * 2).reduce((a,b) => a + b)
 return operation
 
}


const operation = sumaAndSquare(2, 5, 10, 20);

console.log(operation);



















