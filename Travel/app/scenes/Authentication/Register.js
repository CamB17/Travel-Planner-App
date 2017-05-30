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
import { styles } from './styles'
import { firebaseRef } from '../../services/Firebase'
import { Actions } from 'react-native-router-flux'

export default class Register extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
			verifyPassword: ''
		}
	
		this._register = this._register.bind(this)
	}

	_register() {
			if (this.state.password == this.state.verifyPassword) {
			firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
				//Handle errors here
				console.log(error.code)
				console.log(error.message)
			})

			Actions.pagecontrol()
		} else {
			console.log("Password did not match");
		}
	}
	
	render() {
		return (
			<ViewContainer>
				<StatusbarBackground />

				<View style={styles.logoReg}>
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
						autoCorrect={false}
						keyboardAppearance="dark"
						autoCapitalize="none"
					/>
					<View style={styles.hairline} />

					<TextInput 
						style = {styles.textInput}
						onChangeText = {(text) => this.setState({verifyPassword: text})}
						value={(this.state.verifyPassword)} 
						placeholder="Verify Password"
						placeholderTextColor="black"
						secureTextEntry={true}
						keyboardAppearance="dark"
						autoCapitalize="none"
					/>
					<View style={styles.hairline} />
				</View>

				<View style={styles.register}>
					<TouchableOpacity style={styles.registerButton} onPress={this._register}>
						<Text style={styles.registerButtonText}>Create Account</Text>
					</TouchableOpacity>
				</View>
			</ViewContainer>
		)
	}
}
