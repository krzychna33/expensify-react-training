import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses';



test('Should return properly value for fixtures', () => {
    const total = selectExpensesTotal(expenses);
    console.log(total);
    expect(total).toBe(114300);
});

test('Should return 0 for empty array', () => {
    const total = selectExpensesTotal([]);
    console.log(total);
    expect(total).toBe(0);
});

test('Should return value for one expense', () => {
    const total = selectExpensesTotal([expenses[0]]);
    console.log(total);
    expect(total).toBe(300);
});

