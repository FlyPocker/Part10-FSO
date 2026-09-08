import { Pressable as NativePressable, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  colorAppBar: {
    backgroundColor: theme.colors.primary,
  }
});

const Pressable = ({ color, ...props }) => {
    const pressableStyle = [
    color === 'appBar' && styles.colorAppBar,
    ];

    return <NativePressable style={pressableStyle} {...props} />;
};

export default Pressable;