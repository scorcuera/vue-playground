<script>
import { mapActions, mapState } from 'pinia'
import { useTaskStore } from '@/stores/TaskStore.js'

export default {
    created() {
        this.fetchTasks();
    },
    computed: {
        ...mapState(useTaskStore, ['tasks'])
    },
    methods: {
        ...mapActions(useTaskStore, ['fetchTasks'])
    }
}
</script>

<template>
    <h1>This is the Home page</h1>
    <!-- <button @click="fetchTasks">Load tasks</button> -->
    <div v-for="task in tasks">
        <p>{{ task.name }}</p>
        <router-link :to="`task/${task.id}`">See details</router-link>
    </div>
</template>

<style></style>