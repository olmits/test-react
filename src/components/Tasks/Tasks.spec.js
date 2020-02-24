import React from 'react';
import { shallow } from 'enzyme'
import Tasks from './../Tasks'

describe('Render tasks component', () => {
    describe('Tasks', () => {
        const wrapper = shallow(<Tasks/>)
        it('should render tasks with create and list components', () => {
            expect(wrapper.is('.container-tasks')).toEqual(true);
        })
    })
})