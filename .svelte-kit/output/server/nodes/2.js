

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B1cw_vvs.js","_app/immutable/chunks/disclose-version.Cq4difC-.js","_app/immutable/chunks/runtime.DAMlabRT.js","_app/immutable/chunks/legacy.CdEy_Gv2.js"];
export const stylesheets = [];
export const fonts = [];
