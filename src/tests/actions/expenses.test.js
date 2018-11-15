import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startSetExpenses, 
    setExpenses, 
    startAddExpense, 
    addExpense, 
    editExpense, 
    removeExpense, 
    startRemoveExpense, 
    startEditExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=> {
    const expenseData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expenseData[id] = {description, note, amount, createdAt}
    })
    database.ref('expenses').set(expenseData).then(() => done())
})

test('Should setup remove expense object', () => {
    const action = removeExpense('123abc');
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

test('Should set up set expene action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('Should fetch expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        })
        done();
    })
});

test('should edit expense in firebase', (done)  => {
    const store = createMockStore({});
    const id = expenses[0].id;
    const updates = {amount: 210};
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates
        })
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    })
})

test('Should remove expense from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startRemoveExpense({id: expenses[0].id})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id: expenses[0].id
        });
        return database.ref(`expenses/${expenses[0].id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeNull();
        done();
    })
});




