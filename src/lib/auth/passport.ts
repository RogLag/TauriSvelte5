// OAuth2 Authorization Code Flow (Laravel Passport Socialite, etc.)
// Redirige l'utilisateur vers le provider OAuth (Google, GitHub, etc.)
export function startOAuth(provider: string) {
  window.location.href = `${PUBLIC_BACKEND_URL}/oauth/${provider}`;
}

// À appeler sur la page de callback après redirection du provider
export async function handleOAuthCallback(): Promise<{ token: string }> {
  // On suppose que le backend redirige avec un code ou un token dans l'URL
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const state = params.get('state');
  // Si le backend renvoie directement un token dans l'URL
  const token = params.get('token');
  if (token) {
    localStorage.setItem('auth_token', token);
    return { token };
  }
  // Sinon, échange le code contre un token
  if (code) {
    const response = await axios.post(
      PUBLIC_BACKEND_URL + '/oauth/token',
      {
        grant_type: 'authorization_code',
        client_id: import.meta.env.PUBLIC_PASSPORT_CLIENT_ID,
        client_secret: import.meta.env.PUBLIC_PASSPORT_CLIENT_SECRET,
        redirect_uri: window.location.origin + '/auth/callback',
        code,
        state
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      }
    );
    if (response.status === 200 && response.data.access_token) {
      localStorage.setItem('auth_token', response.data.access_token);
      return { token: response.data.access_token };
    } else {
      throw new Error(response.data.error_description || 'Échec de l’authentification OAuth');
    }
  }
  throw new Error('Aucun code/token OAuth trouvé dans l’URL');
}
import axios from 'axios';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

// Laravel Passport: JWT flow (token = access_token)
export async function loginUser(email: string, password: string): Promise<{ token: string }> {
  const response = await axios.post(
    PUBLIC_BACKEND_URL + '/oauth/token',
    {
      grant_type: 'password',
      client_id: import.meta.env.PUBLIC_PASSPORT_CLIENT_ID,
      client_secret: import.meta.env.PUBLIC_PASSPORT_CLIENT_SECRET,
      username: email,
      password: password,
      scope: ''
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
  );
  if (response.status === 200 && response.data.access_token) {
    return { token: response.data.access_token };
  } else {
    throw new Error(response.data.error_description || 'Échec de la connexion');
  }
}

export async function registerUser(username: string, email: string, password: string, password_confirmation: string): Promise<void> {
  await axios.post(
    PUBLIC_BACKEND_URL + '/api/register',
    { username, email, password, password_confirmation },
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
