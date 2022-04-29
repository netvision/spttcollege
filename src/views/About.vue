<script setup>
 import karyakarini from '../assets/KARYAKARNI.jpg'
 import registration from '../assets/registration.jpg'
</script>

<template>
<div id="society">
    <h2 class="text-3xl mx-14 pt-16 pb-0 font-serif border-b-2 border-orange-500 w-10/12">Society Registration Certificate</h2>
    <img :src="registration" class="rounded-md p-5 border-2 m-16 w-10/12" />
  </div>
  <div id="managment">
    <h2 class="text-3xl mx-14 pt-16 pb-0 font-serif border-b-2 border-orange-500 w-10/12">Management Committee</h2>
    <img :src="karyakarini" class="rounded-md p-5 border-2 m-16 w-10/12" />
  </div>
</template>
