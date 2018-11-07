import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters'
import { filter } from 'rsvp';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=> {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('Should render ExpenseListFilters Correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with altData Correctly', () => {
    wrapper.setProps({filters: altFilters})
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
    wrapper.find('input').simulate('change', {
        target: {
            value: 'testText'
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith('testText');
});

test('Should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: filters.sortBy
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: altFilters.sortBy
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle data changes', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate: filters.startDate,
        setEndDate: filters.endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(filters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(filters.endDate);
});

test('Should handle data focused changes', () => {
    const calendarFocused = 'startDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

