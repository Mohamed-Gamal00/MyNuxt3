import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
  state: () => ({
    statetest: [
      { title: "Smart Phones" },
      { title: "Laptops" },
      { title: "Furniture" },
    ],
    actions: "",
  }),
  actions: {
    async getProducts() {
      this.actions = "Actions"
    },
  },
});
