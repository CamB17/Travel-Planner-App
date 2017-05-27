import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TextInput
} from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusbarBackground from '../components/StatusbarBackground'

export default class Authentication extends Component {
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

const styles = StyleSheet.create({
	textInput: {
		height: 40,
		paddingLeft: 20,
		paddingRight: 20,
		textAlignVertical: 'bottom',
		fontSize: 12,
		
	},
	hairline: {
		height: 1,
		backgroundColor: 'black',
		marginLeft: 20,
		marginRight: 20
	}
})