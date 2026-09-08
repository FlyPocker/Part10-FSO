import { StyleSheet, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-native';
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
  const navigate = useNavigate();
  return( 
  <AppBarTab>
    <ScrollView horizontal>{
    <>
      <Pressable onPress={() => navigate("/")} backgroundColor="appBar">
          <Text color="textWhite" style={styles.buttonText}>Repositories</Text>
      </Pressable>
      <Pressable onPress={() => navigate("/signin")} backgroundColor="appBar">
          <Text color="textWhite" style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </>
    }</ScrollView>
  </AppBarTab>
  );
};

export default AppBar;