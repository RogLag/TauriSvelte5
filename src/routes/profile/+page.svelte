<script lang="ts">
import { onMount } from 'svelte';
import { getUser, logoutUser } from '$lib/auth/sanctum';
import Button from '$lib/shadcn/components/ui/button/button.svelte';
import { goto } from '$app/navigation';

let user: any = null;
let error = '';
let loading = true;

function checkAuth() {
  const token = localStorage.getItem('auth_token');
  if (!token) {
    goto('/auth/login');
    return false;
  }
  return token;
}

onMount(async () => {
  const token = checkAuth();
  if (!token) return;
  try {
    user = await getUser(token);
  } catch (e) {
    error = 'Impossible de récupérer les informations utilisateur.';
    logoutUser();
    goto('/auth/login');
  } finally {
    loading = false;
  }
});

function logout() {
  logoutUser();
  goto('/auth/login');
}
</script>

<div class="flex flex-col items-center justify-center min-h-screen gap-4">
  {#if loading}
    <div>Chargement...</div>
  {:else if error}
    <div class="text-red-500">{error}</div>
  {:else if user}
    <h1 class="text-2xl font-bold mb-2">Profil</h1>
    <div class="mb-2">Email : <span class="font-mono">{user.email}</span></div>
    <div class="mb-2">Username : <span class="font-mono">{user.username}</span></div>
    <Button variant="outline" onclick={logout}>Se déconnecter</Button>
  {/if}
</div>
