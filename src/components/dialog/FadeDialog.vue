<style scoped>
.Fade{
    position: fixed;
    top: 0;
    left: 0;
}
</style>

<template>
    <div class="Fade">
        <Transition @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter"
            @enter-cancelled="onEnterCancelled" @before-leave="onBeforeLeave" @leave="onLeave"
            @after-leave="onAfterLeave" @leave-cancelled="onLeaveCancelled" :css="false">
            <slot name="silder"></slot>
        </Transition>
    </div>
    <!-- <div class="123">
        <Transition @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter"
            @enter-cancelled="onEnterCancelled" @before-leave="onBeforeLeave" @leave="onLeave"
            @after-leave="onAfterLeave" @leave-cancelled="onLeaveCancelled" :css="false">
            <slot name="silderAfter"></slot>
        </Transition>
    </div> -->
</template>

<script setup>
const props = defineProps(['state'])

function onBeforeEnter(el) {
    el.style.transition = `ease ${props.state.time / 1000}s all`
    el.style.width = `${props.state.box.width}`
    el.style.height = `${props.state.box.height}`
    el.style.backgroundColor = `${props.state.box.backgroundColor}`
    el.style.transform = `translateX(${"-" + props.state.box.width})`
}
function onEnter(el, done) {
    el.offsetHeight
    el.style.transform = `translateX(0)`
    setTimeout(() => {
        done();
    }, props.state.time);
}

function onAfterEnter(el) {
    el.style.transform = `translateX(0)`
}

function onEnterCancelled(el) {
    el.style.transform = `translateX(0)`
}

function onBeforeLeave(el) {
    el.style.transform = `translateX(0)`
}

function onLeave(el, done) {
    el.style.transform = `translateX(${"-" + props.state.box.width})`
    setTimeout(() => {
        done();
    }, props.state.time);
}

function onAfterLeave(el) {
    el.style.transform = `translateX(${"-" + props.state.box.width})`
}

function onLeaveCancelled(el) {
    el.style.transform = `translateX(${"-" + props.state.box.width})`
}
</script>

<style scoped>

</style>