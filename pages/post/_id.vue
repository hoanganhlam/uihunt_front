<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container small">
                    <h1 class="title">{{ui.title}}</h1>
                    <p class="subtitle">{{ui.short_description}}</p>
                    <user-card username :value="ui.user"></user-card>
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
                        <div class="button is-medium" v-bind:class="{'is-success': ui.is_voted}" @click="vote">
                            <b-icon icon="heart"></b-icon>
                            <span>{{ui['vote_count']}}</span>
                        </div>
                        <div v-if="ui['options'] && ui['options']['view_count']" class="button is-text">
                            {{ui['options']['view_count']}} views
                        </div>
                        <a v-if="ui['options'] && ui['options']['source_url']" :href="ui['options']['source_url']"
                           target="_blank" ref="nofollow" class="button is-text is-small">
                            <b-icon size="is-small" icon="link"></b-icon>
                        </a>
                    </div>
                    <b-field v-if="updating" label="Add some tags" label-position="on-border">
                        <field-data module="hash_tag" v-model="ui.hash_tags" multiple icon="label"/>
                    </b-field>
                    <div v-else class="tags" style="justify-content: center;">
                        <n-link class="tag is-medium" v-for="tag in ui.hash_tags" :key="tag.id" :to="`/${tag.slug}`">
                            <b-icon size="is-small" icon="label"></b-icon>
                            <span>{{tag.title}}</span>
                        </n-link>
                    </div>
                    <div class="buttons" v-if="currentUser && currentUser.username === 'lam'"
                         style="justify-content: center">
                        <div v-if="updating" class="button" @click="submit">Save</div>
                        <div class="button is-text" @click="updating = !updating">{{updating ? 'Cancel' : 'Update'}}
                        </div>
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
                                <span>Replying {{convertName(commentParent.user)}}</span>
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
    export default {
        name: "PostDetail",
        async asyncData({$api, params}) {
            let ui = await $api.public_ui.get(params.id);
            return {
                ui: ui,
                response: await $api.comment.list({ui: ui.id})
            }
        },
        data() {
            return {
                index: 0,
                commentParent: null,
                updating: false
            }
        },
        head() {
            return {
                title: this.ui ? this.ui.title : 'UIHunt',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.ui.short_description
                    }
                ]
            }
        },
        methods: {
            vote() {
                if (this.currentUser) {
                    this.$api.ui.vote(this.ui.id, {}).then(res => {
                        this.ui.is_voted = res;
                        if (res) {
                            this.ui['vote_count']++;
                        } else {
                            this.ui['vote_count']--
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
            }
        }
    }
</script>

<style lang="scss">
</style>
