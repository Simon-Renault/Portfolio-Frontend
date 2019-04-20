<template lang="pug">
    nav.nav
        ul.nav__container
            router-link( tag="li" to="/" ) Home
            router-link( tag="li" to="/#about") About
            router-link( tag="li" to="/#contact") Contact
          
</template>

<style scoped lang="scss">
.nav{
    &__container{
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        list-style: none;
        justify-content: space-around;
        
    }
    & li{
        position: relative;
        padding: 0 0 0 50px;
        font-size: 4rem;
        font-weight: 700;
        color: $color-medium-grey ;
        transition: color .2s linear;
        cursor: pointer;
        &:before{
            content : '';
            top: 50%;
            left: -20px;
            position: absolute;
            min-height: 2px;
            width: 50px;
            background: $color-medium-grey ;
            border-radius: 2px;
            will-change: background,transform;
            transition: all .3s ease;
        }
        &.router-link-exact-active, &:hover{
            color: $color-dark-blue;
            &:before{
                transform: translate(10px,0);
                background: $color-dark-blue;
            }
        }
    }
}
</style>