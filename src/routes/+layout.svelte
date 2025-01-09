<script>
	import '../app.css';
	let { children } = $props();
</script>

<nav class="bg-slate-300">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<a href="/" class="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
						<a href="/991ex" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-slate-700 hover:text-white">fx-991EX</a>
						<a href="/991esp" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-slate-700 hover:text-white">fx-991ES PLUS</a>
						<a href="/991ms" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-slate-700 hover:text-white">fx-991MS</a>
					</div>
				</div>
			</div>
			<!--
			<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
				<button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
					<span class="absolute -inset-1.5"></span>
					<span class="sr-only">View notifications</span>
					<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
						<path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
					</svg>
				</button>
			</div>
			-->
		</div>
	</div>
</nav>
	
{@render children()}
	