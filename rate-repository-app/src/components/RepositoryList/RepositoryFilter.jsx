import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';
import TextInput from '../TextInput';

const Item = Picker.Item;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: 'white',
  },
});

export function RepositoryFilter({
  order,
  onOrderChange,
  searchKeyword,
  onSearchKeywordChange,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        testID="repository-search"
        placeholder="Search repositories"
        value={searchKeyword}
        onChangeText={onSearchKeywordChange}
      />
      <Picker
        testID="repository-order-picker"
        selectedValue={order}
        onValueChange={onOrderChange}
        accessibilityLabel="Repository order"
      >
        <Item label="Latest repositories" value="latest" />
        <Item label="Highest rated repositories" value="highest" />
        <Item label="Lowest rated repositories" value="lowest" />
      </Picker>
    </View>
  );
}

export default RepositoryFilter;