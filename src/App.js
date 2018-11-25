import React, { PureComponent } from 'react'

import FormSection from 'components/sections/FormSection'
import PictureSection from 'components/sections/PictureSection'

import './App.css'

class App extends PureComponent {
	render() {
		return (
			<div className='container-fluid d-flex App-container flex-fill'>
				<PictureSection/>
				<FormSection />
			</div>
		)
	}
}

export default App
