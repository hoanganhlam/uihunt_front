<template>
    <div>
        <header class="">
            <div class="container">
                <nav class="navbar header" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <n-link class="navbar-item" to="/">UIHUNT</n-link>
                        <div class="navbar-item">
                            <tag-select/>
                        </div>
                        <div class="navbar-burger clickable" @click="activeMenu = !activeMenu"
                             v-bind:class="{'is-active': activeMenu}">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="navbar-menu" v-bind:class="{'is-active': activeMenu}">
                        <div class="navbar-start">
                            <a class="navbar-item">Inspiration</a>
                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <login-bar/>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <main class="main-content">
            <nuxt/>
        </main>
    </div>
</template>

<script>
    import TagSelect from "../components/TagSelect";

    export default {
        components: {TagSelect},
        data() {
            return {
                activeMenu: false
            }
        }
    }
</script>
