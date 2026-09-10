import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList/RepositoryList';
import RepositoryView from './RepositoryList/RepositoryView';
import AppBar from './AppBar';
import SignIn from './SignIn/SignIn';
import CreateReview from './CreateReview/CreateReview';
import SignUp from './SignUp/SignUp';
import ReviewList from './RepositoryList/ReviewList';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBackground,
    flex: 1,
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create-review" element={<CreateReview />} />
        <Route path="/my-reviews" element={<ReviewList />} />
        <Route path="/repository/:id" element={<RepositoryView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;