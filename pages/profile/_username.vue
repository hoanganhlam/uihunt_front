<template>
    <div>
        <section class="hero is-light">
            <div class="hero-body">
                <div class="container content small has-text-centered">
                    <avatar size="thumb_247_247" :value="user.profile.media" class="is-128x128" style="margin: 0 auto"></avatar>
                    <h1>{{convertName(user)}}</h1>
                    <span class="tag is-medium">{{user.username}}</span>
                    <p v-if="user.profile.bio" class="subtitle">{{user.profile.bio}}</p>
                </div>
            </div>
        </section>
        <div class="hero">
            <div class="hero-body">
                <div class="container">
                    <h4 class="widget_title">{{convertName(user)}}'s posts</h4>
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
            let user = await $api.user.get(params.username);
            return {
                user,
                response: await $api.public_ui.list({user: user.id, page_size: 16}),
            }
        },
        head() {
            return {
                title: this.convertName(this.user)
            }
        }
    }
</script>

<style scoped>

</style>
