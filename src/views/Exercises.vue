<!-- eslint-disable -->
<template>
  <div class="exercises">
    <AddExercise v-on:add-exercise="addExercise" />
    <h2>List of Exercises</h2>
    <ExerciseList v-bind:key="exercises.id" v-bind:exercises="exercises" v-on:del-exercise="deleteExercise" />
  </div>
</template>

<script>
// @ is an alias to /src
/*eslint-disable*/
import ExerciseList from '../components/ExerciseList';
import AddExercise from '../components/AddExercise';

export default {
  name: 'home',
  components: {
    AddExercise,
    ExerciseList,
  },
  data() {
    return {
      exercises: [
        {
          id: 1, 
          title: 'Bench Press'
        },
        {
          id: 2, 
          title: 'Squat'
        }
      ]
    } 
  },
  methods: {
    addExercise(newExercise) {
      this.exercises = [...this.exercises, newExercise];
    },
    deleteExercise(id) {
      console.log('deleting ' + id);
      this.exercises = this.exercises.filter(exercise => exercise.id !== id)
    }
  }
}
</script>
