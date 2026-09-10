import { useNavigate } from 'react-router-native';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import SignUpContainer from './SignUpContainer';

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    await signUp({ username, password });
    await signIn({ username, password });
    navigate('/');
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
