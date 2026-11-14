import { View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Pressable from '../Pressable';
import Text from '../Text';
import TextInput from '../TextInput';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value,
    )
    .typeError('Rating must be a number')
    .min(0, 'Rating must be at least 0')
    .max(100, 'Rating must be at most 100')
    .required('Rating is required'),
  text: yup.string(),
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

const CreateReviewContainer = ({ onSubmit, error }) => {
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
      {error && <Text color="textRed">Unable to create the review. Please check the repository details and try again.</Text>}
      {renderField('ownerName', 'Repository owner name')}
      {renderField('repositoryName', 'Repository name')}
      {renderField('rating', 'Rating', {
        keyboardType: 'numeric',
      })}
      {renderField('text', 'Review', {
        multiline: true,
        style: { height: 100, textAlignVertical: 'top' },
      })}
      <Pressable onPress={formik.handleSubmit} backgroundColor="primary">
        <View style={styles.button}>
          <Text color="textWhite">Create a review</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CreateReviewContainer;
