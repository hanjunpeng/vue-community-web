/**
 * @Desc 注入数据
 */

import Dict from "../config/dict";
import { Vue } from "vue-property-decorator";
Vue.mixin({
  data() {
    return {
      Dict: Dict
    };
  }
});
