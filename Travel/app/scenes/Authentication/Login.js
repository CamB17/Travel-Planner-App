import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image
} from 'react-native'
import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'
import _ from 'lodash'
import { firebaseRef } from '../../services/Firebase'
import { styles } from './styles'
import { Actions } from 'react-native-router-flux'

export default class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
			status: ''
		}

		this._login    = this._login.bind(this)
		this._signup = this._signup.bind(this)
	}
	//_ because it is a private function
	_login() {
		firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
			//Handles errors here
			console.log(error.code)
			console.log(error.message)
		})
	}

	_signup() {
		Actions.signup()
	}

	_onFocus() {

	}
	
	render() {
		return (
			<ViewContainer>
				<StatusbarBackground />

				<View style={styles.logo}>
					<Image source={require('../../resources/Smart_Travels.png')}/>
				</View>
				
				<View style={styles.inputButton}>
					<TextInput 
						style = {styles.textInput}
						onChangeText = {(text) => this.setState({email: text})}
						value={(this.state.email)}
						placeholder="Email"
						placeholderTextColor="black"
						autoCorrect={false}
						onFocus={this.onFocus}
						returnKeyType="next" //Keyboard "next" to go to password input line
						keyboardAppearance="dark"
					/>
					<View style={styles.hairline} />
					
					<TextInput 
						style = {styles.textInput}
						onChangeText = {(text) => this.setState({password: text})}
						value={(this.state.password)} 
						placeholder="Password"
						placeholderTextColor="black"
						secureTextEntry={true}
						autoCapitalize="none"
						autoCorrect={false}
						returnKeyType="done" //Keyboard "go" to take to homepage
						keyboardAppearance="dark"
					/>
					<View style={styles.hairline} />
				</View>

				<View style={styles.login}>
					<TouchableOpacity style={styles.loginButton} onPress={this._login}>
						<Text style={styles.loginButtonText}>Login</Text>
					</TouchableOpacity>
				</View>
				
				<View style={styles.signup}>
					<TouchableOpacity style={styles.signupButton} onPress={this._signup}>
						<Text style={styles.signupButtonText}>Create Account</Text>
					</TouchableOpacity>
				</View>
			</ViewContainer>
		)
	}
}
