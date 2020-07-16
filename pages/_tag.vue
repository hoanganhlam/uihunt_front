<template>
    <div>
        <section class="hero is-small">
            <div class="hero-body">
                <div class="container content small has-text-centered">
                    <div class="image is-128x128" style="margin: 0 auto">
                        <img src="https://demo.iveel.co/dawn/content/images/2020/02/icon.png" alt="">
                    </div>
                    <h1>
                        <span>{{tag ? `${tag.title} - UI design samples` : 'UIHunt'}}</span>
                        <span class="tag" v-if="page > 1">Page {{page}}</span>
                    </h1>
                    <span v-if="tag" class="tag is-medium">Sample design inspire to create the best product!</span>
                    <p class="subtitle" v-if="tag">{{tag.description}}</p>
                    <p class="subtitle" v-else>Explore ideas & inspiration for your great products.</p>
                    <div class="buttons" style="justify-content: center">
                        <div class="button is-medium" @click="showCreate = true">
                            <span>Submit</span>
                            <b-icon icon="upload"></b-icon>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="hero">
            <div class="hero-body">
                <div class="container">
                    <div v-if="page === 1" class="level">
                        <div class="level-left">
                            <h4 class="widget_title">FEATURED DESIGN</h4>
                        </div>
                        <div class="level-right">
                            <b-pagination
                                :current.sync="currentPage" simple
                                @change="fetch"
                                :total="featured.count" :per-page="3"></b-pagination>
                        </div>
                    </div>
                    <div v-if="page === 1" class="columns is-multiline">
                        <div class="column is-4" v-for="(ui, i) in featured.results" :key="i">
                            <ui :value="ui"/>
                        </div>
                    </div>
                    <h4 class="widget_title">NEW DESIGN</h4>
                    <div class="columns is-multiline">
                        <div class="column is-3" v-for="(ui, i) in response.results" :key="i">
                            <ui :value="ui"/>
                        </div>
                    </div>
                    <b-pagination :total="response.count" :per-page="8" :current.sync="page">
                        <b-pagination-button
                            slot-scope="props"
                            :page="props.page"
                            :id="`page${props.page.number}`"
                            tag="router-link"
                            :href="`?page=${props.page.number}`"
                            :to="`?page=${props.page.number}`">
                            {{props.page.number}}
                        </b-pagination-button>
                        <b-pagination-button
                            slot="previous"
                            slot-scope="props"
                            :page="props.page"
                            tag="router-link"
                            :href="`?page=${props.page.number}`"
                            :to="`?page=${props.page.number}`">
                            Previous
                        </b-pagination-button>
                        <b-pagination-button
                            slot="next"
                            slot-scope="props"
                            :page="props.page"
                            tag="router-link"
                            :href="`?page=${props.page.number}`"
                            :to="`?page=${props.page.number}`">
                            Next
                        </b-pagination-button>
                    </b-pagination>
                </div>
            </div>
        </div>
        <b-modal :active.sync="showCreate" :width="640" scroll="keep">
            <div class="card submit-form">
                <div class="card-content">
                    <upload @done="handleUpload" multiple height="200px"
                            text="Drop your files here or click to upload"/>
                    <div v-if="form.medias.length" class="columns is-multiline" style="margin-top: 1rem">
                        <div class="column is-3" v-for="img in form.medias" :key="img.id">
                            <div class="image">
                                <img :src="img.sizes['thumb_247_247']" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div class="content">
                        <b-field label="Title" label-position="on-border">
                            <b-input size="is-medium" placeholder="My new idea." v-model="form.title"></b-input>
                        </b-field>
                        <b-field label="Source" label-position="on-border">
                            <b-input size="is-medium" placeholder="https://yourdomain......"
                                     v-model="form.source_url"></b-input>
                        </b-field>
                        <b-field label="Description" label-position="on-border">
                            <b-input size="is-medium" type="textarea" placeholder="It's amazing?"
                                     v-model="form.short_description"></b-input>
                        </b-field>
                        <b-field label="Add some tags" label-position="on-border">
                            <field-data module="hash_tag" v-model="form.hash_tags" multiple icon="label"/>
                        </b-field>
                        <b-field>
                            <button :disabled="!isReady" class="button is-medium is-primary" @click="submit">Submit
                            </button>
                        </b-field>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "Tag",
        watchQuery: true,
        async asyncData({$api, params, query, store}) {
            let tag = params.tag ? await $api.hash_tag.get(params.tag) : null;
            let page = query.page ? Number.parseInt(query.page) : 1;
            await store.commit('config/SET_APP', tag);
            return {
                page,
                tag: tag,
                response: await $api.public_ui.list({hash_tags: tag ? [tag.id] : undefined, page_size: 8, page: page}),
                featured: await $api.public_ui.list({hash_tags: tag ? [tag.id] : undefined, page_size: 3})
            }
        },
        head() {
            return {
                title: this.tag ? `${this.tag.title} Sample UI` : 'UIHunt - Inspire to the creator to make an awesome product',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Bubblask is small application with many features that help you increase productivity by using pomodoro technique.'
                    }
                ]
            }
        },
        data() {
            return {
                showCreate: false,
                currentPage: 1,
                form: {
                    title: null,
                    short_description: null,
                    hash_tags: [],
                    medias: [],
                    source_url: null
                }
            }
        },
        methods: {
            handleUpload(files) {
                this.form.medias = files;
            },
            async submit() {
                let data = this.cleanData(this.form);
                let res = this.$api.ui.post(data);
                this.showCreate = false;
                this.$buefy.toast.open({
                    message: 'Submit successfully!',
                    type: 'is-success'
                })
            },
            async fetch(page) {
                this.currentPage = page;
                this.featured = await this.$api['public_ui'].list({
                    hash_tags: this.tag ? [this.tag.id] : undefined,
                    page_size: 3,
                    page: page
                })
            }
        },
        created() {
            if (this.tag) {
                this.form.hash_tags.push(this.tag)
            }
        },
        computed: {
            isReady() {
                return !!(this.form.title && this.form.title.length && this.form.medias.length);
            }
        }
    }
</script>

<style lang="scss">
    .submit-form {
        .upload .upload-draggable {
            min-height: 200px;
        }
    }
</style>
