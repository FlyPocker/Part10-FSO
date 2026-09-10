import { FlatList, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import RepositoryItem from './RepositoryItem';
import theme from '../../theme';
import useRepositories from '../../hooks/useRepositories';
import useDebouncedValue from '../../hooks/useDebouncedValue';
import Pressable from '../Pressable';
import { useNavigate } from 'react-router-native';
import { RepositoryFilter } from './RepositoryFilter';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.appBackground,
  },
});

export const RepositoryListContainer = ({
  repositories,
  onEndReached,
  order = 'latest',
  onOrderChange = () => {},
  searchKeyword = '',
  onSearchKeywordChange = () => {},
}) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      renderItem={({ item}) => (
      <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
        <RepositoryItem repository={item} />
      </Pressable>
      )}
      ListHeaderComponent={
        <RepositoryFilter
          order={order}
          onOrderChange={onOrderChange}
          searchKeyword={searchKeyword}
          onSearchKeywordChange={onSearchKeywordChange}
        />
      }
    />
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [order, setOrder] = useState('latest');
  const [searchKeyword, setSearchKeyword] = useState('');
  const debouncedSearchKeyword = useDebouncedValue(searchKeyword, 500);

  const orderVariables = {
    latest: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
    highest: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
    lowest: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
  }[order];

  const { repositories, fetchMore } = useRepositories({
    first: 5,
    ...orderVariables,
    searchKeyword: debouncedSearchKeyword || undefined,
  });

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      onOrderChange={setOrder}
      searchKeyword={searchKeyword}
      onSearchKeywordChange={setSearchKeyword}
      onEndReached={() => {
        fetchMore();
      }}
    />
  );
};

export default RepositoryList;