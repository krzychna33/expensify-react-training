import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


import { editExpense, addExpense, removeExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();


store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 1000
}));

store.dispatch(addExpense({
    description: "Gas Bill",
    amount: 997
}));

store.dispatch(addExpense({
    description: 'Rent',
    amount: 240000
}));

// store.dispatch(setTextFilter('bill'));
// store.dispatch(sortByAmount());

// setTimeout(()=>{
//     store.dispatch(setTextFilter('rent'));
// }, 3000)

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
