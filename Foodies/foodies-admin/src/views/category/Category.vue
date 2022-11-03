<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "./../../stores/category";
import BaseInputVue from "@/shared/input/BaseInput.vue";
import ButtonVue from "@/shared/button/Button.vue";

// import { store } from "./../../reactive/index";
// import PanelRightVue from "../../shared/panel/PanelRight.vue";
// import AddBranchForm from "./AddBranchForm.vue";
const categoryInfo = useCategoryStore();
const { details, name, description } = storeToRefs(categoryInfo);
</script>
<template>
  <v-container fluid class="px-0">
    <form @submit.prevent="categoryInfo.addCategory">
      <v-row class="mt-3">
        <v-col cols="5">
          <BaseInputVue v-model="name" type="text" name="Category Name" />
        </v-col>
        <v-col cols="5">
          <BaseInputVue v-model="description" type="text" name="Description" />
        </v-col>
        <v-col cols="2">
          <ButtonVue title="Submit" />
        </v-col>
      </v-row>
    </form>
    <v-row>
      <v-col cols="12">
        <v-card color="secondary" class="w-100">
          <v-table border="1">
            <thead>
              <tr>
                <th scope="col">name</th>
                <th scope="col">description</th>
                <th scope="col">createdAt</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in details" :key="item.id">
                <td class="py-4 px-6">{{ item.name }}</td>
                <td class="py-4 px-6">{{ item.description }}</td>
                <td class="py-4 px-6">
                  {{
                    new Date(item.createdAt)
                      .toLocaleDateString()
                      .replace(/\//g, "-")
                  }}
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
