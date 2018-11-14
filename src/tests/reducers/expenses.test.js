import React from 'react';
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses';

test('set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
})