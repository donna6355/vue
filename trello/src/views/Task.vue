<template>
  <div class="task-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <input type="text" :value="task.name" class="w-full" @change="updateTask($event,'name')"  />
      <textarea 
      placeholder="Enter task description"
      class="relative w-full bg-transparent px-2 mt-2 h-64 border-none leading-normal" :value="task.description" @change="updateTask($event, 'description')" ></textarea>

    </div>
  </div>
</template>

<script>
export default {
  computed:{ 
    task () {
      return this.$store.getters.getTask(this.$route.params.id)
    },
  },
  methods: {
    updateTask (evt, key) {
      this.$store.commit('updateTask', {
        task:this.task,
        key,
        value: evt.target.value
      }) 
    },
  }
}
</script>

<style>
.task-view {
  @apply relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
