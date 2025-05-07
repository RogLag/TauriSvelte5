<script lang="ts">
import { resetPassword } from '$lib/auth/sanctum';
import Input from '$lib/shadcn/components/ui/input/input.svelte';
import Button from '$lib/shadcn/components/ui/button/button.svelte';
import { page } from '$app/state';
import { goto } from '$app/navigation';

let password = '';
let password_confirmation = '';
let error = '';
let message = '';
let loading = false;

let token = '';

$: token = page.url.searchParams.get('token') || '';

async function resetPasswordHandler() {
  loading = true;
  error = '';
  message = '';
  try {
    await resetPassword(token, password, password_confirmation);
    message = 'Mot de passe réinitialisé. Vous pouvez vous connecter.';
    setTimeout(() => goto('/auth/login'), 2000);
  } catch (e) {
    error = e instanceof Error ? e.message : 'Erreur lors de la réinitialisation.';
  } finally {
    loading = false;
  }
}
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
  <div class="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center max-w-md w-full">
    <h1 class="text-3xl font-bold mb-2 text-primary">Réinitialiser le mot de passe</h1>
    <form class="flex flex-col gap-3 w-80" on:submit|preventDefault={resetPasswordHandler}>
      <Input type="password" placeholder="Nouveau mot de passe" bind:value={password} required />
      <Input type="password" placeholder="Confirmer le mot de passe" bind:value={password_confirmation} required />
      {#if error}
        <div class="text-red-500 text-sm">{error}</div>
      {/if}
      {#if message}
        <div class="text-green-600 text-sm">{message}</div>
      {/if}
      <Button type="submit" variant="default" class="w-full mt-2" disabled={loading}>
        {#if loading}Réinitialisation...{:else}Réinitialiser{/if}
      </Button>
      <div class="flex justify-between mt-2 w-full">
        <Button variant="link" href="/auth/login" class="text-xs hover:underline px-0">Retour à la connexion</Button>
      </div>
    </form>
  </div>
</div>
