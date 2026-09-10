import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { useMutation } from '@apollo/client/react';
import { useNavigate } from 'react-router-native';
import useMe from '../../hooks/useMe';
import ReviewItem from './ReviewItem';
import Text from '../Text';
import theme from '../../theme';
import { DELETE_REVIEW } from '../../graphql/mutations';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.appBackground,
  },
});

const ReviewList = () => {
  const navigate = useNavigate();
  const { user, loading, error, refetch } = useMe({ includeReviews: true });
  const [deleteReview] = useMutation(DELETE_REVIEW);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error || !user) {
    return <Text>Reviews could not be loaded.</Text>;
  }

  const reviews = user.reviews.edges.map(({ node }) => node);

  const confirmDelete = (review) => {
    Alert.alert(
      'Delete review',
      `Are you sure you want to delete your review of ${review.repository.fullName}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            await deleteReview({ variables: { id: review.id } });
            await refetch();
          },
        },
      ],
    );
  };

  return (
    <FlatList
      data={reviews}
      keyExtractor={({ id: reviewId }) => reviewId}
      renderItem={({ item }) => (
        <ReviewItem
          review={item}
          onViewRepository={() => navigate(`/repository/${item.repository.id}`)}
          onDelete={() => confirmDelete(item)}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default ReviewList;