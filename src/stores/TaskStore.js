import { defineStore } from 'pinia'

export const useTaskStore = defineStore('TaskStore', {
  state: () => ({
    tasks: [],
    task: {}
  }),
  actions: {
    async fetchTasks() {
      let response = await fetch('http://localhost:3000/tasks')
      let tasks = await response.json()
      this.tasks = tasks
    },
    async fetchTask(id) {
      let response = await fetch(`http://localhost:3000/tasks/${id}`)
      let task = await response.json()
      this.task = task
    }
  }
})
