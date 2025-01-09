import { keymaps } from '../data.js';

export function load({ params }) {
	const keymap = keymaps.find((keymap) => keymap.model === params.model);

	return keymap;
}