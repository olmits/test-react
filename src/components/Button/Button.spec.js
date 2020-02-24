import React from 'react';
import { shallow } from 'enzyme'
import Button from './../Button'

describe('Render Button component', () => {
    const props = {
        innerText: '',
        onClick: () => {}
    }
    describe('Button', () => {
        const wrapper = shallow(<Button {...props}/>)
        it('should render Button component', () => {
            expect(wrapper.is('button')).toEqual(true);
        })
    })
})