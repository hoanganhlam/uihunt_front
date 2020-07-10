<template>
    <div>
        <header class="">
            <div class="container">
                <nav class="navbar header" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <n-link class="navbar-item" to="/">UIHUNT</n-link>
                        <div class="navbar-burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item">Topic</a>
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
    export default {
        data() {
            return {}
        }
    }
</script>
