<template>
    <div v-if="value" class="ui card">
        <div class="card-image" v-if="value.medias && value.medias.length">
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
        overflow: hidden;

        .card-content {
            position: absolute;
            bottom: - 100%;
            left: 0;
            right: 0;
            padding: .75rem;
            background: #EEEEEE;

            h3 {
                margin-bottom: .5rem;
                font-weight: bold;
            }

            a {
                color: #333333;
            }
        }

        &:hover {
            .card-content {
                bottom: 0;
                transition: .3s;
            }
        }
    }
</style>
