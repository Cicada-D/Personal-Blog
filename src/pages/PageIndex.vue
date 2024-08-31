<style scoped>
.fadeBox {
    position: relative;
    width: 100%;
    height: 100%;
}

.centerBox {
    position: absolute;
    width: 80%;
    height: 45%;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
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
            <div class="fadeBox">
                <PersonalInformation class="centerBox" :personalMenu="personalMenu"></PersonalInformation>
            </div>
        </SilderFade>
        <JudgeButton @update="changeShow"> <!-- 绑定一个点击事件，会返回一个true或者false -->
        </JudgeButton>
        <ContentMain :box="box" :state="show">
            <HeaderBar :menu="menu" :state="show"></HeaderBar>
            <router-view></router-view>
        </ContentMain>
    </div>
</template>

<script setup>
import SilderFade from './components/SilderFade.vue';
import JudgeButton from '../components/JudgeButton.vue';
import ContentMain from './components/ContentMain.vue'
import HeaderBar from '../components/navbar/HeaderBar.vue';
import PersonalInformation from './components/PersonalInformation.vue';
import { ref } from 'vue';
import { useCounterStore } from '../stores/counter';
import { storeToRefs } from 'pinia';
const show = ref(true) // 状态值

const box = { // 侧边栏的属性, 当前为默认值
    width: '350px',
    height: '100vh',
    backgroundColor: 'rgb(34, 34, 34)'
}

const menu = [{
    name: '首页',
    icon: "iconfont icon-home",
    href: '/home'
}, {
    name: '分类',
    icon: "iconfont icon-sort",
    href: '/type'
}, {
    name: '归档',
    icon: "iconfont icon-guidang",
    href: '/archives'
}, {
    name: '标签',
    icon: "iconfont icon-24gf-tags2",
    href: '/tages'
}, {
    name: '关于',
    icon: "iconfont icon-guanyu",
    href: '#'
}, {
    name: '搜索',
    icon: "iconfont icon-sousuo",
    href: '#'
}]

const store = useCounterStore()
const { personalMenu } = storeToRefs(store)



const changeShow = (value) => { // 绑定的事件， 用来更新状态
    show.value = value
    // console.log(show.value)
}

</script>