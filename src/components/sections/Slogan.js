import React, { PureComponent } from 'react'

import './Slogan.css'

type Props = {
	title: string,
	text: string,
}

export default class Slogan extends PureComponent<Props> {
	render() {
		const { title, text } = this.props
		return (
			<div className='Slogan-container'>
				<span className='Slogan-title'>{title}</span>
				<span className='Slogan-text'>{text}</span>
			</div>
		)
	}
}
