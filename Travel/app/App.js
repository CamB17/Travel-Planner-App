import React, { Component } from 'react'
import {
	Text,
	View,
	Stylesheet
} from 'react-native'
import Authentication from './scenes/Authentication'

export default class App extends Component {
	render() {
		return (
			<Authentication />
		)
	}
}