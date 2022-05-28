<template>
    <div>
        <h1 @click="jump">首页</h1>
    </div>
</template>
<script>
export default {
    methods: {
        jump() {
            this.$router.push('/detail')
        }
    }
}
</script>