//export default {
//    searchterm: '',
//    currentUser: null,
//};

import {reactive } from 'vue'

let store = reactive ({
    searchterm:"",
    currentUser: null,
})

export default store;