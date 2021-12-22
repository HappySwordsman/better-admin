import { h } from "vue";
import { NIcon } from "naive-ui";

export default function (icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
