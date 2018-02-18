import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import SignupPage from './SignupPage';
import Header from './SignupComponents/header';

configure({ adapter: new Adapter() });

test('Clicking on Random Selection Opens up Pay competitions', () => {
	const getStarted = render(<SignupPage />);
	expect(getStarted.find('Header').length).to.be.equal(1);
});

