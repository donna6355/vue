<template>
    <div class="task" @click="goToTask(task)" draggable @dragover.prevent @dragenter.prevent @dragstart="pickUpTask($event, columnIdx, taskIdx)" @drop.stop="moveTaskOrColumn($event, column.tasks, columnIdx, taskIdx)">
        <span class="w-full flex-no-shrink font-bold">{{task.name}}</span>
        <p class="w-full flex-no-shrink mt-1 text-sm" v-if="task.description">
            {{task.description}}
        </p>
    </div>
</template>
<script>
export default {
    props:{
        task:{
            type:Object,
            required:true
        },
        taskIdx:{
            type:Number,
            required:true
        },
        columnIdx:{
            type:Number,
            required:true
        },
        column:{
            type:Object,
            required:true
        },
        board:{
            type:Object,
            required:true
        }
    },
    methods:{
        goToTask (task) {
        this.$router.push({name:'task', params: {id:task.id}})
        },
        pickUpTask (evt, taskIdx, fromColIdx) {
        evt.dataTransfer.effectAllowed = "move"
        evt.dataTransfer.dropEffect = "move"

        evt.dataTransfer.setData('task-index', taskIdx)
        evt.dataTransfer.setData('from-column-index', fromColIdx)
        evt.dataTransfer.setData('type', 'task')
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