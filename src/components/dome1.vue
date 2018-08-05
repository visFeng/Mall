<template>
    <div>
        <button @click="increament">+</button>
        <button @click="decreament">-</button>
        <P>{{num}}</P>
    </div>
</template>

<script>
export default {
    props: ['num'],
    data() {
        return {
            msg: 'hello vue',
            num: 0
        }
    },
    methods: {
        increament() {
            this.$emit("incre");
        },
        decreament() {
            // this.num--
            this.$ ("decre");
        }
    }
}
</script>

