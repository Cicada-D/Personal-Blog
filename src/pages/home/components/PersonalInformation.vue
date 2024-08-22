<style scoped>
.outerBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    overflow-y: auto;
    /* overflow: hidden; */
}

.personal {
    display: flex;
    height: 55%;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
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
    margin-top: -2px;
}

.linkBox {
    display: flex;
    width: 100%;
    height: 70px;
    margin-top: 20px;
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
}

.linkTagesItem {
 
    margin: 5px;
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
                知了
            </div>
            <div class="description">
                真帅！！！！！！！！！！！
            </div>
        </div>

        <div class="linkBox">
            <button class="btn_orange">
                Q&A
            </button>

            <div class="tagesBox">
                <div class="tageItem">
                    <div class="font_18">123</div>
                    <div class="font_14">日志</div>
                </div>
                <div class="tageItem">
                    <div class="font_18">34</div>
                    <div class="font_14">分类</div>
                </div>
                <div class="tageItem">
                    <div class="font_18">21</div>
                    <div class="font_14">标签</div>
                </div>
            </div>

            <div class="linkTages">
                <div class="linkTagesItem">
                    <a href="#">Linkedin</a>
                </div>
                <div class="linkTagesItem">
                    <a href="#">Twitter</a>
                </div>
                <div class="linkTagesItem">
                    <a href="#">E-Mail</a>
                </div>
                <div class="linkTagesItem">
                    <a href="#">S.O.</a>
                </div>
                <div class="linkTagesItem">
                    <a href="#">RSS</a>
                </div>
                <div class="linkTagesItem">
                    <a href="#">CSDN</a>
                </div>
                <div class="linkLastItem">
                    <a href="#">Creative Commons</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>