<script setup>
import principal from '../assets/principal.jpg'
import staff from '../assets/staff.jpg'
import nonteaching from '../assets/non-teaching.jpg'
</script>
<template>
    <div id="teaching">
    <h2 class="text-3xl mx-14 pt-16 pb-0 font-serif border-b-2 border-orange-500 w-10/12">Principal</h2>
    <img :src="principal" class="rounded-md p-5 border-2 m-16 w-10/12" />
    <h2 class="text-3xl mx-14 pt-16 pb-0 font-serif border-b-2 border-orange-500 w-10/12">Teaching Staff</h2>
    <img :src="staff" class="rounded-md p-5 border-2 m-16 w-10/12" />
    <h2 class="text-3xl mx-14 pt-16 pb-0 font-serif border-b-2 border-orange-500 w-10/12">Non-Teaching Staff</h2>
    <img :src="nonteaching" class="rounded-md p-5 border-2 m-16 w-10/12" />
  </div>
  
</template>