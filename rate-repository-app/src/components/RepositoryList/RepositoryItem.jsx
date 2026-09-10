import { View, StyleSheet, Image } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import Pressable from '../Pressable';
import * as Linking from 'expo-linking';

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
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});

const DisplayStat = ({ value }) => {
  const displayValue = value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value.toString();
  return <Text fontWeight="bold">{displayValue}</Text>;
}

const RepostoryItem = ({ repository, showGitButton }) => {
  return (
    <View testID="RepositoryItem" style={styles.container}>
        <View style={styles.topContainer}>
            <View style={styles.avatarContainer}>
                <Image
                  style={styles.avatar}
                  source={{ uri: repository.ownerAvatarUrl }}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text fontWeight="bold" fontSize="subheading">{repository.fullName}</Text>
                <Text color="textSecondary">{repository.description}</Text>
                <View style={styles.languageTag}>
                  <Text color="textWhite" fontWeight="bold">{repository.language}</Text>
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
        {showGitButton && (
          <Pressable onPress={() => {Linking.openURL(repository.url)}}>
            <View style={{ padding: 12, backgroundColor: theme.colors.primary, borderRadius: 4, marginTop: 10 }}>
              <Text color="textWhite" fontWeight="bold">Open in GitHub</Text>
            </View>
          </Pressable>
        )}
      </View>
  );
}

export default RepostoryItem;