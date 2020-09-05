// react
import React from "react"

// react-native
import {
	View, ViewStyle, StatusBar, Platform
} from "react-native";

// third-party
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";

// redux
import { ApplicationState } from "../../redux";

// components

// styles
import { colors } from "../../theme";

interface DispatchProps {
	
}

interface StateProps {
	
}

interface MyFormValues {
	searchKey: string
}

interface ContactUsScreenProps extends NavigationScreenProps {}

type Props = DispatchProps & StateProps & ContactUsScreenProps

const ROOT: ViewStyle = {
	// height: Layout.window.height
};

const Landing = (props: Props) => {
	
	return (
		<View
			style={ROOT}
		>
			{
				Platform.OS === "ios"
					? <StatusBar barStyle="light-content" />
					: <StatusBar barStyle={"light-content"} translucent backgroundColor={colors.companyPurple} />
			}
		
		</View>
	)

}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  
});

let mapStateToProps: (state: ApplicationState) => StateProps;
mapStateToProps = (state: ApplicationState): StateProps => ({
  
});

export const LandingScreen = connect<StateProps>(
	// @ts-ignore
	mapStateToProps,
	mapDispatchToProps
)(Landing);
