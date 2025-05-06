<script>
  import axios from 'axios';
  import Button from './shadcn/components/ui/button/button.svelte';
  import Input from './shadcn/components/ui/input/input.svelte';

  let name = $state('');
  let greetMsg = $state('');

  let fetching = $state({});

  // example of axios usage
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      fetching = response.data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  function greet() {
    greetMsg = name
  }
</script>

<div class="flex flex-col items-center justify-center h-screen gap-4">
  <Input id="greet-input" placeholder="Enter a name..." bind:value={name} />
  <Button variant="default" class="mt-4" onclick={greet}>Greet</Button>
  <p>{greetMsg}</p>
  <p>Fetching data: {JSON.stringify(fetching)}</p>
</div>