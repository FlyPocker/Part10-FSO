import { StyleSheet, View } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import Pressable from '../Pressable';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.repItemBackground,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  rating: {
    backgroundColor: theme.colors.primary,
    borderRadius: 15,
    minWidth: 30,
    paddingHorizontal: 8,
    paddingVertical: 4,
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },
  action: {
    padding: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
});

const formatDate = (createdAt) => {
  const date = new Date(createdAt);
  if (Number.isNaN(date.getTime())) {
    return 'Unknown date';
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return `${String(date.getDate()).padStart(2, '0')} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;
};

const ReviewItem = ({ review, onViewRepository, onDelete }) => (
  <View testID="ReviewItem" style={styles.container}>
    <View style={styles.header}>
      <Text fontWeight="bold">
        {review.user?.username || review.repository?.fullName}
      </Text>
      <Text color="textSecondary">{formatDate(review.createdAt)}</Text>
    </View>
    <Text>{review.text}</Text>
    <Text
      color="textWhite"
      fontWeight="bold"
      style={styles.rating}
    >
      {review.rating}
    </Text>
    {(onViewRepository || onDelete) && (
      <View style={styles.actions}>
        {onViewRepository && (
          <Pressable onPress={onViewRepository}>
            <View style={styles.action}>
              <Text color="textWhite">View repository</Text>
            </View>
          </Pressable>
        )}
        {onDelete && (
          <Pressable onPress={onDelete}>
            <View style={styles.action}>
              <Text color="textWhite">Delete review</Text>
            </View>
          </Pressable>
        )}
      </View>
    )}
  </View>
);

export default ReviewItem;
