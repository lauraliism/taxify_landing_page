import React, { PureComponent } from 'react'

import './PhoneInputField.css'

export default class PhoneInputField extends PureComponent {

	render() {
		return (
			<div className='PhoneInputField-container' >
				<label className='PhoneInputField-label' htmlFor='exampleInputEmail1'>Phone</label>
				<div className='PhoneInputField-fields-row'>
					<input className='form-control PhoneInputField-country-code-field' type='tel' value='+372' id='example-tel-input' />
					<input className='form-control PhoneInputField-number-field' type='number' placeholder='555-555-33' id='example-tel-input' />
				</div>
			</div>
		)
	}
}