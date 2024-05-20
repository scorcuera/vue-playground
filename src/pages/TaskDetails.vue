<script>
export default {
    data() {
        return {
            task: {}
        }
    },
    created() {
        this.fetchTask();
    },
    methods: {
        async fetchTask() {
            let response = await fetch(`http://localhost:3000/tasks/${this.$route.params.id}`);
            let task = await response.json();
            this.task = task;
        }
    }
}
</script>

<template>
    <h1>This is the task: {{ task.name }}</h1>
    <p>The difficulty of this task is: {{ task.difficulty }}</p>
</template>

<style></style>