<template lang="pug">
    div.toggle( @click.prevent.stop="action" )  
        input( type="checkbox" name="check" :id="id + 'toggle'" :checked="getter" class="input" )
        label( :for="id + 'toggle'" class="toggle__bar")
</template>

<script>
export default {
    props : ['getter','action','id']
}
</script>