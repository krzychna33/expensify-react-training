import React from 'react'
import { shallow } from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('Should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1000}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Should render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={5} expensesTotal={10000}/>);
    expect(wrapper).toMatchSnapshot();
})