<template>
    <div>
        <b-dropdown aria-role="list">
            <button class="button is-text" type="button" slot="trigger">
                <template>
                    <b-icon icon="chevron-right"></b-icon>
                    <span>{{app ? app.term.title : 'Select Topic'}}</span>
                </template>
            </button>
            <b-dropdown-item custom aria-role="menuitem">
                <b-field>
                    <b-input @input="delay_search" expanded placeholder="Search"></b-input>
                </b-field>
            </b-dropdown-item>
            <hr class="dropdown-divider">
            <b-dropdown-item  has-link aria-role="menuitem" v-for="app in response.results" :key="app.id">
                <n-link :to="`/${app['term']['slug']}`">
                    <div class="media">
                        <div class="media-content">
                            <h3>{{app['term'].title}}</h3>
                        </div>
                    </div>
                </n-link>
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    import {debounce} from "lodash";

    export default {
        name: "TagSelect",
        data() {
            return {
                response: {
                    results: [],
                    count: 0
                },
            }
        },
        methods: {
            async fetch(text) {
                this.response = await this.$api['taxonomy'].list({
                    page_size: 5,
                    search: text
                });
            },
            delay_search: debounce(function (text) {
                this.fetch(text)
            }, 800)
        },
        computed: {
            app() {
                return this.$store.state.config.app;
            }
        },
        created() {
            if (process.client) {
                this.fetch();
            }
        }
    }
</script>

<style lang="scss">
</style>
