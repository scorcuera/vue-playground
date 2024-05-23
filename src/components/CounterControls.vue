<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '@/stores/CounterStore.js'

export default {
    methods: {
        ...mapActions(useCounterStore, ['increment', 'decrement'])
    }
}
</script>

<template>
    <div>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>