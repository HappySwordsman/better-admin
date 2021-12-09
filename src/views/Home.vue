<template>
  <div class="home">
    <img
      src="https://camo.githubusercontent.com/b8ebecade711b9ae1fa306e7a1c9dd680fb56b0e2b9f015fec9cbad343570353/68747470733a2f2f6e6169766575692e6f73732d636e2d686f6e676b6f6e672e616c6979756e63732e636f6d2f6e616976656c6f676f2e737667"
      alt="Naive logo"
      height="200"
    />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloGo msg="Welcome to Your vite App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloGo from "../components/HelloGo.vue";

export default {
  name: "ViewsHome",
  components: {
    HelloGo,
  },
};
</script>
