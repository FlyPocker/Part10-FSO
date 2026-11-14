import { useNavigate } from 'react-router-native';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import SignUpContainer from './SignUpContainer';
import { useState } from 'react';

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async ({ username, password }) => {
    setError(null);
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      setError(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} error={error} />;
};

export default SignUp;
