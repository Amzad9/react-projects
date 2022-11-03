import { defineStore, acceptHMRUpdate } from "pinia";
import { onMounted, ref, watchEffect } from "vue";

export const useCategoryStore = defineStore("useCategoryStore", () => {
  const details = ref([]);
  const name = ref("");
  const description = ref("");

  const categoryListInfo = () => {
    fetch(`http://localhost:8080/api/category/list`, {
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

  const addCategory = () => {
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") || "",
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
      }),
    };

    fetch("http://localhost:8080/api/category/add", requestOptions)
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
    description,
    details,
    addCategory,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoryStore, import.meta.hot));
}
