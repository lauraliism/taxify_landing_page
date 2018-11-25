import React, { PureComponent } from 'react'

import './Checkbox.css'

type Props = {
	label: string,
}

export default class Checkbox extends PureComponent<Props> {
	render() {
		const { label } = this.props

		return (
			<div className='form-check Checkbox-container'>
				<input className='form-check-input' type='checkbox' id='defaultCheck1' />
				<label className='form-check-label Checkbox-label' htmlFor='defaultCheck1'>
					{label}
				</label>
			</div>
		)
	}
}