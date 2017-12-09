import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import { SchoolFormContainer } from './schoolFormContainer'

describe ('SchoolFormContainer', () => {
    it('Should hava a Set School button', () => {
        const wrapper = mount(<SchoolFormContainer school={{}} />);
        //console.log(wrapper)
        const saveButton = wrapper.find('button.pure-button').last();
        //console.log(saveButton)
        expect(saveButton.prop('type')).toBe('submit');
        // saveButton.simulate('click');
        // expect(wrapper.state().errors.title).toBe('Title');
    })
})
