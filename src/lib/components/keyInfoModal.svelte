<script>
    import { createEventDispatcher } from 'svelte'

    let { open, data, key } = $props()
    const dispatch = createEventDispatcher()
</script>

{#if open}
<div id="key-info" tabindex="-1" class="bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full" onclick={() => dispatch('close')}>
    <div class="relative p-4 max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow flex flex-row">
            <div class="border-slate-900 border-r p-8">
                <span class="font{data.model} text-5xl my-1">{key}</span>
            </div>
            <div>
                <div class="flex flex-row flex-grow p-4 border-slate-900 border-b">
                    <h3 class="text-xl font-semibold">
                        {data.keymap[key].description}
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-4 w-8 h-8 ms-auto inline-flex justify-center items-center" onclick={() => dispatch('close')}>
                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                
                <div class="p-4">
                    <p class="keymap{data.model}">
                        {data.keymap[key].keys.join("")}
                    </p>
                    <button class="mt-4 bg-slate-300 px-2 rounded-md" onclick={() => dispatch('close')}>Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
{/if}