import React from 'react';
import {login, logout} from '../../actions/auth';

test('Sholud create correct login action object', () => {
    const action = login('someid');
    expect(action).toEqual({
        type: "LOGIN",
        uid: "someid"
    })
});

test('Sholud create correct logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: "LOGOUT"
    })
})