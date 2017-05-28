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

export default class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: ''
		}
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
						returnKeyType="go" //Keyboard "go" to take to homepage
						keyboardAppearance="dark"
					/>
					<View style={styles.hairline} />
				</View>

				<View style={styles.login}>
					<TouchableOpacity style={styles.loginButton}>
						<Text style={styles.loginButtonText}>Login</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.signup}>
					<TouchableOpacity style={styles.signupButton}>
						<Text style={styles.signupButtonText}>Create Account</Text>
					</TouchableOpacity>
				</View>
			</ViewContainer>
		)
	}
}
