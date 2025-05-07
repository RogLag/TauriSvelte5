<script lang="ts">
import { registerUser } from '$lib/auth/sanctum';
import Input from '$lib/shadcn/components/ui/input/input.svelte';
import Button from '$lib/shadcn/components/ui/button/button.svelte';
import { goto } from '$app/navigation';

let username = '';
let email = '';
let password = '';
let password_confirmation = '';
let error = '';
let loading = false;

async function register() {
  loading = true;
  error = '';
  try {
    await registerUser(username, email, password, password_confirmation);
    goto('/auth/login');
  } catch (e) {
    error = e instanceof Error ? e.message : 'Erreur lors de l’inscription.';
  } finally {
    loading = false;
  }
}
</script>

<div class="flex flex-col items-center justify-center min-h-screen gap-4">
  <h1 class="text-2xl font-bold">Créer un compte</h1>
  <form class="flex flex-col gap-2 w-80" on:submit|preventDefault={register}>
    <Input type="text" placeholder="Prénom" bind:value={username} required />
    <Input type="email" placeholder="Email" bind:value={email} required />
    <Input type="password" placeholder="Mot de passe" bind:value={password} required />
    <Input type="password" placeholder="Confirmer le mot de passe" bind:value={password_confirmation} required />
    {#if error}
      <div class="text-red-500">{error}</div>
    {/if}
    <Button type="submit" variant="default" disabled={loading}>
      {#if loading}Inscription...{:else}Inscription{/if}
    </Button>
    <a href="/auth/login" class="text-sm text-blue-600 hover:underline">Déjà un compte ? Se connecter</a>
  </form>
</div>
