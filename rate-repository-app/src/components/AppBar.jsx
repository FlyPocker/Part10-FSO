import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Pressable from './Pressable';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    display: 'flex',
  },
  button: {
    flexGrow: 1,
  },
    buttonText: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    padding: 16,
  },
});

const AppBar = () => {
  return( 
  <View style={styles.container}>
    <Pressable style={styles.button} color="appBar">
        <Text style={styles.buttonText}>Repositories</Text>
    </Pressable>
  </View>
  );
};

export default AppBar;