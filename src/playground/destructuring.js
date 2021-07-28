const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin',
  },
};

const { name: publisherName = 'Self Published'} = book.publisher;
console.log(publisherName);