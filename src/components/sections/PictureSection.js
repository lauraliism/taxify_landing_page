import React, { PureComponent } from 'react'

import logo_white from 'images/logo_white.png'
import Slogan from 'components/paragraphs/Slogan'

import './PictureSection.css'

export default class PictureSection extends PureComponent {

	render() {
		return (
			<section className='PictureSection-container d-none d-md-flex'>
				<img src={logo_white} className='PictureSection-logo' alt='Logo' />
				<div className='PictureSection-slogan-container'>
					<Slogan
						title='Drive with Taxify'
						text='Earn good money with your car.'
					/>
				</div>
			</section>
		)
	}
}
