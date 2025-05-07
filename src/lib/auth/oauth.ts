import axios from 'axios';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

// Pour l'exemple, on simule un flow OAuth2 classique (redirection, etc.)
export async function loginUser(): Promise<void> {
  window.location.href = PUBLIC_BACKEND_URL + '/oauth/redirect';
}

export async function handleOAuthCallback(): Promise<{ token: string }> {
  // À adapter selon le backend, ici on suppose que le backend redirige avec un code ou token dans l'URL
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');
  if (token) {
    localStorage.setItem('auth_token', token);
    return { token };
  } else {
    throw new Error('Token OAuth manquant');
  }
}

export function logoutUser() {
  localStorage.removeItem('auth_token');
}
