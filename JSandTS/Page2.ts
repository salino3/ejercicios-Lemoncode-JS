// 4. Read Books
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha 
// leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

// function isBookRead(books, titleToSearch) {
  // Implementation here..
// }
// Ejemplo

interface PropsBooks {
 title: string,
 isRead: boolean
}


const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

// Opcional
// Utiliza Typescript para añadir los tipos adecuados.

interface PropsBook {
  title: string,
  isRead: boolean
};

function isBookRead( arrayBooks: PropsBook[],   titleToSearch: string ) {
  let bookIsRead: Array<PropsBook>  = arrayBooks?.filter((item: PropsBook) => item.title === titleToSearch);

  if (
    bookIsRead[0] &&
    bookIsRead[0]?.isRead &&
    bookIsRead[0].isRead === undefined
  ) {
    return (this.bookIsRead = "This title is not in the database");
  };

  return bookIsRead[0]?.isRead;
};


console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false