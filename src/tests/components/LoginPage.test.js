import React from 'react';
import {shallow} from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('Should render loginPage', () => {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin', () => {
    const startLoginSpy = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLoginSpy}/>);
    wrapper.find('button').simulate('click')
    expect(startLoginSpy).toHaveBeenCalled();
});