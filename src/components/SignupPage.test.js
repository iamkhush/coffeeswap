import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import SignupPage from './SignupPage';
import Header from './SignupComponents/header';

configure({ adapter: new Adapter() });

test('Clicking on Random Selection Opens up Pay competitions', () => {
	const getStarted = mount(<SignupPage />);
	expect(getStarted.find('Header').length).to.be.equal(1);
	// Should be at step 1 - Get Started 
	expect(getStarted.state('step')).to.be.equal(1);
	// getStarted.find('Header').find('div.col-lg-8 > div > a').simulate('click');
	// expect(getStarted.state('step')).to.be.equal(2);
});

