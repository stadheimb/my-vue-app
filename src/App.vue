<script setup></script>

<template>
  <div class="flex flex-row items-stretch h-screen">
    <div class="flex flex-col flex-none bg-gray-200 p-5">
      <router-link to="/">
        <div
          class="rounded-full bg-gray-400 text-center centered px-4 cursor-pointer hover:bg-gray-600"
        >
          Home
        </div>
      </router-link>
      <router-link to="/about">
        <div
          class="rounded-full bg-gray-400 text-center px-4 cursor-pointer mt-3"
        >
          About
        </div>
      </router-link>

      <!-- <a v-for="i in 6" class="border-r-8 pb-30">
        <div
          class="rounded-full bg-gray-400 w-8 h-8 text-center p-1 cursor-pointer"
          @click="addLine(i)"
        >
          {{ i }}
        </div>
      </a> -->
    </div>

    <div class="flex-auto overflow-y-auto p-5 bg-grey-100">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>

    <div class="flex-none p-5 bg-gray-50">Right Panel</div>
  </div>
</template>
