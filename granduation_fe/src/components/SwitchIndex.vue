<template>
  <component :toggleComponent="toggleComponent" :is="typeName"></component>
</template>

<script>
import Login from "../views/Login.vue"
import Register from "../views/Register"
export default {
  name: 'ZhiHuIndex',
  data () {
    return {
      typeName: 'Login'
    }
  },
  methods:{
    toggleComponent:function(){
      this.typeName = this.typeName === "Login" ? "Register" : "Login"
    }
  },
  components:{
    Login,
    Register
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
