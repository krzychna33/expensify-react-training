import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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
    const expenseData = {
        description: "Rent",
        note: "test",
        amount: 1337,
        createdAt: 101
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('Should setup add expense object with default values', () => {
    const expenseDefaultData = {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDefaultData,
            id: expect.any(String)
        }
    })
});