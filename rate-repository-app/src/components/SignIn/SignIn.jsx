import { useNavigate } from 'react-router-native';
import useSignIn from '../../hooks/useSignIn';
import SignInContainer from './SignInContainer';
import { useState } from 'react';


const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async ({ username, password }) => {
    setError(null);
    try {
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      setError(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} error={error} />;
};

export default SignIn;