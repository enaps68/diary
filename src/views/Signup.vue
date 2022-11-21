<template>
  <br><br>
 <div class="about">
   <h1>SIGN UP</h1>
 <div class="container">
<div class="row">
  <div class="col-sm"></div>
    <div class="col-sm">
      <form>
        <div class="form-group">
          <label for="exampleInputPassword1">Username</label>
          <input type="username" v-model="username" class="form-control" id="exampleInputPassword1" placeholder="Username" />
          <br>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">E-mail</label>
          <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@example.com" />
           <br>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          <br>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Repeat password</label>
          <input type="password" v-model="passwordr" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
            <br>
          <button type="button" @click="signup" class="btn btn-primary" style="background-color: #d0947a;border: none;">Submit</button>
      </form>
  </div>
<div class="col-sm"></div>
</div>
</div>
</div>
</template>

<script>
import { firebase } from '@/firebase.js';

export default {
  name: 'Signup',
  data () {
    return {
      username: "",
      email: "",
      password: "",
      passwordr: "",
    };
  },
  
  methods: {
    signup() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(
        function () {
          console.log('Registracija uspješna');
        })
      .catch(function(error) {
        console.error('Došlo je do greške', error)
      })
    },
  },
};

</script>