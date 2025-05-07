import axios from 'axios';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

export async function loginUser(email: string, password: string): Promise<{ token: string }> {
  const response = await axios.post(
    PUBLIC_BACKEND_URL + '/api/login',
    { email, password },
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
  );
  if (response.status === 200 && response.data.token) {
    return { token: response.data.token };
  } else {
    throw new Error(response.data.message || 'Échec de la connexion');
  }
}

export async function registerUser(name: string, email: string, password: string, password_confirmation: string): Promise<void> {
  await axios.post(
    PUBLIC_BACKEND_URL + '/api/register',
    { name, email, password, password_confirmation },
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
  );
}

export async function forgotPassword(email: string): Promise<void> {
  await axios.post(
    PUBLIC_BACKEND_URL + '/api/forgot-password',
    { email },
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
  );
}

export async function resetPassword(token: string, password: string, password_confirmation: string): Promise<void> {
  await axios.post(
    PUBLIC_BACKEND_URL + '/api/reset-password',
    { token, password, password_confirmation },
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
  );
}

export async function getUser(token: string): Promise<any> {
  const response = await axios.get(PUBLIC_BACKEND_URL + '/api/user', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    }
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error('Non autorisé');
  }
}

export function logoutUser() {
  localStorage.removeItem('auth_token');
}
