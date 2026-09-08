import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    gap: 5,
    backgroundColor: theme.colors.repItemBackground,
  },
  topContainer: {
    flexDirection: 'row',
  },
  avatarContainer: {
    flexGrow: 0,
    padding: 5,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    gap: 5,
    padding: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
  },
  languageTag: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
  }
});

const DisplayStat = ({ value }) => {
  const displayValue = value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value.toString();
  return <Text fontWeight="bold">{displayValue}</Text>;
}

const RepostoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <View style={styles.avatarContainer}>
                <Text>Avatar</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text fontWeight="bold" fontSize="subheading">{repository.fullName}</Text>
                <Text color="textSecondary">{repository.description}</Text>
                <View style={styles.languageTag}>
                  <Text color="textAppBar" fontWeight="bold">{repository.language}</Text>
                </View>
            </View>
        </View>
        <View style={styles.statsContainer}>
            <View style={styles.statBox}>
                <DisplayStat value={repository.stargazersCount} />
                <Text>Stars</Text>
            </View>
            <View style={styles.statBox}>
                <DisplayStat value={repository.forksCount} />
                <Text>Forks</Text>
            </View>
            <View style={styles.statBox}>
                <DisplayStat value={repository.reviewCount} />
                <Text>Reviews</Text>
            </View>
            <View style={styles.statBox}>
                <DisplayStat value={repository.ratingAverage} />
                <Text>Rating</Text>
            </View>
        </View>
      </View>
  );
}

export default RepostoryItem;