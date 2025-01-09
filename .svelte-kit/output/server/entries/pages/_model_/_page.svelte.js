import { e as ensure_array_like, c as pop, p as push } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  console.log(data);
  const each_array = ensure_array_like(data.keymap);
  $$payload.out += `<input type="textarea"> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let key = each_array[$$index];
    $$payload.out += `<li>${escape_html(key)} - ${escape_html(key.description)}</li>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
