<script lang="ts">
    let { data } = $props();
    let display = $state("");
    
    let type = (key) => {
        display += key;
    }
    let clear = () => {
        display = display.substring(0, display.length-1)
    }
    
    let checkInput = () => {
        const key = display.slice(-1);
        if (!data.keymap[key]) {
            clear()
            if (data.keymap[key.toUpperCase()]) {
                display += key.toUpperCase()
            } else if (data.keymap[key.toLowerCase()]) {
                display += key.toLowerCase()
            } else {
                let newKey = Object.keys(data.alternatives).find(k => data.alternatives[k].includes(key))
                if (newKey)
                display += newKey
            }
        }
    }

    import KeyInfoModal from '../../lib/components/keyInfoModal.svelte'

    let keyInfoShown = $state(false)
    let currentKey = $state();
    let keyInfoToggle = () => {
        keyInfoShown = !keyInfoShown
    }
    let keyInfoClose = () => {
        keyInfoShown = false
    }
    let keyInfoOpen = (key) => {
        currentKey = key
        keyInfoShown = true
    }
</script>

<div class="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 flex" id="ui-container">
    <div class="border-slate-900 border-b sm:border-b-0 sm:border-r p-2 row-span-1 flex flex-col">
        <div class="flex flex-row gap-2">
            <textarea class="rounded-md font{data.model} display{data.model} flex-grow" id="calc-display" spellcheck="false" autocorrect="off" autocapitalize="off" bind:value={display} oninput={checkInput}></textarea>
            <button class="rounded-md bg-slate-900 text-white px-3" onclick={clear}>Del</button>
        </div>
        <div class="grid grid-flow-row grid-cols-[repeat(auto-fill,5rem)] overflow-y-auto">
            {#each Object.keys(data.keymap) as [key]}
            <div class="rounded-md border border-black m-2 p-2 flex flex-col justify-center items-center" onclick={() => type(key)}>
                <span class="font{data.model} text-2xl my-1">{key}</span>
                <button class="bg-slate-300 px-2 rounded-md" onclick={(e) => { e.stopPropagation(); keyInfoOpen(key) }}>Info</button>
                <!--{val.description} <span class="keymap{data.model}">{val.keys.join("")}</span>-->
            </div>
            {/each}
        </div>
    </div>
    <div class="p-2 row-span-1 overflow-y-auto">
        {#key display}
        {#each display.split("") as key}
        <div>
            {#if data.keymap[key]}
            <span class="keymap{data.model}">{data.keymap[key].keys.join("")}</span>
            {:else}
            <span class="">Symbol doesn't exist on {data.name}</span>
            {/if}
        </div>
        {/each}
        {/key}
    </div>
</div>

<KeyInfoModal open={keyInfoShown} on:close={keyInfoClose} data={data} key={currentKey}/>


<style>
    :global(#page-container) {
        height: 100dvh;
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
        font-family: "keymap-991esp";
        src: url('/fonts/ES03.TTF');
    }
    @font-face {
        font-family: "font-991ex";
        src: url('/fonts/991ex.ttf');
    }
    @font-face {
        font-family: "font-991esp";
        src: url('/fonts/991es-plus.ttf');
    }
    :global(.keymap991ex) {
        font-family: keymap-991ex;
    }
    :global(.keymap991esp) {
        font-family: keymap-991esp;
    }
    :global(.font991ex) {
        font-family: font-991ex;
    }
    :global(.font991esp) {
        font-family: font-991esp;
    }
    :global(.display991ex) {
        background-color: #c9cfab;
        color: #000;
    }
    :global(.display991esp) {
        background-color: #b1d492;
        color: #230b9c;
    }
</style>