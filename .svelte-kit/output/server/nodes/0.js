

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CoTPerph.js","_app/immutable/chunks/disclose-version.Cq4difC-.js","_app/immutable/chunks/runtime.DAMlabRT.js"];
export const stylesheets = ["_app/immutable/assets/0.BYIxmFIP.css"];
export const fonts = [];
