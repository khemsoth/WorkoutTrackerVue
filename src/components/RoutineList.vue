<!-- eslint-disable -->
<template>
  <div>
    <div v-bind:key="routines.id" v-for="routines in routineList">
      <Routine v-bind:routine="routines" />
    </div>
  </div>
</template>

<script>
import Routine from './Routine';

export default {
  name: 'RoutineList', 
  components: {
    Routine
  },
  props: ['routineList']
}
</script>
