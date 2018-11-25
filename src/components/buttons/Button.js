import React, { PureComponent } from 'react'

import './Button.css'

type Props = {
	title: string,
	onPress: () => void,
}

export default class Button extends PureComponent<Props> {
	render() {
		const { title, onPress } = this.props
		return (
			<button
				type='button'
				className='Button-button btn btn-dark'
				onPress={onPress}
			>
				{title.toUpperCase()}
			</button>
		)
	}
}
