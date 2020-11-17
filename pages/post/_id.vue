<template>
    <div v-if="ui">
        <section class="hero">
            <div class="hero-body">
                <div class="container small">
                    <h1 class="title">{{ ui.title }}</h1>
                    <p class="subtitle">{{ ui.short_description }}</p>
                    <p>credit:
                        <n-link :to="`/profile/${ui.meta.author}`">{{ ui.meta.author }}</n-link>
                    </p>
                </div>
                <div class="container media-show">
                    <div class="columns">
                        <div class="column has-text-centered">
                            <div class="image">
                                <img :src="ui.medias[index].sizes['full_size']" :alt="ui.medias[index].title">
                            </div>
                        </div>
                        <div class="column is-3">
                            <div class="columns is-mobile is-multiline">
                                <div class="column is-6" v-for="(media, i) in ui.medias" :key="media.id">
                                    <div class="clickable" @click="index = i">
                                        <div class="image">
                                            <img :src="media.sizes['thumb_247_247']" :alt="media.title">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container small">
                    <div class="buttons" style="justify-content: center;">
                        <div v-if="ui['vote_object']" class="button is-medium"
                             v-bind:class="{'is-success': ui['vote_object'].is_voted}"
                             @click="vote">
                            <b-icon icon="heart"></b-icon>
                            <span>{{ ui['vote_object'].total }}</span>
                        </div>
                        <div v-if="ui['meta'] && ui['meta']['view_count']" class="button is-text">
                            {{ ui['meta']['view_count'] }} views
                        </div>
                        <a v-if="ui['meta'] && ui['meta']['source_url']" :href="ui['meta']['source_url']"
                           target="_blank" ref="nofollow" class="button is-text is-small">
                            <b-icon size="is-small" icon="link"></b-icon>
                        </a>
                    </div>
                    <b-field v-if="updating" label="Add some tags" label-position="on-border">
                        <field-data module="hash_tag" v-model="ui.hash_tags" multiple icon="label"/>
                    </b-field>
                    <div v-else class="tags" style="justify-content: center;">
                        <n-link class="tag is-medium" v-for="t in ui.terms" :key="t.id" :to="`/${t['term']['slug']}`">
                            <b-icon size="is-small" icon="label"></b-icon>
                            <span>{{ t['term']['title'] }}</span>
                        </n-link>
                    </div>
                    <div class="buttons" v-if="currentUser && currentUser.username === 'lam'"
                         style="justify-content: center">
                        <div v-if="updating" class="button" @click="submit">Save</div>
                        <div class="button is-text" @click="updating = !updating">{{ updating ? 'Cancel' : 'Update' }}
                        </div>
                    </div>
                    <div class="buttons" style="justify-content: center;">
                        <n-link v-if="ui.previous" :to="`/post/${ui.previous.pid}`" class="button is-large">
                            <b-icon icon="chevron-left"></b-icon>
                        </n-link>
                        <n-link v-if="ui.next" :to="`/post/${ui.next.pid}`" class="button is-large">
                            <b-icon icon="chevron-right"></b-icon>
                        </n-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero is-light">
            <div class="hero-body">
                <div class="container small">
                    <h4 class="widget_title">Response</h4>
                    <comment-form :ui="ui" :parent="commentParent" @posted="fetch()">
                        <div class="control" v-if="commentParent">
                            <div class="button" @click="commentParent = null">
                                <b-icon size="is-small" icon="window-close"></b-icon>
                                <span>Replying {{ convertName(commentParent.user) }}</span>
                            </div>
                        </div>
                    </comment-form>
                    <comment :ui="ui" v-for="comment in response.results" :key="comment.id" :value="comment"
                             @reply="reply" avatar-size="is-24x24"/>
                </div>
            </div>
        </section>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h4 class="widget_title">RELATED UI</h4>
                    <div class="columns is-multiline" v-if="ui.related">
                        <div class="column is-3" v-for="(u, i) in ui.related" :key="i">
                            <ui :value="u"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import * as schema from "@/helper/schema";

export default {
    name: "PostDetail",
    async fetch() {
        this.ui = await this.$axios.$post(`uihunt.com/posts/${this.$route.params.id}/`, {
            schema: schema.post_detail
        }, {
            params: {
                force: this.$route.query.force,
                uid: true
            }
        });
    },
    data() {
        return {
            ui: null,
            index: 0,
            commentParent: null,
            updating: false,
            response: {
                results: [],
                count: 0
            }
        }
    },
    head() {
        return {
            title: this.ui ? this.ui.title : 'UIHunt',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.ui ? this.ui.description : null
                }
            ]
        }
    },
    methods: {
        vote() {
            if (this.currentUser) {
                this.$api.ui.vote(this.ui.id, {}).then(res => {
                    this.ui["vote_object"].is_voted = res;
                    if (res) {
                        this.ui["vote_object"]['vote_count']++;
                    } else {
                        this.ui["vote_object"]['vote_count']--
                    }
                })
            } else {
                this.$buefy.toast.open({
                    message: 'Login required!',
                    type: 'is-warning'
                })
            }
        },
        reply(comment) {
            this.commentParent = comment;
        },
        async fetch() {
            this.response.results = [];
            this.response = await this.$api.comment.list({
                ui: this.ui.id
            })
        },
        submit() {
            this.$api.ui.update(this.ui.id, {
                hash_tags: this.ui.hash_tags.map(x => x.id)
            })
        }
    },
    mounted() {
        this.toTop();
    },
    watch: {
        $route(to, from) {
            this.toTop();
        },
        "$route.params.id"() {
            this.$fetch();
        }
    }
}
</script>

<style lang="scss">
</style>
