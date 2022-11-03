<script setup>
import { store } from "./../../reactive/index";
import PanelRightVue from "../../shared/panel/PanelRight.vue";
import Form from "./FormView.vue"
</script>
<template>
  <v-container fluid class="px-0">
    <v-btn
      style="position: fixed; bottom: 30px; right: 30px; z-index: 99"
      class="ma-4"
      color="primary"
      icon="mdi-plus"
      size="x-large"
      @click.stop="store.drawer = !store.drawer"
    ></v-btn>
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
    <PanelRightVue>
      <Form />
    </PanelRightVue>
  </v-container>
</template>
