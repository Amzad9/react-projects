import { defineStore, acceptHMRUpdate } from "pinia";
import { onMounted, ref, watchEffect } from "vue";

export const useMenuStore = defineStore("useMenuStore", () => {
  const details = ref([]);
  const name = ref("");
  const sku = ref("");
  const price = ref(Number);
  const calories = ref(Number);

  const categoryListInfo = () => {
    fetch(`http://localhost:8080/api/menu/list`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") || "",
      },
    })
      .then((res) => res.json())
      .then((data) => (details.value = data.payload))
      .catch((err) => (error.value = err));
  };

  const addMenu = () => {
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") || "",
      },
      body: JSON.stringify({
        name: name.value,
        sku: sku.value,
        price: price.value,
        calories: calories.value,
      }),
    };

    fetch("http://localhost:8080/api/menu/add", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  watchEffect(() => {
    console.log(details.value);
    //branchListInfo();
  });
  onMounted(() => {
    categoryListInfo();
  });
  return {
    name,
    sku,
    price,
    calories,
    details,
    addMenu,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMenuStore, import.meta.hot));
}
