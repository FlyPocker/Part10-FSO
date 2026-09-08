import { StyleSheet } from 'react-native';
import Pressable from './Pressable';
import Text from './Text';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "bold",
    padding: 16,
  },
});

const AppBar = () => {
  return( 
  <AppBarTab>
    <Pressable backgroundColor="appBar">
        <Text color="textAppBar" style={styles.buttonText}>Repositories</Text>
    </Pressable>
  </AppBarTab>
  );
};

export default AppBar;