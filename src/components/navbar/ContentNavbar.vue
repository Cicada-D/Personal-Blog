<style scoped>
.outerBox {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.center {
    /* position: absolute; */
}

.navBtn {
    color: #666666;
    background-color: rgb(34, 34, 34);
    border: none;
    border-bottom: 1px solid rgb(34, 34, 34);
    padding: 4px;
    margin: 0px 4px;
}

.clickNavBtn {
    color: #87daff;
    border: none;
    padding: 4px;
    margin: 0px 4px;
    border-bottom: 1px solid #87daff;
    background-color: rgb(34, 34, 34);
}
</style>

<template>
    <div class="outerBox">
        <div ref="btns" class="center">
            <button v-for="item, index in props.menu" :key="index" class="navBtn" @click="changeNav">{{ item }}</button>
            <!-- <button class="navBtn" @click="changeNav">站点概览</button> -->
        </div>
    </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const emit = defineEmits(['changeIndex'])
const props = defineProps(['menu'])

const btns = ref<HTMLElement | null>(null)

onMounted(() => {
    btns.value?.children[0]?.classList.add('clickNavBtn')
})

const changeNav = (e) => {
    // console.log(btns.value.children)
    if (btns.value?.children) {
    for (const element of btns.value.children) {
        if (element instanceof HTMLElement && element.innerText === (e.target as HTMLElement).innerText) {
            element.classList.add('clickNavBtn')
            element.classList.remove('navBtn')
        } else {
            element.classList.add('navBtn')
            element.classList.remove('clickNavBtn')
        }
    }
}
    // btns.value.children.forEach(element => {
    // if (element.innerText == e.target.innerText) {
    //     element.className = 'clickNavBtn'
    // } else {
    //     element.className = 'navBtn'
    // }
    // });
    emit('changeIndex', e.target.innerText)
}
</script>