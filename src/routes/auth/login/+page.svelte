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

<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
  <div class="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center max-w-md w-full">
    <h1 class="text-3xl font-bold mb-2 text-primary">Connexion</h1>
    <form class="flex flex-col gap-3 w-80" on:submit={login}>
      <Input type="email" placeholder="Email" bind:value={email} required />
      <Input type="password" placeholder="Mot de passe" bind:value={password} required />
      {#if error}
        <div class="text-red-500 text-sm">{error}</div>
      {/if}
      <Button type="submit" variant="default" class="w-full mt-2" disabled={loading}>
        {#if loading}Connexion...{:else}Connexion{/if}
      </Button>
      <div class="flex flex-col gap-1 mt-2 w-full">
        <div class="flex justify-between">
          <Button variant="link" href="/auth/forgot-password" class="text-xs hover:underline px-0">Mot de passe oublié ?</Button>
          <Button variant="link" href="/auth/register" class="text-xs hover:underline px-0">Créer un compte</Button>
        </div>
        <Button variant="ghost" href="/" class="text-xs text-gray-500 hover:underline text-center mt-2">← Retour à l'accueil</Button>
      </div>
    </form>
  </div>
</div>
