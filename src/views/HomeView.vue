<template>
  <br>
  <div class="container text-center">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        
        <form @submit.prevent="postNewImage" class="form-inline mb-5">
          <div class="form-group">
            <label for="imageUrl">Image URL</label>
            <input
                v-model="newImageUrl"
                type="text"
                class="form-control ml-2"
                placeholder="Enter the image URL"
                id="imageUrl"
              /> 
          </div>
          <br>
          <div class="form-group">

            <label for="imageCaption">Caption</label>
            <input
              v-model="newImageCaption"
              type="text"
              class="form-control ml-2"
              placeholder="Enter the image caption"
              id="imageCaption"
            />
          </div>
          <br>
          <div class="form-group">
            <label for="imageDescription">Description</label>
            <input
              v-model="newImageDescription"
              type="text"
              class="form-control ml-2"
              placeholder="Enter the image description"
              id="imageDescription"
            />
          </div>
          <br>
          <button type="button" @click="validate1" class="btn btn-primary ml-2" style="background-color: #53d3dc71;border: none; color: #2c3e50;">Post</button>
        </form>

          <card v-for="card in filterdcards" :key="card.id" :info="card"/>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>

//let cards = []

//cards = [
//  { url: "https://picsum.photos/id/1013/200",
//    naslov: "Vjenčanje", 
//    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//    datum: "06.08.2023"
//  },
//  { url: "https://picsum.photos/id/1015/200",
//    naslov: "Predivan pogled", 
//    opis: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//    datum: "11.06.2023"
//  },
//  { url: "https://picsum.photos/id/1025/200",
//    naslov: "Zimska šetnjica", 
//    opis: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//    datum: "13.01.2023"
//  },
//  { url: "https://picsum.photos/id/1047/200",
//    naslov: "Izgubljeni u gradu", 
//    opis: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//    datum: "21.12.2022"
//   },
//];

import card from '@/components/card.vue';
import store from "@/store.js";
import { db } from '@/firebase.js';

export default {

  name: 'HomeView',
  data: function () {
    return {
      cards: [],
      store: store,
      newImageUrl: "",
      newImageCaption: "",
      newImageDescription: ""
    };
    
  },

  mounted() {
    this.getPosts();
  },

  methods: {
    getPosts() {
      console.log("firebase dohvat");

      db.collection("posts")
        .orderBy("posted_at", "desc")
        .get()
        .then( (query) => {
          this.cards = [];
          query.forEach( (doc) =>{
            //console.log("id: ", doc.id);
            //console.log("podaci: ", doc.data());

            const data = doc.data();

            this.cards.push({
              id: doc.id,
              datum: data.posted_at,
              naslov: data.capt,
              opis: data.desc,
              url: data.url,

            })
          });
        });
    },
    postNewImage() {

      const imageUrl = this.newImageUrl;
      const imageCaption = this.newImageCaption;
      const imageDescription = this.newImageDescription;

      db.collection("posts")
        .add({
            url: imageUrl,
            capt: imageCaption,
            desc: imageDescription,
            email: store.currentUser,
            posted_at: Date.now(),
          })
        .then( (doc) => {
          console.log("Spremljeno", doc);
          alert("Uspješno objavljeno");
          this.newImageUrl = '';
          this.newImageCaption = '';
          this.newImageDescription = '';

          this.getPosts();
        })
        .catch( (e) => {
          console.error(e);
          alert("Došlo je do greške");
        });
    },

    validate1() {
        if (this.newImageUrl === '' || this.newImageCaption === '') {
          alert("Polja url i naslov su obavezna. Molimo popunite ih.");
        } else { this.postNewImage(); }
      },

  },

  computed: {
     filterdcards () {
      let termin = this.store.searchterm;
      return this.cards.filter(card => card.naslov.toLowerCase().includes(termin.toLowerCase()));
     },
  },

  components: {
    card,
  },
}
</script>
