import { View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Pressable from '../Pressable';
import Text from '../Text';
import TextInput from '../TextInput';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
  },
});

const SignInContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        color={formik.touched.username && formik.errors.username ? 'error' : undefined}
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text color="textRed">{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder="Password"
        secureTextEntry
        color={formik.touched.password && formik.errors.password ? 'error' : undefined}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text color="textRed">{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} backgroundColor="primary">
        <View style={{ padding: 12, backgroundColor: 'blue', borderRadius: 4 }}>
          <Text color="textWhite">Sign In</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SignInContainer;