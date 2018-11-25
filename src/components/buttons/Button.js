import React, { PureComponent } from 'react'

import './Button.css'

type Props = {
	title: string,
	onClick: () => void,
	className?: string,
}

export default class Button extends PureComponent<Props> {
	render() {
		const { title, onClick, className } = this.props
		const buttonClassName = className ? `Button-container btn btn-dark ${className}` : 'Button-container btn btn-dark'

		return (
			<button
				type='button'
				className={buttonClassName}
				onClick={onClick}
			>
				{title.toUpperCase()}
			</button>
		)
	}
}
