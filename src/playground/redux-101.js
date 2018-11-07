import {createStore} from 'redux';

// Action generators:

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 0}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return{
                count: action.count
            }
        default:
            return state;
    }
}

// Store declaration
const store = createStore(countReducer);

console.log(store.getState());
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// Dispatchers:

store.dispatch(incrementCount({ incrementBy: 3 }));
store.dispatch(decrementCount(({ decrementBy: 2 })));
store.dispatch(setCount({count: 500}));
store.dispatch(resetCount());


    // store.dispatch({
    //     type: 'INCREMENT',
    //     incrementBy: 16
    // });
    //
    // store.dispatch({
    //     type: 'DECREMENT',
    //     decrementBy: 10
    // })

