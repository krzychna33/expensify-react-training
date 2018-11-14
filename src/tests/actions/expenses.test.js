import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk]);

test('Should setup remove expense object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense object', () => {
    const action = editExpense('123abc', { description: 'test', amount: 1999 })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'test',
            amount: 1999
        }
    })
});

test('Should setup add expense object with passed values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expenses to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'mousexD',
        createdAt: 0
    }
    store.dispatch(startAddExpense(expenseData)).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
});

test('should add expenses with defaults to database and store', (done) => {
    const store = createMockStore({});
    store.dispatch(startAddExpense()).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                amount: 0,
                createdAt: 0,
                note: ""
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            description: '',
            amount: 0,
            createdAt: 0,
            note: ""
        });
        done();
    })
});

// test('Should setup add expense object with default values', () => {
//     const expenseDefaultData = {
//         description: "",
//         note: "",
//         amount: 0,
//         createdAt: 0
//     }
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseDefaultData,
//             id: expect.any(String)
//         }
//     })
// });