<script lang="ts">
import { loginUser } from '$lib/auth/sanctum';
import Input from '$lib/shadcn/components/ui/input/input.svelte';
import Button from '$lib/shadcn/components/ui/button/button.svelte';
import { goto } from '$app/navigation';

let email = '';
let password = '';
let error = '';
let loading = false;

async function login(event: Event) {
  event.preventDefault();
  loading = true;
  error = '';
  try {
    const { token } = await loginUser(email, password);
    localStorage.setItem('auth_token', token);
    goto('/profile');
  } catch (e) {
    error = e instanceof Error ? e.message : 'Erreur de connexion.';
    console.error('Erreur de connexion:', e);
  } finally {
    loading = false;
  }
}
</script>

<div class="flex flex-col items-center justify-center min-h-screen gap-4">
  <h1 class="text-2xl font-bold">Connexion</h1>
  <form class="flex flex-col gap-2 w-80" on:submit={login}>
    <Input type="email" placeholder="Email" bind:value={email} required />
    <Input type="password" placeholder="Mot de passe" bind:value={password} required />
    {#if error}
      <div class="text-red-500">{error}</div>
    {/if}
    <Button type="submit" variant="default" disabled={loading}>
      {#if loading}Connexion...{:else}Connexion{/if}
    </Button>
    <a href="/auth/forgot-password" class="text-sm text-blue-600 hover:underline">Mot de passe oublié ?</a>
    <a href="/auth/register" class="text-sm text-blue-600 hover:underline">Créer un compte</a>
  </form>
</div>
