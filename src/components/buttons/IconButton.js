import React, { PureComponent, type Element } from 'react'

import './IconButton.css'

type Props = {
	title: string,
	onClick: () => void,
	children: Element<*>,
}

export default class IconButton extends PureComponent<Props> {
	render() {
		const { title, onClick, children } = this.props
		return (
			<button
				type='button'
				className='IconButton-container btn'
				onClick={onClick}
			>
				{children}
				<div className='d-none d-md-inline'>
					{title}
				</div>
			</button>
		)
	}
}
