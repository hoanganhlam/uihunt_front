<template>
    <article class="media">
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
            <comment-card :feature="feature" v-for="comment in response.results" :key="comment.id" :value="comment"
                          @reply="reply" avatar-size="is-48x48"/>
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
            feature: {
                default: null
            },
            avatarSize: {
                default: 'is-64x64'
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
                    this.response = await this.$api['public_feature']['feedback_list'](this.feature.id, {
                        params: {
                            parent: this.value.id
                        }
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
