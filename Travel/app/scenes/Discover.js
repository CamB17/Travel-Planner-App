import React, { Component } from 'react'
import {
	View,
	Text,
	Image,
	ListView,
	StyleSheet
} from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusbarBackground from '../components/StatusbarBackground'
import ListItem from '../components/ListItem'

export default class Discover extends Component {
	constructor(props) {
		super(props)

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		this._renderRow = this._renderRow.bind(this)

		this.state = {
			dataSource: ds.cloneWithRows(['row 1', 'row 2']),
		}
	}

	_renderRow(rowData: string, rowID: number) {
		<Text>
			{rowdata.name}
		</Text>
	}

	render () {
		return {
			<ViewContainer>
				<StatusbarBackground />
					<Text>
						Discover View
					</Text>
						{/* <ListView
						dataSource={this.state.dataSource}
						renderRow={this._renderRow}
						/> */}
			</ViewContainer>
		)
	}
} 

const styles = StyleSheet.create({

})