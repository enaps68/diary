<template>
<br><br>
<div class="about">

    <h1>LOG IN</h1>

<div class="container">
<div class="row">
<div class="col-sm">   
</div>
<div class="col-sm">

    <form>

        <div class="form-group">

            <label for="exampleInputEmail1">Email address</label>

            <input 
            type="email" 
            v-model="username"
            class="form-control"
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="email@example.com" />

        <small id="emailHelp" class="form-text text-muted" >We'll
            never share your email with anyone else.</small>
<br><br>
</div>

<div class="form-group">

    <label for="exampleInputPassword1">Password</label>

    <input 
        type="password" 
        v-model="password"
        class="form-control"
        id="exampleInputPassword1" 
        placeholder="Password" />
</div>
<br>

<button type="button" @click="login()" class="btn btn-primary" style="background-color: #d0947a;border: none;">Submit</button>

</form>
</div>
<div class="col-sm"></div>
</div>
</div>
</div>
</template>

<script>
import { firebase } from '@/firebase.js';
import { conditionalExpression } from '@babel/types';

export default {
    name: "login",
    data() {
        return {
            username: "",
            password: ""
        }
    },

    methods: {
        login() {
            console.log("login..." + this.username);
            let that = this;
            firebase
            .auth()
            .signInWithEmailAndPassword(this.username, this.password)
            .then((result) => {
                console.log("Uspješna prijava", result);
                
                that.$router.replace({name: 'home'});


            }).catch(function(e) {
                console.error('Greška', e);
            });
        },
    },
};
</script>

