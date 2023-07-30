<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
function disc(){
  console.log("Hello World");
}
const num = 10;
const on = false;
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <h1>Hello World</h1>
      <h2>{{ 10+10 }} </h2>
      <h4>{{ disc() }} </h4>
      <h2>{{ num+15 }} </h2>
      <h1> {{ on ? "Light":"Dark" }} </h1>
 
      <ByeWorld/>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
