import React from 'react'
import { shallow } from 'enzyme'
import List from './../List'

describe('Render list component', () => {
    const props = {
        tasks: [],
        onItemDelete: () => {}
    }
    describe('List of tasks', () => {
        const wrapper = shallow(<List {...props}/>)
        it('should render table of task list', () => {
            expect(wrapper.is('table')).toEqual(true);
            expect(wrapper.find('thead>tr>th')).toHaveLength(3);
            expect(wrapper.find('thead>tr').childAt(0).text()).toEqual('ID');
            expect(wrapper.find('thead>tr').childAt(1).text()).toEqual('TITLE');
            expect(wrapper.find('thead>tr').childAt(2).text()).toEqual('ACTION');
        })
    })
})