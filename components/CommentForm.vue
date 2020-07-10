<template>
    <article class="media" v-if="feature">
        <figure class="media-left">
            <user-card only-avatar avatar-size="is-64x64" :value="currentUser"/>
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
        name: "Comment",
        props: {
            feature: {
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
                this.$api['public_feature']['feedback_post'](this.feature.id, {
                    content: this.comment,
                    parent: this.parent ? this.parent.id : undefined
                })
            }
        }
    }
</script>

<style scoped>

</style>
