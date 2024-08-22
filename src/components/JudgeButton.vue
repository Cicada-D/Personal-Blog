<style scoped>
.button_1 {
    display: block;
    border: 1px solid rgb(34, 34, 34);
    background-color: rgb(34, 34, 34);
    color: white;
    height: 25px;
    width: 25px;
    padding: 0;
    border-radius: 4px;
}

.judgeButton {
    position: fixed;
    bottom: 100px;
    left: 40px;
    z-index: 9999;
}

.buttonContent {
    position: absolute;
    top: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.25s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translatex(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translatex(-30px);
}
</style>
<template>
    <div ref="Fadebutton" class="judgeButton">
        <button @click="changeButton" class="button_1">
            <Transition name="slide-up">
                <div v-if="show === false" class="buttonContent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-arrow-right">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </div>
                <div v-else-if="show === true" class="buttonContent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-x">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </div>
            </Transition>
        </button>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const emit = defineEmits(['update'])
const Fadebutton = ref(null)
const show = ref(true)

onMounted(() => {
    Fadebutton.value.style
})
const changeButton = () => {
    show.value = !show.value
    emit('update', show.value)
}
</script>