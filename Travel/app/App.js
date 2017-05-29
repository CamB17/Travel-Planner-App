import React, { Component } from 'react'
import {
	Text,
	View,
	Stylesheet
} from 'react-native'
import Login from './scenes/Authentication/Login'
import Register from './scenes/Authentication/Register'
import Profile from './scenes/Profile'
import PageControlIOSExample from './scenes/PageControlIOSExample'
import Discover from './scenes/Discover'
import PageControl from './scenes/PageControl/PageControl'

export default class App extends Component {
	render() {
		return (
			<Profile />
		)
	}
}