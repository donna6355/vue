<template>
    <div class="column" draggable @drop="moveTaskOrColumn($event, column.tasks, columnIdx)" @dragover.prevent @dragenter.prevent @dragstart.self="pickUpColumn($event, columnIdx)">
        <div class="flex items-center mb-2 font-bold">
          {{column.name}}
        </div>
        <div class="list-reset">
            <ColumnTask v-for="(task, $taskIdx) of column.tasks" :key="task.id" :task="task" :taskIdx="$taskIdx" :columnIdx="columnIdx" :column="column" :board="board" />
          <input type="text" class="block p-2 w-full bg-transparent" placeholder="+ Enter new task" @keyup.enter="createNewTask($event, column.tasks)" />
        </div>
    </div>
</template>

<script>
import ColumnTask from "@/components/ColumnTask.vue"
export default {
    components:{ColumnTask},
    props:{
        column:{
            type:Object,
            required:true
        },
        columnIdx:{
            type:Number,
            required:true
        },
        board:{
            type:Object,
            required:true
        }
    },
    methods:{
        pickUpColumn (evt, columnIdx) {
        evt.dataTransfer.effectAllowed = "move"
        evt.dataTransfer.dropEffect = "move"
    
        evt.dataTransfer.setData('from-column-index', columnIdx)
        evt.dataTransfer.setData('type', 'column')

        },
        createNewTask (evt, tasks) {
        this.$store.commit('createNewTask', { tasks, name: evt.target.value })
        evt.target.value = ''
        },
        moveTaskOrColumn ( evt, toTasks, toColumnIndex, toTaskIndex) {
        const type = evt.dataTransfer.getData('type')
        if( type === 'task'){
            this.moveTask(evt, toTasks, toTaskIndex !== undefined ? toTaskIndex : toTasks.length)
        }else{
            this.moveColumn(evt, toColumnIndex)
        }
        },
        moveTask (evt, toTasks, toTaskIndex) {
        const fromColumnIndex = evt.dataTransfer.getData('task-index')
        const fromTasks = this.board.columns[fromColumnIndex].tasks
        const taskIdx = evt.dataTransfer.getData('from-column-index')

        this.$store.commit('moveTask', {
            fromTasks,
            toTasks,
            taskIdx,
            toTaskIndex
        })
        },
        moveColumn (evt, toColumnIndex) {
        const fromColumnIndex = evt.dataTransfer.getData('from-column-index')

        this.$store.commit('moveColumn', {
            fromColumnIndex,
            toColumnIndex
        })
        },    
    }
}
</script>
