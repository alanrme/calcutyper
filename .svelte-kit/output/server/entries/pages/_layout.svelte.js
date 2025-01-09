import { c as pop, p as push } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<nav class="bg-slate-300"><div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"><div class="relative flex h-16 items-center justify-between"><div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"><div class="hidden sm:ml-6 sm:block"><div class="flex space-x-4"><a href="/" class="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</a> <a href="/991ex" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-slate-700 hover:text-white">fx-991EX</a> <a href="/991esp" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-slate-700 hover:text-white">fx-991ES PLUS</a> <a href="/991ms" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-slate-700 hover:text-white">fx-991MS</a></div></div></div></div></div></nav> `;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
