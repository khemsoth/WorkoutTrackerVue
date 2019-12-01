<template>
  <div>
    <h2>List of Routines</h2>
    <CreateRoutine v-on:create-routine="createRoutine" />
    <RoutineList v-bind:key="routines.id" v-bind:routineList="routines" />
  </div>
</template>

<script>
import CreateRoutine from '../components/CreateRoutine';
import RoutineList from '../components/RoutineList';

export default {
  name: 'RoutinesPage',
  components: {
    CreateRoutine,
    RoutineList
  },
  data() {
    return {
      routines: []
    }
  },
  methods: {
    createRoutine(newRoutine) {
      this.routines = [...this.routines, newRoutine];
    } 
  }
}
</script>

<style scoped>

</style>