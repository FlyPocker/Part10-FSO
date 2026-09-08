import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  colorError: {
    borderColor: theme.colors.textRed,
  }
});

const TextInput = ({ color, style, ...props }) => {
  const textInputStyle = [
    styles.input,
    color === 'error' && styles.colorError,
    style,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;