<template>
  <div v-on:click="displayRoutine">
    <p>
      {{routine.title}}
    </p>
    <AddExercise class="add-exercise"/>
  </div>
</template>

<script>
import AddExercise from '../components/AddExercise';

export default {
  name: 'Routine',
  props: ['routine'],
  components: {
    AddExercise
  },
  methods: {
    displayRoutine() {
      /* eslint-disable */

      console.log('clicked to display routine')
    }
  }
}
</script>

<style scoped>
.add-exercise {
  display: none;
}
</style>