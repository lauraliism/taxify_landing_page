import React, { PureComponent } from 'react'
import { MdLanguage } from 'react-icons/md'

import logo_black from 'images/logo_black.png'
import Button from 'components/buttons/Button'
import IconButton from 'components/buttons/IconButton'
import Form from 'components/form/Form'

import './FormSection.css'

export default class FormSection extends PureComponent {
	onSignIn = () => {
		window.open('https://partners.taxify.eu/login?lang=et')
	}

	render() {
		return (
			<section className='FormSection-container'>
				<div className='FormSection-top-row'>
					<img src={logo_black} className='FormSection-logo d-flex d-md-none' alt='Logo' />
					<div className='FormSection-button-row'>
						<a href='https://partners.taxify.eu/login?lang=et' className='FormSection-link d-none d-md-inline'>
							Already have an account?
						</a>
						<Button
							title={'Sign in'}
							onClick={this.onSignIn}
						/>
						<IconButton
							onClick={() => console.log('Language icon pressed')}
							title={'English'}
						>
							<MdLanguage size='1.5em' className='FormSection-iconbutton' />
						</IconButton>
					</div>
				</div>
				<div className='FormSection-form-container'>
					<Form />
				</div>
			</section>
		)
	}
}
