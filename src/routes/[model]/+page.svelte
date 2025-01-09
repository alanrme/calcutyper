<script lang="ts">
	let { data } = $props();
</script>

<input class="font991ex" type="textarea">
{#each Object.entries(data.keymap) as [key,val]}
    <div><span class="font991ex">{key}</span> - {val.description} <span class="keymap991ex">{val.keys.join("")}</span></div>
{/each}

<style>
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
</style>