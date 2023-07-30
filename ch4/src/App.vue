
<script setup>
import { reactive } from 'vue';

import { ref } from 'vue'
// import HelloWorld from "./components/HelloWorld.vue"
const msg = "Hero";

const mydataid="Joe";
const url = "https://www.youtube.com/"
const objofattrs ={
  id:"jack",
  href: "https://www.youtube.com/"
}
const isDisabled = true;
// let num ={a:10 , b: 20};
// //Without Reactivity
// setTimeout(() => {
//   console.log("Set Timeout Called");
//   console.log(num)
//   num.a = 30;
//   console.log("a:",num.a)
  
// }, 400);

//With Reactivity

// let num = reactive({a:10 , b: 20}) ;
// setTimeout(() => {
//   console.log("Set Timeout Called");
//   console.log(num)
//   num.a = 30;
//   console.log("a:",num.a)
  
// }, 4000);

//With Reactivity
let num = reactive({count:0});

// setTimeout(() => {
//   console.log("SetTimeout Called");
//   console.log("Num:",num);
//   num.count++;
//   console.log("Count:",num.count);
  
// }, 5000);


const obj = reactive({
  num:{count:0},
  user:["orange","apple"]
});
setTimeout(() => {
  console.log("SetTimeout Called");
  console.log("Obj:",obj);
  console.log("Obj.num:",obj.num);
  console.log("Obj.num.count:",obj.num.count);
  console.log("Obj.user:",obj.user);
  obj.num.count++;
  obj.user.push("Avogado");
  
  
}, 5000);


const count = ref(0)

function increment() {
  count.value++
 
}

function decrement() {
  count.value--
 
}

let a1 = ref(10);
let b1 = ref(20);
setTimeout(() => {
  console.log("SetTimeOut Called");
  console.log("a",a1);
  console.log("b",b1);
  console.log("a",a1.value);
  console.log("b",b1.value);
  a1 =30
  
}, 2000);
let obj1 = ref({count:0})
setTimeout(() => {
  console.log("Obj1 SetTimeOut called");
  console.log("Obj1",obj1);
  console.log("Obj.value",obj1.value);
  console.log("Obj.value.count",obj1.value.count)

  count.value++;
  
}, 2000);
const students = reactive([ref("Joe"),ref("Hlen")]);
setTimeout(() => {
  console.log("SetTimeOut Called");
  console.log("Student",students);
  console.log("Student one",students[0]);
  console.log("Student two",students[1]);
  students.push(ref("Kalven"));

}, 2000);
</script>

<template>
  <div>
    <h1 >Global Register by {{ msg }}</h1>
    <HelloWorld/>
 <h1>   {{ mydataid }}</h1>
 <h2 id="kalven"> Hello Kalven </h2>
 <h1 id="jack"> Hello one </h1>
 <h1 v-bind:id="mydataid"> Hello Joe </h1>
 <h2 :id="mydataid">Hello Sue</h2>
 <a :href="url" :id="mydataid">Vist To Youtube</a> <br>
 <a href="" v-bind="objofattrs">Visit</a> <br>
 <button class="bg-blue-700 rounded-lg w-16 mb-2" disabled >Save</button>  <br>
 <button class="bg-green-700 rounded-lg w-16 " :disabled="isDisabled" >Submit</button>
 <!-- <h1>{{ num.a + num.b }} </h1> -->
 <h1>Count:{{ num.count }} </h1>
 <h1>Count:{{ obj.num.count }} </h1>
 <h1>User1:{{ obj.user[0] }}</h1>
 <h1>User2:{{ obj.user[1] }}</h1>
    <!-- <ByeWorld/> -->
   <div class="flex ">
    <button @click="decrement" class="w-[8rem] rounded-sm bg-red-500">
    Click
  </button>
    <button class="bg-green-300 w-10 font-bold text-white">{{ count }} </button>
    <button @click="increment" class="w-[8rem] rounded-sm bg-blue-500">
    Click
  </button>
  
  <!-- Chinese also has  sweet tone ,jpl too.  -->

   </div>
  
    <h1>{{ a1+b1 }} </h1>
     <h1>{{ obj1.count }} </h1>
     <h1>{{ students }} </h1>

  </div>

</template>
this is your passion on the run the motion is poor soul.


<style scoped>
h1{
  font-size: 90px;
  /* color: blue; */
  /* background-color: antiquewhite; */
}
</style>

