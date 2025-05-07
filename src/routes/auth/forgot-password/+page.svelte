<script lang="ts">
import { forgotPassword } from '$lib/auth/sanctum';
import Input from '$lib/shadcn/components/ui/input/input.svelte';
import Button from '$lib/shadcn/components/ui/button/button.svelte';

let email = '';
let message = '';
let error = '';
let loading = false;

async function forgotPasswordHandler() {
  loading = true;
  error = '';
  message = '';
  try {
    await forgotPassword(email);
    message = 'Un email de réinitialisation a été envoyé.';
  } catch (e) {
    error = e instanceof Error ? e.message : 'Erreur lors de la demande de réinitialisation.';
  } finally {
    loading = false;
  }
}
</script>

<div class="flex flex-col items-center justify-center min-h-screen gap-4">
  <h1 class="text-2xl font-bold">Mot de passe oublié</h1>
  <form class="flex flex-col gap-2 w-80" on:submit|preventDefault={forgotPasswordHandler}>
    <Input type="email" placeholder="Email" bind:value={email} required />
    {#if error}
      <div class="text-red-500">{error}</div>
    {/if}
    {#if message}
      <div class="text-green-600">{message}</div>
    {/if}
    <Button type="submit" variant="default" disabled={loading}>
      {#if loading}Envoi...{:else}Envoyer{/if}
    </Button>
    <a href="/auth/login" class="text-sm text-blue-600 hover:underline">Retour à la connexion</a>
  </form>
</div>
