import { defineStore, acceptHMRUpdate } from "pinia";
import { onMounted, ref, watchEffect } from "vue";

export const useAdminListStore = defineStore("useAdminStore", () => {
  const details = ref([]);
  const name = ref("");
  const email = ref("");
  const contact = ref("");
  const dialCode = ref("");
  const type = ref("");
  const password = ref("");
  // const input = ref(null);
  const error = ref(null);

  const adminListInfo = () => {
    fetch(`http://localhost:8080/api/admin?limit=10&page=1&search=''`, {
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
  // const filterSearch = computed(() => {
  //   if (!input.value) {
  //     return news.value;
  //   } else {
  //     return news.value.filter(({ Title }) =>
  //       Title.toLowerCase().includes(input.value.toLowerCase())
  //     );
  //   }
  // });

  const addUser = () => {
    alert("Hi");
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") || "",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        contact: contact.value,
        dialCode: dialCode.value,
        type: type.value,
        password: password.value,
      }),
    };

    fetch("http://localhost:8080/api/admin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  watchEffect(() => {
    // console.log(details.value);
    adminListInfo();
  });
  onMounted(() => {
    adminListInfo();
  });
  return { name, email, contact, type, password, dialCode, details, addUser };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAdminListStore, import.meta.hot));
}