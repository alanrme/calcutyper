export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/991ex.ttf","fonts/CASIO ClassWiz CW01.ttf","fonts/CASIO ClassWiz.ttf","fonts/CASIO MS01.ttf","fonts/ES03.TTF","fonts/ES04.TTF"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".TTF":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.CSDNL9Yp.js","app":"_app/immutable/entry/app.CErzlHZr.js","imports":["_app/immutable/entry/start.CSDNL9Yp.js","_app/immutable/chunks/entry.BD-RJ1W3.js","_app/immutable/chunks/runtime.DAMlabRT.js","_app/immutable/chunks/index-client.CjrqaNeO.js","_app/immutable/entry/app.CErzlHZr.js","_app/immutable/chunks/runtime.DAMlabRT.js","_app/immutable/chunks/render.LTSonPbf.js","_app/immutable/chunks/disclose-version.Cq4difC-.js","_app/immutable/chunks/index-client.CjrqaNeO.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[model]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"model","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
