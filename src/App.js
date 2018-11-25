import React, { PureComponent } from 'react'

import logo from './images/logo.png'
import Slogan from 'components/sections/Slogan'
import Button from 'components/buttons/Button'
import './App.css'

class App extends PureComponent {
	renderButtonRow = () => (
		<div>
			<Button
				title={'Sign in'}
				onPress={() => console.log('Login pressed')}
			/>
		</div>
	)

	render() {
		return (
			<div className='container-fluid d-flex App-container flex-fill'>
				<section className='App-left-container'>
					<img src={logo} className='App-logo' alt='Logo' />
					<div className='App-slogan-container'>
						<Slogan
							title='Drive with Taxify'
							text='Earn good money with your car.'
						/>
					</div>
				</section>
				<section className='App-right-container'>
					{this.renderButtonRow()}
				</section>
			</div>
		);
	}
}

export default App
