import { StyleSheet, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client/react';
import Pressable from './Pressable';
import Text from './Text';
import AppBarTab from './AppBarTab';
import { GET_ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "bold",
    padding: 16,
  },
});

const AppBar = () => {
  const navigate = useNavigate();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { data } = useQuery(GET_ME);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return( 
  <AppBarTab>
    <ScrollView horizontal>{
    <>
      <Pressable onPress={() => navigate("/")} backgroundColor="appBar">
          <Text color="textWhite" style={styles.buttonText}>Repositories</Text>
      </Pressable>
      {data?.me ? (
        <>
          <Pressable onPress={() => navigate("/create-review")} backgroundColor="appBar">
              <Text color="textWhite" style={styles.buttonText}>Create a review</Text>
          </Pressable>
          <Pressable onPress={() => navigate("/my-reviews")} backgroundColor="appBar">
              <Text color="textWhite" style={styles.buttonText}>My reviews</Text>
          </Pressable>
          <Pressable onPress={signOut} backgroundColor="appBar">
              <Text color="textWhite" style={styles.buttonText}>Sign out</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Pressable onPress={() => navigate("/signin")} backgroundColor="appBar">
              <Text color="textWhite" style={styles.buttonText}>Sign in</Text>
          </Pressable>
          <Pressable onPress={() => navigate("/signup")} backgroundColor="appBar">
              <Text color="textWhite" style={styles.buttonText}>Sign up</Text>
          </Pressable>
        </>
      )}
    </>
    }</ScrollView>
  </AppBarTab>
  );
};

export default AppBar;