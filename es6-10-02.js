/** 객체에 대한 반복 */
const car = {
  maker : "BMW",
  color : "red",
  year : "2010",
};

for(const prop of Object.keys(car)){
  const value = car[prop];
  console.log(prop, value);
}
