<script>
  import Greet from "../lib/Greet.svelte";
  import { goto } from "$app/navigation";
  import Button from "$lib/shadcn/components/ui/button/button.svelte";
</script>

<div class="flex flex-col items-center justify-center h-screen">
  <Greet />
  <Button
    variant="default"
    class="mt-4"
    onclick={() => {
      goto("/auth/login");
    }}
  >Se connecter</Button>
</div>
