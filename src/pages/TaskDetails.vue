<script>
import { mapState, mapActions } from 'pinia'
import { useTaskStore } from '@/stores/TaskStore.js'

export default {
    created() {
        this.fetchTask(this.$route.params.id);
    },
    computed: {
        ...mapState(useTaskStore, ['task'])
    },
    methods: {
        ...mapActions(useTaskStore, ['fetchTask'])
    }
}
</script>

<template>
    <h1>This is the task: {{ task.name }}</h1>
    <p>The difficulty of this task is: {{ task.difficulty }}</p>
</template>

<style></style>