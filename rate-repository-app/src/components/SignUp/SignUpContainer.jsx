import { View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Pressable from '../Pressable';
import Text from '../Text';
import TextInput from '../TextInput';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username must be at most 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password must be at most 50 characters')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Password confirmation is required'),
});

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
  },
  button: {
    padding: 12,
    backgroundColor: 'blue',
    borderRadius: 4,
  },
});

const SignUpContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const renderField = (name, placeholder, props = {}) => (
    <>
      <TextInput
        placeholder={placeholder}
        value={formik.values[name]}
        onChangeText={formik.handleChange(name)}
        onBlur={formik.handleBlur(name)}
        color={formik.touched[name] && formik.errors[name] ? 'error' : undefined}
        {...props}
      />
      {formik.touched[name] && formik.errors[name] && (
        <Text color="textRed">{formik.errors[name]}</Text>
      )}
    </>
  );

  return (
    <View style={styles.container}>
      {renderField('username', 'Username')}
      {renderField('password', 'Password', { secureTextEntry: true })}
      {renderField('passwordConfirmation', 'Password confirmation', {
        secureTextEntry: true,
      })}
      <Pressable onPress={formik.handleSubmit} backgroundColor="primary">
        <View style={styles.button}>
          <Text color="textWhite">Sign up</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SignUpContainer;
