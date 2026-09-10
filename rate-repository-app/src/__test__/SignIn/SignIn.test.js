import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignIn/SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();

      await render(<SignInContainer onSubmit={onSubmit} />);
      await fireEvent.changeText(screen.getByPlaceholderText('Username'), 'myusername');
      await fireEvent.changeText(screen.getByPlaceholderText('Password'), 'mypassword');
      await fireEvent.press(screen.getByText('Sign In'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'myusername',
          password: 'mypassword',
        });
      });
    });
  });
});