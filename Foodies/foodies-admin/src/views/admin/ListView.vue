<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useAdminListStore } from "./../../stores/adminList";
import { store } from "./../../reactive/index";
import PanelRightVue from "../../shared/panel/PanelRight.vue";
import FormViewVue from "./FormView.vue";
const adminInfo = useAdminListStore();
const { details } = storeToRefs(adminInfo);
</script>
<template>
  <v-card class="mt-6" outlined>
    <v-btn
      style="position: fixed; bottom: 30px; right: 30px; z-index: 99"
      class="ma-4"
      color="primary"
      icon="mdi-plus"
      size="x-large"
      @click.stop="store.drawer = !store.drawer"
    ></v-btn>
    <PanelRightVue>
      <FormViewVue />
    </PanelRightVue>
    <v-table border="1">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">email</th>
          <th scope="col">contact</th>
          <th scope="col">type</th>
          <th scope="col">createdAt</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in details" :key="item.id">
          <td class="py-4 px-6">{{ item.name }}</td>
          <td class="py-4 px-6">{{ item.email }}</td>
          <td class="py-4 px-6">{{ item.contact }}</td>
          <td class="py-4 px-6">{{ item.type }}</td>
          <td class="py-4 px-6">
            {{
              new Date(item.createdAt).toLocaleDateString().replace(/\//g, "-")
            }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
