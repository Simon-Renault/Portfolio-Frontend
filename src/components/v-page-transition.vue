<template lang="pug">
    .page-transition


</template>

<script>
    export default {
        watch : {
            '$route' (to,from){
                console.log(to === from)
            }
        }
    }
</script>

<style scoped>

</style>