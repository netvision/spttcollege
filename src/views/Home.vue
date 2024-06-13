<script setup>
import photo from '../assets/building.jpg'
</script>

<template>
  <div class="bg-gray-50">
    <div class="w-full p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <img :src="photo" class="h-full w-full rounded-t">
        </div>
    </div>
  </div>
</template>
