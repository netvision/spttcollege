<script setup>
 import registration from '../assets/registration.jpg'
 import management from '../assets/management.pdf'
import pdf from '../assets/pdf17.svg'
</script>

<template>
  <div id="managment">
    <p class="align-left w-1/3 text-blue-800 hover:text-cyan-600 hover:bg-yellow-200 p-5 rounded-lg m-5"><a :href="management" target="_blank"><img :src="pdf" class="w-14" /><span>Management Committee</span></a></p>
  </div>
<div id="society">
    <h2 class="text-3xl mx-14 pt-16 pb-0 font-serif border-b-2 border-orange-500 w-10/12">Society Registration Certificate</h2>
    <img :src="registration" class="rounded-md p-5 border-2 m-16 w-10/12" />
  </div>

</template>
