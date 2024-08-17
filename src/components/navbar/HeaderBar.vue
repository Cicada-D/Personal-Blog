<style scoped>
.headerBox {
    width: 100%;
    height: 81px;
    position: relative;
    background: #eee;
    min-width: 900px;
}

.flexBox {
    display: flex;
    position: absolute;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate3d(-40%, -50%, 0);
}

.box {
    padding: 2px 10px;
    color: rgb(56, 56, 56);
    border-radius: 4px;
    transition: all 0.6s ease;
}

.box:hover {
    background-color: #c9c8c8;
    color: black;
}

.headertext {
    display: flex;
    font-size: 22px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.line {
    border: 1px solid black;
    width: 70%;
    margin: 4px;
}

.textA {
    font-size: 14px;
    margin-left: 4px;
}
</style>
<template>
    <div class="headerBox">
        <div class="flexBox">
            <div class="headertext" ref="headerIcon">
                <div class="line"></div>
                <div>知了的博客</div>
                <div class="line"></div>
            </div>
            <div class="box" v-for="(item, index) in props.menu" :key="index">
                <i :class=item.icon /><span class="textA">{{ item.name }}</span>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['menu', 'state'])

const headerIcon = ref(null)


</script>