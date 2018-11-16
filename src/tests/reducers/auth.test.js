import React from 'react';
import authReducer from '../../reducers/auth';

test('Should set uid for logina action', () => {
    const action = {
        type: 'LOGIN',
        uid: 'someuid'
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({
        uid: action.uid
    })
});

test('Should set empty state for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer(undefined, action);
    expect(state).toEqual({
        
    })
});

