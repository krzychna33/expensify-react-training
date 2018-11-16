import React from 'react'
import {shallow} from 'enzyme'
import {Header} from '../../components/Header'

test('Should render header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(wrapper).toMatchSnapshot();
})

test('Should call logout function', () => {
    const startLogoutSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogoutSpy}/>);
    wrapper.find('button').simulate('click');
    expect(startLogoutSpy).toHaveBeenCalled();
})