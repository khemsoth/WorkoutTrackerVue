<template>
  <div>
    <form v-on:submit="createRoutine"> 
      <input type="text" v-model="title" name="title" placeholder="Create Routine...">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import uuid from 'uuid';

export default {
  name: 'CreateRoutine',
  data() {
    return {
      title: ''
    }
  }, 
  methods: {
    createRoutine(event) {
      event.preventDefault();
      let newRoutine = {
        id: uuid.v4(),
        title: this.title
      }
      this.$emit('create-routine', newRoutine);
      this.title = '';
    }
  }
}
</script>

<style scoped>

</style>