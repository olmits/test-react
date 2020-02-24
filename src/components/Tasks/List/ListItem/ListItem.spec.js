import React from 'react'
import { shallow } from 'enzyme'
import ListItem from './../ListItem'

describe('Render list item component', () => {
    const props = {
        task: {
            id: 0,
            title: ''
        },
        onTaskDelete: () => {}
    }
    describe('Task item', () => {
        const wrapper = shallow(<ListItem {...props}/>)
        const {task} = props
        it('should render tr of ths with task object', () => {
            expect(wrapper.is('tr')).toEqual(true);
            expect(wrapper.find('td')).toHaveLength(3);
            expect(wrapper.childAt(0).text()).toEqual(String(task.id));
            expect(wrapper.childAt(1).text()).toEqual(String(task.title));
        })
    })
})