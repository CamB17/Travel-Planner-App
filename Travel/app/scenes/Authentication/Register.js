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
				
				<View>
					<TextInput 
						style = {styles.textInput}
						onChangeText = {(text) => this.setState({email: text})}
						value={(this.state.email)}
						placeholder="Email"
						placeholderTextColor="black"
					/>
						<View style={styles.hairline} />
					
					<TextInput 
						style = {styles.textInput}
						onChangeText = {(text) => this.setState({password: text})}
						value={(this.state.password)} 
						placeholder="Password"
						placeholderTextColor="black"
						secureTextEntry={true}
					/>
						<View style={styles.hairline} />
				
				</View>
			</ViewContainer>
		)
	}
}
