import React, { PureComponent } from 'react'

import './InputField.css'

type Props = {
	smallText?: string,
	label: string,
	type: string,
}

export default class InputField extends PureComponent<Props> {

	render() {
		const { smallText, label, type } = this.props
		return (
			<div className='InputField-container'>
				<label className='InputField-label' htmlFor='exampleInputEmail1'>{label}</label>
				<input type={type} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
				{smallText ? (
					<small id='emailHelp' className='form-text text-muted InputField-small-text'>
						{smallText}
					</small>
				) : undefined}
			</div>
		)
	}
}