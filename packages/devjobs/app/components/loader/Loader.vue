<template>
  <span
    border="t-3 t-white r-transparent r-3 rounded-1/2"
    box="border"
    display="inline-block"
    class="loader"
  />
</template>

<style scoped>
.loader {
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
