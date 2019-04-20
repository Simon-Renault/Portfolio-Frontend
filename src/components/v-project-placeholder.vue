<template lang="pug">
section.project-placeholder
    .placeholder.title.inline
    .placeholder.subtitle.inline
    .text
        .p100.placeholder.inline
        .p100.placeholder.inline
        .p100.placeholder.inline
        .p100.placeholder.inline
        .p100.placeholder.inline
        .p100.placeholder.inline
        .p80.placeholder.inline
    .placeholder.subtitle.inline
    .text
        .p100.placeholder.inline
        .p100.placeholder.inline
        .p100.placeholder.inline
        .p100.placeholder.inline
        .p100.placeholder.inline
        .p100.placeholder.inline
        .p80.placeholder.inline
</template>


<style lang="scss" scoped>
.project-placeholder{
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 40px 12vw;
     @media screen and (min-width : $medium){
        padding: 40px 0;
    }
    @media screen and (min-width : $large){
        padding: 40px 50px;
    }
    .title{
        height: 60px;
        width: 80%;
        flex-shrink: 0;
        margin: 0 0 70px 0;
    }
    .subtitle{
        flex-shrink: 0;
        height: 30px;
        width: 60%;
    }
    .p80{
        flex-shrink: 0;
        height: 20px;
        width: 80%;
    }
    .p100{
        flex-shrink: 0;
        height: 20px;
        width: 100%;
        margin: 10px 0;
    }
    .text{
        margin: 40px 0 200px;
    }
}
</style>