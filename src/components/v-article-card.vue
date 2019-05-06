<template lang="pug">

li.root
    a.article-card( :href="url" )
        .grid 
            img(width="100%" height="100%" :alt="title" :src="image") 
            div.content
                h2.title {{title}}
                p.desc {{desc}}
         
           



</template>

<script>
export default {
    props : {
        url : {
            type : String,
            required : false
        },
        image : {
            type : String,
            required : false
        },
        title : {
            type : String,
            required : false
        },
        desc : {
            type : String,
            required : false
        }
    }
}
</script>

<style lang="scss" scoped>
.root{
    display: flex;
    margin-bottom: 50px;
}
.article-card{
    
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 4rem;
    @include card--hover();
    height: 200px;
    & > .grid{
        height: 100%;
    }
}


</style>