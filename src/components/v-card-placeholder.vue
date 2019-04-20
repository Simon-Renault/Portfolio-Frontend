<template lang="pug">
article.project-card.pl
    .project-card__content
        div.project-card__img.placeholder
        .project-card__infos
            div
               .placeholder.a.inline
               .placeholder.b.inline
</template>


<style lang="scss" scoped>
.pl{
    .a{
        height: 20px;
        width: 30rem;
        flex-shrink: 0;
        margin: 0 0 10px 0;
    }
    .b{
        height: 20px;
        width: 50%;
    }
}
</style>