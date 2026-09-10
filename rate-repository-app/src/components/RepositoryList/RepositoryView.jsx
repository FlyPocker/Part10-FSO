import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import useRepository from '../../hooks/useRepository';
import Text from '../Text';
import { useParams } from 'react-router-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.appBackground,
  },
});

const RepositoryView = () => {
  const { id } = useParams();
  const { repository, loading, error, fetchMore } = useRepository(id);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error || !repository) {
    return <Text>Repository could not be found.</Text>;
  }

  const reviews = repository.reviews.edges.map(({ node }) => node);

  return (
    <FlatList
      data={reviews}
      keyExtractor={({ id: reviewId }) => reviewId}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={
        <RepositoryItem repository={repository} showGitButton={true} />
      }
    />
  );
};

export default RepositoryView;