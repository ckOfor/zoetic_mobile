import { BottomTabNavigatorConfig } from "react-navigation"

/**
 * The default stack navigator config for this app.
 */
export const DEFAULT_BOTTOM_NAVIGATION: BottomTabNavigatorConfig = {
  defaultNavigationOptions: ({ navigation, screenProps }) => ({
    
  }),
  tabBarOptions: {
    activeTintColor: '#3a203b',
    inactiveTintColor: '#566176',
    style: {
      backgroundColor: '#fff',
      borderColor: 'red'
    },
    showLabel: false,
  },
}
