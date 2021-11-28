import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'
import { saveStatePlugin, uuid } from './utils'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
  plugins:[ saveStatePlugin ],
  state: {
    board
  },
  getters:{
    getTask (state) {
      return (id) => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task
            }
          }
        }
      }
    }
  },
  actions: {},
  mutations: {
    createNewTask (state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: ''
      })
    },
    createNewColumn (state, { name }) {
      state.board.columns.push({
        name,
        tasks:[]
      })
    },
    updateTask (state, { task, key, value }) {
      Vue.set( task, key, value )
    },
    moveTask (state, { fromTasks, toTasks, taskIdx, toTaskIndex }) {
      const taskToMove = fromTasks.splice(taskIdx, 1)[0]
      toTasks.splice(toTaskIndex, 0, taskToMove)
    },
    moveColumn (state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.board.columns
      const columnToMove = columnList.splice( fromColumnIndex, 1)[0]
      columnList.splice(toColumnIndex, 0, columnToMove)
    }
  }
})
