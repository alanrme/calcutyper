import * as server from '../entries/pages/_model_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_model_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[model]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.B1nCRluq.js","_app/immutable/chunks/disclose-version.Cq4difC-.js","_app/immutable/chunks/runtime.DAMlabRT.js","_app/immutable/chunks/render.LTSonPbf.js"];
export const stylesheets = [];
export const fonts = [];
