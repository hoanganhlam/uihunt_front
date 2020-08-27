<template>
    <div>
        <section class="hero is-light">
            <div class="hero-body">
                <div class="container content small has-text-centered">
                    <h1>{{ $route.params.username }}</h1>
                </div>
            </div>
        </section>
        <div class="hero">
            <div class="hero-body">
                <div class="container">
                    <h4 class="widget_title">{{ $route.params.username }}'s posts</h4>
                    <div class="columns is-multiline">
                        <div class="column is-3" v-for="(ui, i) in response.results" :key="i">
                            <ui :value="ui"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    async asyncData({$api, params}) {
        return {
            response: await $api.post.list({page_size: 16}),
        }
    },
    head() {
        return {
            title: this.$route.params.username
        }
    }
}
</script>

<style scoped>

</style>
