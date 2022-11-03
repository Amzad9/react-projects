import { defineStore } from "pinia";
import { ref, computed } from "vue";

//object syntex
// export const counter = defineStore('counter',{
//     state: () => ({
//         count: 0
//     }),
//     getters:{
//         double(state) {
//            return state.count * 3
//         }
//     },
//     actions: {
//         increment(){
//             this.count++
//         }
//     }

// })

//function Syntex

export const counter = defineStore(
  "counter",
  () => {
    const count = ref(0);
    const double = computed(() => count.value * 2);
    const increment = () => {
      count.value++;
    };
    return {
      count,
      double,
      increment,
    };
  },
  {
    persist: true,
  }
);

//https://github.com/prazdevs/pinia-plugin-persistedstate
