<script>
	import '../app.css';
	let { children } = $props();
    import { base } from '$app/paths';

	import { keymaps } from './data.js';
	let models = {}
	keymaps.forEach((a) => { models[a.model] = a.name })
	console.log(keymaps,models)

	let shown = $state(false)
	let toggleMenu = () => {
		shown = !shown
	}
</script>

<nav class="bg-slate-300 fixed w-full top-0 left-0">
	<div class="container mx-auto flex flex-col md:flex-row">
		<div class="flex flex-row md:w-auto w-full">
			<a href="{base}/" class="p-4 rounded-m hover:bg-slate-700 hover:text-white">Home</a>
			<div class="md:hidden flex p-4 items-center justify-center rounded-m hover:bg-slate-700 hover:text-white" onclick={toggleMenu}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
					<path fill-rule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
				</svg>
			</div>
		</div>
		<div class="flex-col md:flex md:flex-row items-center justify-start md:space-x-1 pb-3 md:pb-0" class:hidden={!shown}>
            {#each Object.keys(models) as model}
				<a href="{base}/{model}" class="block p-4 rounded-m hover:bg-slate-700 hover:text-white">{models[model]}</a>
            {/each}
		</div>
	</div>
</nav>

	
<div class="section pt-16" id="page-container">
	{@render children()}
</div>