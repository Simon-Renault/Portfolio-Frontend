<template lang="pug">
div.input-text( @paste.stop  @keydown.stop :class="{dark:dark,filed:filled}")
    
    input(  :type="type" 
            :value="value"
            @keyup="updated" 
            autocomplete="off"
            ref="input" 
            :id="id")

    label( :for="id") {{label}}

    
</template>

<script>
export default {
    props : {
        value : {
            type : String
        },
        dark : {
            type: Boolean
        },
        id : {
            type : [String,Number]
        },
        label : {
            type : String
        },
        type : {
            type : String,
            default: 'text'
        }
    },
    computed: {
        filled(){
            if(!this.value){
                return
            }
            return this.value.length > 0;
        }
    },
    methods: {
        updated(){
            this.$emit('input', this.$refs.input.value)
        },
        getValue(){
            return this.$refs.input.value
        }
    },
    
}
</script>

<style lang="scss" scoped>

</style>