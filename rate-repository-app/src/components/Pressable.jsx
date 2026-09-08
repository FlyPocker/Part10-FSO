import { Pressable as NativePressable, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  colorAppBar: {
    backgroundColor: theme.colors.AppBarBackground,
  }
});

const Pressable = ({ backgroundColor, ...props }) => {
    const pressableStyle = [
    backgroundColor === 'appBar' && styles.colorAppBar,
    ];

    return <NativePressable style={pressableStyle} {...props} />;
};

export default Pressable;