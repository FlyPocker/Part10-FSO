import { View as NativeView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    display: 'flex',
    flexDirection: 'row',
  }
});

const AppBarTab = ({ style ,...props}) => {
    const appBarStyle = [
        styles.container,
        style,
    ];
  return <NativeView style={appBarStyle} {...props}/>;
};

export default AppBarTab;