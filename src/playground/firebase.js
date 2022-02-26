// Connect to a database
// const database = getDatabase();



// Set data

// set(ref(database), {
//   name: 'Archit Chandra',
//   age: 31,
//   stressLevel: 6,
//   isSingle: false,
//   job: {
//     title: 'Software dev',
//     company: 'Google',
//   },
//   location: {
//     city: 'New Delhi',
//     country: 'India',
//   },
// });

// set(ref(database, 'age'), 27);
// set(ref(database, 'location/country'), 'USA');

// set(ref(database, 'attributes'), {
//   height: '156',
//   weight: '70.9',
// }).then(() => {
//   console.log('Yo, height weight changed');
// }).catch((e) => {
//   console.log('Error:', e);
// });



// Remove data

// remove(ref(database, 'isSingle'))
//   .then(() => {
//     console.log('IsSingle data has been removed.')
//   })
//   .catch(() => {
//     console.log('Oops, an error appeared. Data was not deleted.');
//   });

// set(ref(database, 'isSingle'), null);



// Update data

// update(ref(database), {
//   name: 'Yoyo',
//   age: 23,
//   job: 'Chef',
//   isSingle: null,
// });

// update(ref(database), {
//   job: 'Manager',
//   'location/city': 'Bikaner',
// });

// update(ref(database), {
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Bangalore',
// });



// Read data once

// get(ref(database))
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//   get(ref(database, 'location/city'))
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((e) => {
//     console.log(e);
//   });



// Subscribe to data

// const unsubscribe = onValue(ref(database, 'location/city'),
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log('Error in fetching data', e);
//   }
// );

// setTimeout(() => {
//   set(ref(database, 'location/city'), 'New Delhi');
// }, 3500);

// setTimeout(() => {
//   set(ref(database, 'location/city'), 'New York');
// }, 7000);

// setTimeout(() => {
//   unsubscribe();
//   set(ref(database, 'location/city'), 'New Bazaar');
// }, 10500);
