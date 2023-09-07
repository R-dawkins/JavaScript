/** ES5 function default value */
function getLocation(city, country, continent){
  if(typeof country === 'undefined'){
      country = 'Italy';
  }
  if(typeof continent === 'undefined'){
      continent = 'Europe';
  }
  console.log(continent, country, city);
}

getLocation('Milano');
getLocation('Paris', 'France');
console.log("\n");

/** ES6 function default value */
function getLocation2(city, country = 'Italy', continent = 'Europe'){ 
  console.log(continent, country, city);
}

getLocation2('Milano');
getLocation2('Paris', 'France');