<template>
    <article class="media comment" v-if="ui">
        <figure class="media-left">
            <user-card only-avatar avatar-size="is-32x32" :value="currentUser ? currentUser : undefined"/>
        </figure>
        <div class="media-content">
            <div class="field">
                <p class="control">
                    <label>
                        <textarea v-model="comment" class="textarea" placeholder="Add a comment..."></textarea>
                    </label>
                </p>
            </div>
            <div class="field has-addons">
                <slot></slot>
                <div class="control">
                    <button class="button" @click="submit" :disabled="comment === null || comment === ''">
                        <b-icon icon="send-outline"></b-icon>
                        <span>Send</span>
                    </button>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "CommentForm",
        props: {
            ui: {
                default: null
            },
            parent: {
                default: null
            }
        },
        data() {
            return {
                comment: null
            }
        },
        methods: {
            submit() {
                this.$api['comment'].post({
                    ui: this.ui.id,
                    content: this.comment,
                    parent: this.parent ? this.parent.id : undefined
                }).then(res => {
                    this.$emit('posted');
                    this.comment = null;
                })
            }
        }
    }
</script>

<style lang="scss">
    .media.comment .media {
        padding-top: 0;
        border-top: 0;
    }

    .comment {
        .user {
            .media-left {
                margin-right: 0;
            }
        }
    }
</style>
