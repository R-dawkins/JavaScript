/** 객체 디스트럭처링 - 중첩된 객체 형태 */
const person = {
  name : "hong",
  last : "gildong",
  links : {
      social : {
          facebook : "https://www.facebook.com/alberto.montalesi",
          google : "https://www.google.com",
      },
      website : "https://albertomontalesi.github.io/",
  },
};

const {facebook,google} = person.links.social;
const {facebook : fb} = person.links.social;
const {google : gl} = person.links.social;
const {website} = person.links;
console.log(`facebook : ${facebook}`);
console.log(`facebook : ${fb}`);
console.log(`facebook : ${google}`);
console.log(`facebook : ${gl}`);
console.log(website)