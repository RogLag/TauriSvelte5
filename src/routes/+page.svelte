<script>
  import { goto } from "$app/navigation";
  import Button from "$lib/shadcn/components/ui/button/button.svelte";
</script>

<div
  class="bg-white/100 backdrop-blur-xl rounded-2xl shadow-xl p-10 flex flex-col items-center max-w-md w-full"
>
  <img src="/favicon.png" alt="Logo" class="w-16 mb-4" />
  <h1 class="text-3xl font-bold mb-2 text-center text-primary">
    Bienvenue sur la template Tauri + Svelte 5
  </h1>
  <p class="text-gray-600 mb-6 text-center">
    Démarrez rapidement une application moderne avec authentification.<br
    />Testez le système d'authentification :
  </p>
  <div class="flex gap-4 w-full">
    <Button variant="default" class="flex-1" onclick={() => goto("/auth/login")}
      >Se connecter</Button
    >
    <Button
      variant="secondary"
      class="flex-1"
      onclick={() => goto("/auth/register")}>Créer un compte</Button
    >
  </div>
  <div class="mt-8 text-xs text-gray-500 text-center">
    <span
      >Consultez le <b>README</b> pour configurer l'authentification (exemple avec
      Sanctum).</span
    >
  </div>
  <Button
    variant="outline"
    onclick={() => goto("/tauri")}
    class="mt-4">API Tauri</Button
  >
</div>
