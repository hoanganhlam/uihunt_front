<template>
    <div>
        <section class="hero is-small">
            <div class="hero-body">
                <div class="container content small has-text-centered">
                    <div class="image is-128x128" style="margin: 0 auto">
                        <img src="https://demo.iveel.co/dawn/content/images/2020/02/icon.png" alt="">
                    </div>
                    <h1>
                        <span>{{ archive.term.id ? `${archive.term.title} - UI design samples` : 'UIHunt' }}</span>
                        <span class="tag" v-if="query.page > 1">Page {{ query.page }}</span>
                    </h1>
                    <div class="field">
                        <p class="subtitle" v-if="archive.term.description">{{ archive.term.description }}</p>
                        <span v-else-if="archive.term.id" class="tag is-medium">Sample design inspire to create the best product!</span>
                        <p class="subtitle" v-else>Explore ideas & inspiration for your great products.</p>
                    </div>
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
                    <div v-if="query.page === 1" class="level">
                        <div class="level-left">
                            <h4 class="widget_title">FEATURED DESIGN</h4>
                        </div>
                    </div>
                    <div v-if="query.page === 1" class="columns is-multiline">
                        <div class="column is-4" v-for="(ui, i) in archive.popular.results" :key="i">
                            <ui :value="ui"/>
                        </div>
                    </div>
                    <h4 class="widget_title">NEW DESIGN</h4>
                    <div class="columns is-multiline">
                        <div class="column is-3" v-for="(ui, i) in archive.newest.results" :key="i">
                            <ui :value="ui"/>
                        </div>
                    </div>
                    <b-pagination :total="archive.newest.count" :per-page="query.page_size" :current.sync="query.page">
                        <b-pagination-button
                            slot-scope="props"
                            :page="props.page"
                            :id="`page${props.page.number}`"
                            tag="router-link"
                            :href="`?page=${props.page.number}`"
                            :to="`?page=${props.page.number}`">
                            {{ props.page.number }}
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
                            <field-data module="taxonomy" v-model="form.terms" multiple icon="label"/>
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
import * as schema from "@/helper/schema";

export default {
    name: "Tag",
    watchQuery: true,
    data() {
        return {
            showCreate: false,
            currentPage: 1,
            form: {
                title: null,
                short_description: null,
                terms: [],
                medias: [],
                source_url: null
            },
            archive: {
                term: {},
                newest: {
                    results: [],
                    count: 0
                },
                popular: {
                    results: [],
                    count: 0
                },
                terms: []
            },
            query: {
                page_size: 12,
                page: 1,
                show_cms: true,
                order: "newest",
                post_type: "post",
                full: true,
                term: null
            },
        }
    },
    async fetch() {
        this.query.page = this.$route.query.page ? Number.parseInt(this.$route.query.page) : 1;
        if (this.$route.params.tag) {
            this.query.term = this.$route.params.tag
        }
        this.archive = await this.$axios.$post(`uihunt.com/posts/`, {
            param: this.query,
            schema: [
                "term",
                "terms",
                {
                    "popular": [
                        {
                            "results": schema.post_list
                        },
                        "count"
                    ]
                },
                {
                    "newest": [
                        {
                            "results": schema.post_list
                        },
                        "count"
                    ]
                }
            ]
        }, {
            params: {
                force: this.$route.query.force
            }
        });
    },
    head() {
        return {
            title: this.archive.term.id ? `${this.archive.term.title} Sample UI` : 'UIHunt - Inspire to the creator to make an awesome product',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.archive.term.id ? this.archive.term.description : 'Inspire to the creator to make an awesome product'
                }
            ]
        }
    },
    methods: {
        handleUpload(files) {
            this.form.medias = files;
        },
        async submit() {
            let data = this.cleanData(this.form);
            this.$api.ui.post(data);
            this.showCreate = false;
            this.$buefy.toast.open({
                message: 'Submit successfully!',
                type: 'is-success'
            })
        }
    },
    created() {
        if (this.tag) {
            this.form.terms.push(this.tag)
        }
    },
    computed: {
        isReady() {
            return !!(this.form.title && this.form.title.length && this.form.medias.length);
        }
    },
    watch: {
        "$route.query.page"() {
            this.$fetch();
        },
        "$route.params.tag"() {
            this.$fetch();
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
