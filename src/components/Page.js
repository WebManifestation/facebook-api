import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import fbApi from '../fb-api'

import '../css/main.css'


export default class Page extends React.Component {

	constructor() {
		super()
		this.state = {
			sdkLoaded: false
		}
	}

	componentDidMount() {
		// console.log(this.props)
		fbApi.getSdk();
		fbApi.initLoad(()=>{this.setState({sdkLoaded: true})});
	}

	handelLogin() {
		if (this.state.sdkLoaded) {
			console.log('SDK loaded');
			FB.login()
		} else {
			console.log('SDK not loaded');
		}
	}

	render() {

		return(
			<div>
				<div onClick={this.handelLogin.bind(this)}>Longin</div>
			</div>
		)

	}

}
