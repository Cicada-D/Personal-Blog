<style scoped>
.box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.whiteBox {
    background-color: white;
    width: 50px;
    height: 50px;
}

.flex_box {
    display: flex;
    height: 100vh;
    position: relative;
    transition: all 0.3 ease;
}

.rightBox {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border: 1px solid red;
}
</style>

<template>

    <div class="flex_box">
        <SilderFade :show="show" :box="box">
            <!-- const state = {
                    box: props.box ? props.box : {
                        width: '300px',
                        height: '100vh',
                        backgroundColor: 'rgb(34, 34, 34)'
                    },
                    time: props.fateTime ? props.fateTime : 300 //多少毫秒
                } -->
            <div class="box">
                <div class="whiteBox">

                </div>
            </div>
        </SilderFade>
        <JudgeButton @update="changeShow">
        </JudgeButton>
        <div class="rightBox" ref="homeMain">
            alsdjalskdj
        </div>
    </div>

</template>

<script setup>
import SilderFade from './components/SilderFade.vue';
import JudgeButton from '../../components/JudgeButton.vue';
import { onMounted, ref } from 'vue';
const show = ref(true)
const homeMain = ref(null)
const box = {
    width: '300px',
    height: '100vh',
    backgroundColor: 'rgb(34, 34, 34)'
}
onMounted(() => {
    homeMain.value.style.transition = `width 0.3s ease`
    homeMain.value.style.width = 'calc(100% - 300px)'
})
const changeShow = (value) => {
    show.value = value
    console.log(show.value)
    if (show.value) {
        homeMain.value.style.width = 'calc(100% - 300px)'
    } else {
        homeMain.value.style.width = '100%'
    }
}
</script>