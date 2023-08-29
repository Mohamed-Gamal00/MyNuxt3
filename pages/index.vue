<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-card max-width="400" class="mx-auto">
          <v-row dense>
            <v-col cols="12">
              <v-card color="#385F73" theme="dark">
                <v-card-title class="text-h5">
                  Unlimited music now
                </v-card-title>

                <v-card-subtitle
                  >Listen to your favorite artists and albums whenever and
                  wherever, online and offline.</v-card-subtitle
                >

                <v-card-actions>
                  <v-btn variant="text"> Listen Now </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="12">
              <v-card color="#1F7087" theme="dark">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="text-h5"> Supermodel </v-card-title>

                    <v-card-subtitle>Foster the People</v-card-subtitle>

                    <v-card-actions>
                      <v-btn class="ms-2" variant="outlined" size="small">
                        START RADIO
                      </v-btn>
                    </v-card-actions>
                  </div>

                  <v-avatar class="ma-3" size="125" rounded="0">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    ></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12">
              <v-card color="#952175" theme="dark">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="text-h5"> Halcyon Days </v-card-title>
                    <v-card-subtitle>Ellie Goulding</v-card-subtitle>

                    <v-card-actions>
                      <v-btn
                        @click="showAlert()"
                        class="ms-2"
                        icon="mdi-play"
                        variant="text"
                      ></v-btn>
                    </v-card-actions>
                  </div>

                  <v-avatar class="ma-3" size="125" rounded="0">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                    ></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card elevation="0" color="blue-grey">
          <v-card-title>Pinia Config</v-card-title>
          <v-card-subtitle
            v-for="statetest in statetest"
            :key="statetest"
            style="color: rgb(255, 255, 255)"
            >pinia store : {{ statetest.title }}</v-card-subtitle
          >
          <v-card-subtitle style="color: rgb(255, 255, 255)"
            >pinia store : {{ actions }}</v-card-subtitle
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<!-- <script>
import { useCounterStore } from "@/store/myStore";

export default {
  setup() {
    const store = useCounterStore();
    return { useCounterStore: store };
  },
};
</script> -->
<script>
import { useCounterStore } from "@/store/myStore";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(useCounterStore, ["statetest", "actions"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getProducts"]),
  },
  mounted() {
    console.log(this.statetest);
    console.log(this.getProducts());
  },
};
</script>
