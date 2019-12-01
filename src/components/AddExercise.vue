<template>
  <div>
    <form v-on:submit="addExercise">
      <input type="text" v-model="title" name="title" placeholder="Add Exercise...">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import uuid from 'uuid';

export default {
  name: 'AddExercise',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addExercise(event) {
      event.preventDefault();
      const newExercise = {
        id: uuid.v4(),
        title: this.title 
      }
      this.$emit('add-exercise', newExercise);
      this.title = '';
    }
  }
}
</script>

<style scoped>

</style>