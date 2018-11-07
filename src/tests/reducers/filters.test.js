import filtersReducer from '../../reducers/filters';
import moment from 'moment';
import { filter } from 'rsvp';

test('Should setup default filter value', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test("Should set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };

    const action = { type: 'SORT_BY_DATE' };

    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date')
});

test('Should set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'testString'});
    expect(state.text).toBe('testString')
});

test('Should set startDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(100)});
    expect(state.startDate).toEqual(moment(100))
});

test('Should set endDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(100)});
    expect(state.endDate).toEqual(moment(100))
});