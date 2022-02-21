<script setup></script>

<template>
  <div
    class="flex flex-col border-black border-2 h-screen items-stretch justify-items-stretch"
  >
    <div class="flex flex-row flex-auto bg-blue-400">
      <div class="flex flex-col flex-none bg-gray-400 p-5">
        <div>
          <router-link to="/">
            <div
              class="rounded-full bg-gray-400 text-center centered px-4 cursor-pointer hover:bg-gray-600"
            >
              Home
            </div>
          </router-link>
        </div>
        <div>
          <router-link to="/about">
            <div
              class="rounded-full bg-gray-400 text-center px-4 cursor-pointer mt-3 hover:bg-gray-600"
            >
              About
            </div>
          </router-link>
        </div>
      </div>

      <div class="flex-auto p-4 items-stretch overflow-y-auto">
        <div v-for="i in 66" :key="i">This is line {{ i }}</div>
        <!-- <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view> -->
      </div>
    </div>
  </div>

  <!-- <div
    class="flex flex-col border-black border-2 h-screen items-stretch justify-items-stretch"
  >
    <div class="flex flex-none h-16 text-center bg-green-900 text-green-200">
      Header
    </div>
    <div class="flex flex-row flex-auto">
      <div class="flex flex-col flex-none bg-gray-400 p-5">
        <div>
          <router-link to="/">
            <div
              class="rounded-full bg-gray-400 text-center centered px-4 cursor-pointer hover:bg-gray-600"
            >
              Home
            </div>
          </router-link>
        </div>
        <div>
          <router-link to="/about">
            <div
              class="rounded-full bg-gray-400 text-center px-4 cursor-pointer mt-3 hover:bg-gray-600"
            >
              About
            </div>
          </router-link>
        </div>
      </div>

      <div
        class="flex-auto p-5 items-stretch justify-items-stretch bg-gray-300"
        style="min-height: 0"
      >
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>
  </div> -->
</template>
