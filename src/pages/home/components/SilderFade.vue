<style scoped lang="less">
</style>

<template>
    <FadeDialog :state="state">
        <template #silder>
            <div ref="Fadebox" v-if="props.show">
                <slot></slot>
            </div>
        </template>
        <!-- <template #silderAfter>
            <div ref="silderAfter" v-if="props.show">
                <slot></slot>
            </div>
        </template> -->
    </FadeDialog>

</template>

<script setup>
import FadeDialog from '../../../components/dialog/FadeDialog.vue';
import { onMounted, ref } from 'vue';

const Fadebox = ref(null)
// const silderAfter = ref(null)
const props = defineProps(['fateTime', 'box', 'show'])
const state = {
    box: props.box ? props.box : {
        width: '300px',
        height: '100vh',
        backgroundColor: 'rgb(34, 34, 34)'
    },
    time: props.fateTime ? props.fateTime : 300 //多少毫秒
}

onMounted(() => {
    Fadebox.value.style.transition = `ease ${state.time / 1000}s all`
    Fadebox.value.style.width = `${state.box.width}`
    Fadebox.value.style.height = `${state.box.height}`
    Fadebox.value.style.display = `relative`
    Fadebox.value.style.backgroundColor = `${state.box.backgroundColor}`

    // silderAfter.value.style.transition = `ease ${state.time / 1000}s all`
    // silderAfter.value.style.width = `${state.box.width}`
    // silderAfter.value.style.height = `${state.box.height}`
    // silderAfter.value.style.display = `relative`
    // silderAfter.value.style.backgroundColor = `${state.box.backgroundColor}`
})

</script>
