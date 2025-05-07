<script lang="ts">
  import { forgotPassword } from "$lib/auth/sanctum";
  import Input from "$lib/shadcn/components/ui/input/input.svelte";
  import Button from "$lib/shadcn/components/ui/button/button.svelte";

  let email = "";
  let message = "";
  let error = "";
  let loading = false;

  async function forgotPasswordHandler() {
    loading = true;
    error = "";
    message = "";
    try {
      await forgotPassword(email);
      message = "Un email de réinitialisation a été envoyé.";
    } catch (e) {
      error =
        e instanceof Error
          ? e.message
          : "Erreur lors de la demande de réinitialisation.";
    } finally {
      loading = false;
    }
  }
</script>

<div
  class="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center max-w-md w-full"
>
  <h1 class="text-3xl font-bold mb-2 text-primary">Mot de passe oublié</h1>
  <form
    class="flex flex-col gap-3 w-80"
    on:submit|preventDefault={forgotPasswordHandler}
  >
    <Input type="email" placeholder="Email" bind:value={email} required />
    {#if error}
      <div class="text-red-500 text-sm">{error}</div>
    {/if}
    {#if message}
      <div class="text-green-600 text-sm">{message}</div>
    {/if}
    <Button
      type="submit"
      variant="default"
      class="w-full mt-2"
      disabled={loading}
    >
      {#if loading}Envoi...{:else}Envoyer{/if}
    </Button>
    <div class="flex justify-between mt-2 w-full">
      <Button
        variant="link"
        href="/auth/login"
        class="text-xs hover:underline px-0">Retour à la connexion</Button
      >
    </div>
  </form>
</div>
