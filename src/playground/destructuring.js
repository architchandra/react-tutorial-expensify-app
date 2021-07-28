// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self Published'} = book.publisher;
// console.log(publisherName);



const item = ['Coffee', 'INR 20', , 'INR 40'];
const [itemName, , priceMedium = 'INR 50'] = item;

console.log(`A medium ${itemName} costs ${priceMedium}.`);