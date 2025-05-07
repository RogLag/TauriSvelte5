<script lang="ts">
  import { registerUser } from "$lib/auth/sanctum";
  import Input from "$lib/shadcn/components/ui/input/input.svelte";
  import Button from "$lib/shadcn/components/ui/button/button.svelte";
  import { goto } from "$app/navigation";

  let username = "";
  let email = "";
  let password = "";
  let password_confirmation = "";
  let error = "";
  let loading = false;

  async function register() {
    loading = true;
    error = "";
    try {
      await registerUser(username, email, password, password_confirmation);
      goto("/auth/login");
    } catch (e) {
      error = e instanceof Error ? e.message : "Erreur lors de l’inscription.";
    } finally {
      loading = false;
    }
  }
</script>

<div
  class="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center max-w-md w-full"
>
  <h1 class="text-3xl font-bold mb-2 text-primary">Créer un compte</h1>
  <form class="flex flex-col gap-3 w-80" on:submit|preventDefault={register}>
    <Input type="text" placeholder="Prénom" bind:value={username} required />
    <Input type="email" placeholder="Email" bind:value={email} required />
    <Input
      type="password"
      placeholder="Mot de passe"
      bind:value={password}
      required
    />
    <Input
      type="password"
      placeholder="Confirmer le mot de passe"
      bind:value={password_confirmation}
      required
    />
    {#if error}
      <div class="text-red-500 text-sm">{error}</div>
    {/if}
    <Button
      type="submit"
      variant="default"
      class="w-full mt-2"
      disabled={loading}
    >
      {#if loading}Inscription...{:else}Inscription{/if}
    </Button>
    <div class="flex justify-between mt-2 w-full">
      <Button
        variant="link"
        href="/auth/login"
        class="text-xs hover:underline px-0"
        >Déjà un compte ? Se connecter</Button
      >
    </div>
  </form>
</div>
