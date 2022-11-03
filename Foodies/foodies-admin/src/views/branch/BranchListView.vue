<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useBranchStore } from "./../../stores/branch";
import { store } from "./../../reactive/index";
import PanelRightVue from "../../shared/panel/PanelRight.vue";
import AddBranchForm from "./AddBranchForm.vue";
const branchInfo = useBranchStore();
const { details } = storeToRefs(branchInfo);
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
      <v-col cols="6" v-for="item in details" :key="item.id">
        <v-card color="secondary" class="w-100">
          <v-row>
            <v-col cols="6">
              <v-card-title class="text-h5"> {{ item.name }} </v-card-title>
              <v-card-subtitle>{{ item.nameLocalized }}</v-card-subtitle>
              <v-card-subtitle> {{ item.address }}</v-card-subtitle>
              <v-card-subtitle>{{ item.landmark }}</v-card-subtitle>
              <v-card-subtitle> {{ item.locality }}</v-card-subtitle>
              <v-card-subtitle>{{ item.city }}</v-card-subtitle>
              <v-card-subtitle> {{ item.state }}</v-card-subtitle>
              <v-card-subtitle>{{ item.country }}</v-card-subtitle>
              <v-card-subtitle> {{ item.pincode }}</v-card-subtitle>
              <v-card-subtitle>{{ item.dialCode }}</v-card-subtitle>
              <v-card-subtitle> {{ item.contact }}</v-card-subtitle>
              <v-card-subtitle>{{ item.contactName }}</v-card-subtitle>
              <v-card-subtitle> {{ item.deliveryCharge }}</v-card-subtitle>
              <v-card-subtitle>
                {{
                  new Date(item.createdAt)
                    .toLocaleDateString()
                    .replace(/\//g, "-")
                }}</v-card-subtitle
              >
            </v-col>
            <v-col cols="6"> </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <PanelRightVue>
      <AddBranchForm />
    </PanelRightVue>
    <!-- <v-table border="1">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">nameLocalized</th>
          <th scope="col">address</th>
          <th scope="col">landmark</th>
          <th scope="col">locality</th>
          <th scope="col">city</th>
          <th scope="col">state</th>
          <th scope="col">country</th>
          <th scope="col">pincode</th>
          <th scope="col">dialCode</th>
          <th scope="col">contact</th>
          <th scope="col">contactName</th>
          <th scope="col">deliveryCharge</th>
          <th scope="col">createdAt</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in details" :key="item.id">
          <td class="py-4 px-6">{{ item.name }}</td>
          <td class="py-4 px-6">{{ item.nameLocalized }}</td>
          <td class="py-4 px-6">{{ item.address }}</td>
          <td class="py-4 px-6">{{ item.landmark }}</td>
          <td class="py-4 px-6">{{ item.locality }}</td>
          <td class="py-4 px-6">{{ item.city }}</td>
          <td class="py-4 px-6">{{ item.state }}</td>
          <td class="py-4 px-6">{{ item.country }}</td>
          <td class="py-4 px-6">{{ item.pincode }}</td>
          <td class="py-4 px-6">{{ item.dialCode }}</td>
          <td class="py-4 px-6">{{ item.contact }}</td>
          <td class="py-4 px-6">{{ item.contactName }}</td>
          <td class="py-4 px-6">{{ item.deliveryCharge }}</td>
          <td class="py-4 px-6">
            {{
              new Date(item.createdAt).toLocaleDateString().replace(/\//g, "-")
            }}
          </td>
        </tr>
      </tbody>
    </v-table> -->
  </v-container>
</template>
