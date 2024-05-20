<script>
export default {
    data() {
        return {
            tasks: []
        }
    },
    created() {
        // ni bien cargues el componente, ejecuta el fetch de tareas
        this.fetchTasks();
    },
    methods: {
        async fetchTasks() {
            let response = await fetch("https://task-manager-api-two-flame.vercel.app/tasks");
            let tasks = await response.json();
            this.tasks = tasks;
        }
    }
}
</script>

<template>
    <h1>This is the Home page</h1>
    <div v-for="task in tasks">
        <p>{{ task.name }}</p>
        <router-link :to="`task/${task.id}`">See details</router-link>
    </div>
</template>

<style></style>