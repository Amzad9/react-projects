import { defineStore, acceptHMRUpdate } from "pinia";
import { onMounted, ref, watchEffect } from "vue";

export const useBranchStore = defineStore("useBranchStore", () => {
  const details = ref([]);
  const name = ref("");
  const nameLocalized = ref("");
  const address = ref("");
  const landmark = ref("");
  const locality = ref("");
  const city = ref("");
  const state = ref("");
  const country = ref("");
  const pincode = ref(Number);
  const dialCode = ref("");
  const contact = ref("");
  const contactName = ref("");
  const deliveryCharge = ref("");

  const branchListInfo = () => {
    fetch(`http://localhost:8080/api/branch`, {
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

  const addBranch = () => {
    alert("Hi");
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") || "",
      },
      body: JSON.stringify({
        name: name.value,
        nameLocalized: nameLocalized.value,
        address: address.value,
        landmark: landmark.value,
        locality: locality.value,
        city: city.value,
        state: state.value,
        country: country.value,
        pincode: pincode.value,
        dialCode: dialCode.value,
        contact: contact.value,
        contactName: contactName.value,
        deliveryCharge: deliveryCharge.value,
      }),
    };

    fetch("http://localhost:8080/api/branch", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // details.value.push(result);
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
    branchListInfo();
  });
  return {
    name,
    nameLocalized,
    address,
    landmark,
    locality,
    city,
    state,
    details,
    country,
    pincode,
    dialCode,
    contact,
    contactName,
    deliveryCharge,
    addBranch,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBranchStore, import.meta.hot));
}
