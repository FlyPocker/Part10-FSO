import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(
      `${this.namespace}:accessToken`,
    );
    return accessToken ? JSON.parse(accessToken) : null;
  }

  setAccessToken(accessToken) {
    // Store the access token in the storage
    return AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(accessToken),
    );

  }

  removeAccessToken() {
    // Remove the access token from the storage
    return AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;