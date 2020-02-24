import React from 'react'
import { shallow } from 'enzyme'
import CreateTask from './../Create'

describe('Create task form', () => {
    const props = {
        onSubmit: () => {}
    }
  describe('Task form creating', () => {
    const wrapper = shallow(<CreateTask {...props}/>)
    it('should render simple task form', () => {
        
        expect(wrapper.is('.create-task')).toEqual(true)
        expect(wrapper.childAt(0).type()).toEqual('form')
        expect(wrapper.find('label').text()).toEqual('NEW TASK: ')
        expect(wrapper.find('input')).toHaveLength(1);
    });
      
  })
})
