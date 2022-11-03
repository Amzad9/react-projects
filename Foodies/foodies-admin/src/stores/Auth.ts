import { defineStore, acceptHMRUpdate } from "pinia";
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { loginInfo } from "@/type/api/login-info";
export const useLoginAuthStore = defineStore("useLoginAuthStore", () => {
  const login:loginInfo = reactive({contact: "", password: ""})
  const router = useRouter();
  const onSubmit = () => {
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") || "",
      },
      body: JSON.stringify({
        contact: login.contact,
        password: login.password,
      }),
    };

    fetch("http://localhost:8080/api/admin/login", requestOptions)
      .then((response) => {
        if (response.status === 404) {
          localStorage.removeItem("token");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result.user);
        if (result.token !== undefined) {
          localStorage.setItem("userInfo", JSON.stringify(result.user));
          localStorage.setItem("token", result.token);
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const token = localStorage.getItem("token");
  const logout = () => {
    if (token) {
      localStorage.removeItem("token");
      router.push("/login");
    }
  };
  return { login, onSubmit, logout };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginAuthStore, import.meta.hot));
}

