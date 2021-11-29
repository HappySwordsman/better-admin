import {
  // create naive ui
  create,
  // component
  NButton,
  NSpace,
  NGrid,
  NGridItem,
} from "naive-ui";
// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";

const naive = create({
  components: [NButton, NSpace, NGrid, NGridItem],
});

export default naive;
