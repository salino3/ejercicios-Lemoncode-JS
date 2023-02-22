
//* Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva
// su primer elemento. Utiliza destructuring.

const head = ([firstElement] = []) => {
  return firstElement;
};  

const myArr = ["casa", "perro", 2, true, 7, "Hola", "house"];

const primerElemento = head(myArr);
console.log(primerElemento); 


//* Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos 
// menos el primer elemento. Utiliza rest operator.

const tail = ([ , ...rest] = []) => {
  return rest;
};

const others = tail(myArr);
console.log(others);


//* Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos
// los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

// ejemplos: "push", "pop", "shift", "unshift", "splice", "slice", "concat", "map", "filter";

const init = (array) => {
  const items = array.slice(0, -1);
  return items;
};

const initMenosFinal = init(myArr);
console.log(initMenosFinal)


//* Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (array) => {
  const items = array.slice(-2, -1);
  return items;
};

const initFinal = last(myArr);
console.log(initFinal);


// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. Utiliza rest / spread operators.

const Arr2 = ["hello", "gato", 3, 0, false, "guitar"];
const Arr3 = ["Helado", "Pan", 34, 67, null, 21];
const Arr4 = [2, 4, 5, "koala", "lalala", "go"];

const concat = (a, b) => {return [...a, ...b]}; 

const ArrConcatenados = concat(Arr2, Arr3);
console.log(ArrConcatenados);


//* Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
const concat2 = (a, b, c) => {
  return [...a, ...b, ...c];
}; 

const ArrConcatenados2 = concat2(Arr2, Arr3, Arr4);
console.log(ArrConcatenados2);

// 3. Clone Merge
// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone(source) {
 const sourceClonado = Object.assign({}, source);
  return sourceClonado;
};

const persona = { name: "John", age: 30 };
const personaClonada = clone(persona);
//
console.log(personaClonada);
console.log(persona === personaClonada);// false, no tienen la misma referencia en memoria

//* Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto
// con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

// Por ejemplo, dados estos 2 objetos:

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
// el resultado de mezclar a sobre b sería:

merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
// TIP: Puedes usar la función "clone" del apartado A.

function merge(source, target) {
    
    const x = { ...source, ...target };
    return x;
};

const c = merge(a, b);
console.log(c);








