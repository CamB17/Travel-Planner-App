import React, { Component } from 'react'
import {
	Image,
	StyleSheet,
	Text,
	View
} from 'react-native'

import ViewContainer from '../components/ViewContainer'
import StatusbarBackground from '../components/StatusbarBackground'

export default class Profile extends Component {
	render() {
		return (
			<ViewContainer>
				<StatusbarBackground />

				<View style={styles.profilePicture}>
					<View style={styles.profilePictureBorder}>
						<Image source={require('../resources/profile.png')} />
					</View>
				</View>

				<View style={styles.name}>
					<Text style={styles.nameText}>Rex</Text>
				</View>

				<View style={styles.userDescription}>
					<Text style={styles.userDescriptionText}>Rex only travels on his hog</Text>
					<Text style={styles.userDescriptionText}></Text>
					<Text style={styles.userDescriptionText}></Text>
				</View>

				<View style={styles.userInfo}>
					<View style={styles.columnOne}>
						<Text style={styles.userInfoText}>Country</Text>
						<Text style={styles.userInfoText}>Date of Birth</Text>
						<Text style={styles.userInfoText}>Travels</Text>
					</View>
					<View style={styles.columnTwo}>
						<Text style={styles.userInfoText}>Merica</Text>
						<Text style={styles.userInfoText}>1965</Text>
						<Text style={styles.userInfoText}>Wherever there is guns and beer</Text>
					</View>
				</View>
			</ViewContainer>
		)
	}
}

const styles = StyleSheet.create({
	profilePicture: {
		alignItems: 'center',
		marginTop: 75,
	},
	profilePictureBorder: {
		overflow: 'hidden',
		borderWidth: 1,
		borderRadius: 90,
		height: 175,
		width: 167,
		borderColor: '#2c0f66',
	},
	name: {
		alignItems: 'center',
		marginTop: 30,
		marginBottom: 24,
	},
	nameText: {
		fontSize: 24,
		color: '#2c0f66',
	},
	userDescription: {
		alignItems: 'center',
		marginBottom: 40,
		paddingRight: 35,
		paddingLeft: 35,
	},
	userDescriptionText: {
		fontSize: 12,
	},
	userInfo: {
		flex: 1,
		flexDirection: 'row',
	},
	userInfoText: {
		fontSize: 12,
		marginBottom: 40
	},
	columnOne: {
		flex: 1,
		paddingLeft: 70,
	},
	columnTwo: {
		flex: 1,
		paddingLeft: 70,
	},
})