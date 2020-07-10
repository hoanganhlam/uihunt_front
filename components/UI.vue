<template>
    <div v-if="value" class="ui card">
        <div class="card-image">
            <n-link class="image is-1by1" :to="`/post/${value.id}`">
                <img :src="value.medias[0].sizes['thumb_247_247']" :alt="value.title">
            </n-link>
        </div>
        <div class="card-content">
            <h3 class="is-bold">{{value.title}}</h3>
            <user-card avatar-size="thumb_24_24" :value="value.user"></user-card>
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

<style lang="scss">
    .ui {
        .card-content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 3rem .75rem .75rem;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(84, 130, 135, 1) 100%);

            h3 {
                margin-bottom: .5rem;
                color: #EEEEEE;
                font-weight: bold;
            }

            a {
                color: #EEEEEE;
            }
        }
    }
</style>
