import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};


firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};



// database.ref('expenses').on('child_removed', snapshot => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', snapshot => {
//     console.log(snapshot.key, snapshot.val())
// })

// let expenses = [];

// database.ref('expenses').on('value', (snapshot) => {
//     const expensesBuffor = [];
//     snapshot.forEach((child)=> {
//         expensesBuffor.push({
//                 id: child.key,
//                 ...child.val()
//             })
//     })
//     expenses = expensesBuffor;
//     console.log('EXPENSES ARRAY UPDATE:', expenses)
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         console.log(expenses)
//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             })
//         })
//         console.log(expenses)
//     })



// const notes = [{
//     id: '12',
//     title: 'First Note',
//     body: 'This is my note'
// }, {
//     id: '74cd2',
//     title: 'second note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);





// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`)
// })

// database.ref().once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
// }).catch((e) => {
//     console.log('Err:', e)
// })

// database.ref().set({
//     name: 'Krzysiek',
//     age: 19,
//     job: {
//         title: 'AI Dev',
//         company: 'Google'
//     },
//     stressLevel: 6,
//     location: {
//         city: 'Philadelphia',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('Data saved.')
// }).catch((e) => {
//     console.log('Error occured:', e)
// })

// database.ref().update({
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     stressLevel: 9
// })

// database.ref().set('xD!!')

// database.ref('age').set(17)
// database.ref('location/city').set('New York')

// database.ref('attributes').set({
//     height: 177,
//     weight: 69
// }).then(() => {
//     console.log('Data saved.')
// }).catch((e) => {
//     console.log('Error occured:', e)
// })

// database.ref().remove().then(() => {
//     console.log('Removed');
// }).catch((e) => {
//     console.log('Error occured:', e)
// })