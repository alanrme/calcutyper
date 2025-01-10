<script lang="ts">
	let { data } = $props();
    let display = $state();
    
    let type = (key) => {
        display += key;
    }
</script>

<div class="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 flex" id="ui-container">
    <div class="border-black border-b sm:border-b-0 sm:border-r p-2 row-span-1 flex flex-col">
        <textarea class="font{data.model} display{data.model}" id="calc-display" bind:value={display}></textarea>
        <div class="grid grid-flow-row grid-cols-[repeat(auto-fill,5rem)] overflow-y-auto">
            {#each Object.keys(data.keymap) as [key]}
                <div class="rounded-md border border-black m-2 p-2 flex flex-col justify-center items-center" onclick={() => type(key)}>
                    <span class="font{data.model} text-2xl my-1">{key}</span>
                    <button class="bg-slate-300 px-2 rounded-md">Info</button>
                    <!--{val.description} <span class="keymap{data.model}">{val.keys.join("")}</span>-->
                </div>
            {/each}
        </div>
    </div>
    <div class="p-2 row-span-1 overflow-y-auto">
        {#each Object.entries(data.keymap) as [key,val]}
            <div>
                <span class="keymap{data.model}">{val.keys.join("")}</span>
            </div>
        {/each}
    </div>
</div>

<style>
    :global(#page-container) {
        height: 100vh;
        width: 100vw;
    }
    #ui-container {
        height: 100%;
    }
    @font-face {
        font-family: "keymap-991ex";
        src: url('/fonts/CASIO ClassWiz.ttf');
    }
    @font-face {
        font-family: "font-991ex";
        src: url('/fonts/991ex.ttf');
    }
    .keymap991ex {
        font-family: keymap-991ex;
    }
    .font991ex {
        font-family: font-991ex;
    }
    .display991ex {
        background-color: #c1dbab;
        color: #000;
    }
</style>