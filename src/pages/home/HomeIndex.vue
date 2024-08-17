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
        <ContentMain :box="box" :state="show">
            <HeaderBar :menu="menu" :state="show"></HeaderBar>
        </ContentMain>
    </div>
</template>

<script setup>
import SilderFade from './components/SilderFade.vue';
import JudgeButton from '../../components/JudgeButton.vue';
import ContentMain from './components/ContentMain.vue'
import HeaderBar from '../../components/navbar/HeaderBar.vue';
import { ref } from 'vue';
const show = ref(true)

const box = {
    width: '350px',
    height: '100vh',
    backgroundColor: 'rgb(34, 34, 34)'
}

const menu = [{
    name: '首页',
    icon: "iconfont icon-home"
}, {
    name: '分类',
    icon: "iconfont icon-sort"
}, {
    name: '归档',
    icon: "iconfont icon-guidang"
}, {
    name: '标签',
    icon: "iconfont icon-24gf-tags2"
}, {
    name: '关于',
    icon: "iconfont icon-guanyu"
}, {
    name: '搜索',
    icon: "iconfont icon-sousuo"
}]
const changeShow = (value) => {
    show.value = value
    // console.log(show.value)
}

</script>