<style scoped>
.rightBox {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
}
</style>
<template>
    <div class="rightBox" ref="homeMain">
        <slot></slot>
    </div>
</template>

<script setup>

import { onMounted, toRef ,ref, watch } from 'vue';

const props = defineProps(['box', 'state'])
const state = toRef(props, 'state');
const homeMain = ref(null)

onMounted(() => {
    homeMain.value.style.transition = `width 0.3s ease`
    homeMain.value.style.width = `calc(100% - ${props.box.width})`
})
watch(state,
    (newValue, oldValue) => {
        if (!oldValue) {
            homeMain.value.style.width = `calc(100% - ${props.box.width})`
        } else {
            homeMain.value.style.width = `100%`
        }
    }
)
</script>
