import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import { AdminPage } from './AddSchoolContainer'

describe ('AddSchoolContainer', () => {
    it('sets err', () => {
        const wrapper = mount(<AdminPage school={{}} />);
        //console.log(wrapper)
        const saveButton = wrapper.find('button.pure-button').last();
        //console.log(saveButton)
        expect(saveButton.prop('type')).toBe('submit');
        // saveButton.simulate('click');
        // expect(wrapper.state().errors.title).toBe('Title');
    })
})
