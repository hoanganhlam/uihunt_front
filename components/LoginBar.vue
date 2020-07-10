<template>
    <div class="navbar-item">
        <b-modal :active.sync="showLogin" has-modal-card trap-focus destroy-on-hide scroll="keep">
            <div class="container small">
                <login @success="showLogin = !showLogin"/>
            </div>
        </b-modal>
        <div class="buttons" v-if="!Boolean(currentUser)">
            <button class="button is-primary" @click="handleClick(false)">
                <strong>Sign up</strong>
            </button>
            <button class="button is-light" @click="handleClick(true)">
                Log in
            </button>
        </div>
        <div class="grouped" v-else>
            <div class="button">
                <user-card avatar-size="is-24x24" :value="currentUser" clickable></user-card>
            </div>
            <div class="button is-text" @click="$auth.logout()">
                <b-icon size="is-small" icon="account-arrow-right-outline"></b-icon>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginBar",
        props: {
            layout: {
                default: 'private'
            }
        },
        data() {
            return {
                showLogin: false
            }
        },
        methods: {
            handleClick(flag) {
                this.showLogin = true;
            }
        }
    }
</script>

<style scoped>

</style>
