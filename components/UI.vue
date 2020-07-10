<template>
    <div v-if="value" class="ui card">
        <div class="card-image">
            <n-link class="image is-1by1" :to="`/post/${value.id}`">
                <img :src="value.medias[0].sizes['thumb_247_247']" :alt="value.title">
            </n-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UI",
        props: {
            value: {
                default: null
            }
        }
    }
</script>

<style scoped>

</style>
