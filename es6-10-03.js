/** for in */
const car = {
  maker : "BMW",
  color : "red",
  year : "2010",
};

for(const prop in car){
  console.log(prop, car[prop]);
}