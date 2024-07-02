<template>
<h2 class="container w-full p-5 text-xl">Please click below to view the documents</h2>
<div class="container w-full flex mx-auto p-6 pl-0">

<p class="align-left w-1/3 text-blue-800 hover:text-cyan-600 hover:bg-yellow-200 p-5 rounded-lg m-5"><a :href="ncte" target="_blank"><img :src="pdf" class="w-14" /><span>NCTE Recognition Letter</span></a></p>
<p class="align-left w-1/3 text-blue-800 hover:text-cyan-600 hover:bg-yellow-200 p-5 rounded-lg m-5"><a :href="extention" target="_blank"><img :src="pdf" class="w-14" /><span>DCE Extention Letter</span></a></p>
<p class="align-left w-1/3 text-blue-800 hover:text-cyan-600 hover:bg-yellow-200 p-5 rounded-lg m-5"><a :href="noc" target="_blank"><img :src="pdf" class="w-14" /><span>University Affiliation</span></a></p>
</div>
</template>
<script setup>
import ncte from '../assets/ncte.jpg'
import extention from '../assets/dce.pdf'
import pdf from '../assets/pdf17.svg'
import noc from '../assets/uni-noc.pdf'

</script>