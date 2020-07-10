<template>
    <article class="media comment">
        <figure class="media-left">
            <avatar icon="shield-account-outline" :value="value.user.profile.media"
                    :class="`${avatarSize} is-bordered`"/>
        </figure>
        <div class="media-content">
            <div class="content">
                <div class="level" style="margin-bottom: 0;">
                    <n-link class="is-bold" :to="`/profile/${value.user.username}`">{{convertName(value.user)}}</n-link>
                    <div class="level-right">
                        <div class="buttons">
                            <small class="button is-text is-small">{{timeSince(value.created)}} ago</small>
                        </div>
                    </div>
                </div>
                <p>{{value.content}}</p>
                <small class="button is-text is-small" @click="$emit('reply', value)">
                    <b-icon icon="reply" size="is-small"></b-icon>
                    <span>Reply</span>
                </small>
            </div>
            <comment :ui="ui" v-for="comment in response.results" :key="comment.id" :value="comment"
                     @reply="reply" avatar-size="is-24x24"/>
        </div>
    </article>
</template>

<script>
    export default {
        name: "Comment",
        props: {
            value: {
                default: null
            },
            ui: {
                default: null
            },
            avatarSize: {
                default: 'is-32x32'
            }
        },
        data() {
            return {
                response: {
                    results: [],
                    count: 0
                }
            }
        },
        methods: {
            reply(comment) {
                this.$emit('reply', comment);
            },
            async fetchChild() {
                if (this.value['has_child']) {
                    this.response = await this.$api['comment'].list({
                        ui: this.ui.id,
                        parent: this.value.id
                    })
                }
            }
        },
        created() {
            this.fetchChild();
        }
    }
</script>

<style scoped>

</style>
