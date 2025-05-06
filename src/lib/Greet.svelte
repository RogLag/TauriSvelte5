<script>
  import { invoke } from '@tauri-apps/api/tauri'
  import Button from './shadcn/components/ui/button/button.svelte';
  import Input from './shadcn/components/ui/input/input.svelte';

  let name = $state('');
  let greetMsg = $state('');

  function greet() {
    greetMsg = name
  }
</script>

<div class="flex flex-col items-center justify-center h-screen gap-4">
  <Input id="greet-input" placeholder="Enter a name..." bind:value={name} />
  <Button variant="default" class="mt-4" onclick={greet}>Greet</Button>
  <p>{greetMsg}</p>
</div>