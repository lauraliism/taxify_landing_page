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
				<h2 className='Slogan-title'>{title}</h2>
				<span className='Slogan-text'>{text}</span>
			</div>
		)
	}
}
