<!-- eslint-disable -->
<template>
  <div>
    <div v-bind:key="exercises.id" v-for="exercises in exercises">
      <Exercise v-bind:exercise="exercises" v-on:del-exercise="$emit('del-exercise', exercises.id)"/>
    </div>
  </div>
</template>

<script>
import Exercise from './Exercise';

export default {
  name: 'ExerciseList',
  components: {
    Exercise,
  },
  props: ["exercises"],
}

</script>

<style scoped>

</style>