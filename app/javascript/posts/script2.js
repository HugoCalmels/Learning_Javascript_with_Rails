const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

const result = books.filter(book =>
  book.rented > 0
);
console.log(result);

const result2 = books.sort((a, b) => {
  return a.rented - b.rented
});
console.log(books)
console.log(books[books.length - 1])
console.log(books[0])

console.log(books.find((book) => book.id === 873495))


let foundIndex = 0
books.map((book, index) => {
  if (book.id === 133712) {
    foundIndex = index
  }
})
books.splice(foundIndex, 1)
console.log(books)

books.sort(function (a, b) {
  return a.title.localeCompare(b.title)
});
console.log(books)
