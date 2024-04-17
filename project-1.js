//variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    qoute:
      "the best way to find yourself is to lose yourself in the service of others.",
    person: "Mahatma Gandhi",
  },
  {
    quote:
      "Try not to become a man of success, but rather try to become a man of value.",
    person: "Albert Einstein",
  },
  {
    quote:
      "The aim of art is to represent not the outward appearance of things, but their inward significance.",
    person: "Aristotle",
  },
  {
    quote: "You will never do anything in this world without courage.",
    person: "Montana",
  },
  {
    quote:
      "We cannot solve our problems with the same thinking we used when we created them.",
    person: "Albert Einstein",
  },
  {
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    person: "Philip Mona",
  },
  {
    quote:
      "We cannot solve our problems with the same thinking we used when we created them.",
    person: "Ivy Murage",
  },
  {
    quote:
      "If we knew what it was we were doing, it would not be called research, would it?",
    person: "Habib Josue",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
