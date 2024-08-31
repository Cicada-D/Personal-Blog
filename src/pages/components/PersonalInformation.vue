<style scoped>
.outerBox {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
}

.personal {
    display: flex;
    /* height: 200px; */
    width: 100%;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    color: #999999;
}

.personalIcon {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    margin-top: 10px;
    border: 1px solid;
    overflow: hidden;
}

.personalName {
    font-size: 16px;
    font-weight: 600;
    color: #f5f5f5;
    margin: 12px 0px 0px;
}

.describe {
    margin: 12px 0px 5px;
}

.linkBox {
    display: flex;
    width: 100%;
    /* height: 190px; */
    margin-top: 10px;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    color: #999999;
}

.btn_orange {
    font-size: 18px;
    padding: 5px 15px;
    color: #fc6423;
    border: 2px solid #fc6423;
    background-color: rgb(34, 34, 34);
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
}

.btn_orange:hover {
    color: white;
    background-color: #fc6423;
}

.tagesBox {
    display: flex;
    margin-top: 5px;
}

.tageItem {
    margin: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.font_18 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
}

.font_14 {
    font-size: 14px;
}

.linkTages {
    margin-top: 5px;
    width: 80%;
    /* height: 20px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 12px;
}

.linkTagesItem {
    margin: 5px 10px;
    /* 子元素之间的间距，避免紧挨 */
    box-sizing: border-box;
    /* 包括 padding 和 border 在内计算宽度 */
}

.linkLastItem {
    margin-top: 10px;
    flex-basis: 90%;
    align-self: center;
    text-align: center;
}
</style>

<template>
    <div class="outerBox">
        <div class="personal">
            <div class="personalIcon">
                <img src="https://avatars.githubusercontent.com/u/98377372?s=400&u=0639fc662c497a5851127dd9ef38d08e9a3a7fa3&v=4"
                    width="96px" height="96px" alt="">
            </div>
            <div class="personalName">
                {{ personalMenu.name }}
            </div>
            <div class="describe">
                {{ personalMenu.describe }}
            </div>
        </div>

        <div class="linkBox">
            <button class="btn_orange">
                Q&A
            </button>

            <div class="tagesBox">
                <div v-for="item, index in personalMenu.tage" :key="index">
                    <a :href="item.href" class="tageItem">
                        <div class="font_18">{{ item.num }}</div>
                        <div class="font_14">{{ item.name }}</div>
                    </a>
                </div>
            </div>

            <div class="linkTages">
                <div v-for="item, index in personalMenu.link" :key="index" :class="[index !== personalMenu.link.length - 1 ? 'linkTagesItem' : 'linkLastItem']">
                    <a :href="item.htef">{{ item.name }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { toRefs } from 'vue';


const props = defineProps(['personalMenu'])
const { personalMenu } = toRefs(props)

console.log(props)

console.log(personalMenu)

</script>