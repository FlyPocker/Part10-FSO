import { Pressable as NativePressable, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  colorAppBar: {
    backgroundColor: theme.colors.appBarBackground,
  },
  colorPrimary: {
    backgroundColor: theme.colors.primary,
  },
});

const Pressable = ({ backgroundColor, ...props }) => {
    const pressableStyle = [
    backgroundColor === 'appBar' && styles.colorAppBar,
    backgroundColor === 'primary' && styles.colorPrimary,
    ];

    return <NativePressable style={pressableStyle} {...props} />;
};

export default Pressable;