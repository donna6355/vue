<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <BoardColumn v-for="(column, $columnIdx) of board.columns" :key="column.id" :column="column" :board="board" :columnIdx="$columnIdx" />
      <div class="column flex">
        <input type="text" class="w-full p-2 flex-grow" placeholder="New Column Here" v-model="newColumnName" @keyup.enter="createColumn" />
      </div>
      <div class="task-bg" v-if="isTaskOpen" @click.self="close">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import BoardColumn from '@/components/BoardColumn.vue'

export default {
  components: {
    BoardColumn
  },
  data () {
    return {
      newColumnName: ''
    }
  },
  computed: {
    board () {
      return this.$store.state.board
    },
    isTaskOpen () {
      return this.$route.name === 'task'
    }
  },
  methods: {
    close () {
      this.$router.push({ name: 'board' })
    },
    createColumn () {
      this.$store.commit('createNewColumn', { name: this.newColumnName })
      this.newColumnName = ''
    }
  }
}
</script>

<style lang="css">
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}

.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}

.board {
  @apply p-4 bg-teal-dark h-full overflow-auto;
}

.task-bg {
  @apply pin absolute;
  background: rgba(0,0,0,0.5);
}
</style>
