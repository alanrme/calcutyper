<script>
	import '../app.css';
	let { children } = $props();
    import { base } from '$app/paths';
</script>

<nav class="bg-slate-300 fixed w-full top-0 left-0">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<a href="{base}/" class="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
						<a href="{base}/991ex" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-slate-700 hover:text-white">fx-991EX</a>
						<!--
						<a href="{base}/991esp" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-slate-700 hover:text-white">fx-991ES PLUS</a>
						<a href="{base}/991ms" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-slate-700 hover:text-white">fx-991MS</a>
						-->
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
	
<div class="section pt-16" id="page-container">
	{@render children()}
</div>