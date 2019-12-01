    <!-- eslint-disable -->

<template>
  <div>
    <p>
      {{exercise.title}}
      <button v-on:click="$emit('del-exercise', exercise.id)">x</button>  
    </p>
  </div>
</template>

<script>
export default {
  name: 'Exercise', 
  props: ['exercise'],
}
</script>

<style scoped>

</style>