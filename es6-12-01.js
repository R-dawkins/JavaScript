/** spread syntax - 배열의 결합 */

const veggie = ['tomato','cucumber','beans'];
const meat = ['pork','beef','chicken'];
const menu = [...veggie, "pasta", ...meat];

console.log(menu);