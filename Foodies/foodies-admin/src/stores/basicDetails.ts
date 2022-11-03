import { defineStore, acceptHMRUpdate } from "pinia";
import { ref, watchEffect, onMounted } from "vue";
export const basicInfoStore = defineStore("BasicStore", () => {
  const basicDetails = ref([]);
  const error = ref(null);

  const getBasicInfo = () => {
    fetch("http://localhost:8080/api/admin/getBasicinfo", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") || "",
      },
    })
      .then((res) => res.json())
      .then((data) => (basicDetails.value = data))
      .catch((err) => (error.value = err));
  };

  watchEffect(() => {
    console.log("basicDetails dfdsffsfdsfdsf");
  });
  onMounted(() => {
    getBasicInfo();
  });

  return { basicDetails };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(basicInfoStore, import.meta.hot));
}
