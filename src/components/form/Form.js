import React, { PureComponent } from 'react'

import InputField from 'components/form/InputField'
import Checkbox from 'components/form/Checkbox'
import Button from 'components/buttons/Button'
import PhoneInputField from 'components/form/PhoneInputField'

import './Form.css'

export default class Form extends PureComponent {
	onProceed = () => {
		window.open('https://partners.taxify.eu/login?lang=et')
	}

	render() {
		return (
			<section className='Form-container'>
				<h4 className='Form-heading'>Signup as a driver</h4>
				<p className='Form-text'>Signup here if you are a driver who would like to use Taxify platform.</p>
				<InputField type='email' label='Email' smallText='Will be using as your username' />
				<PhoneInputField />
				<InputField type='text' label='City' />
				<Checkbox className='Form-checkbox-label' label='By signing up, you accept our Terms of Service and Privacy Policy' />
				<Button title='Proceed' className='Form-button' onClick={this.onProceed} />
				<span className='Form-text Form-text-center'>Have multiple cars and owners?</span>
				<a href='https://fleets.taxify.eu/signup?lang=et' className='Form-link'>Signup as a fleet owner</a>
			</section>
		)
	}
}