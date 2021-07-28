// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self Published'} = book.publisher;
// console.log(publisherName);



const item = ['Coffee', 'INR 20', 'INR 30', 'INR 40'];
const [itemName, priceSmall, priceMedium, priceLarge] = item;

console.log(`A medium ${itemName} costs ${priceMedium}.`);