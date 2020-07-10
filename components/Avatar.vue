<template>
    <div class="image avatar relative" v-bind:class="{'initials': !isUpdating && !(data && data.sizes)}">
        <Upload v-if="isUpdating" class="upload" @done="handleUpload"></Upload>
        <img class="is-round" v-else-if="data && data.sizes"
             :src="cleanURI(data.sizes[size] ? data.sizes[size] : data.path)" alt="">
        <span v-else-if="name">{{avatarName(name, 2)}}</span>
        <b-icon v-else :icon="icon"></b-icon>
        <div v-if="canUpdate" class="medal" @click="isUpdating = !isUpdating">
            <b-icon size="is-small" :icon="isUpdating ? 'close' : 'upload'"></b-icon>
        </div>
        <div v-if="canUpdate && data" class="delete" @click="data = null"></div>
    </div>
</template>

<script>
    import Upload from "./Upload";

    export default {
        name: "Avatar",
        components: {
            Upload
        },
        props: {
            canUpdate: {
                type: Boolean,
                default: false
            },
            value: {
                default: null,
                type: Object
            },
            name: {
                default: null
            },
            icon: {
                default: 'image-frame',
                type: String
            },
            size: {
                default: 'thumb_128_128'
            }
        },
        data() {
            return {
                data: this.value,
                isUpdating: false
            }
        },
        methods: {
            handleUpload(files) {
                if (files.length) {
                    this.data = files[0]
                    this.isUpdating = false
                }
            },
            cleanURI(url) {
                if (url) {
                    return url.split("?")[0].split("#")[0];
                }
                return null
            },
            avatarName(name, length) {
                let matches = name.match(/\b(\w)/g);
                if (length) {
                    return matches.join('').substr(0, length)
                }
                return matches.join('')
            }
        },
        watch: {
            data() {
                this.$emit('input', this.data)
            },
            value() {
                this.data = this.value
            }
        }
    }
</script>

<style lang="scss">
    .avatar {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.initials.is-bordered {
            border: 1px solid #EEEEEE;
        }

        img {
            border-radius: 5px;
            min-height: unset;
            margin-bottom: 0;
        }

        .medal,
        .delete {
            z-index: 1;
            position: absolute;
            right: -.5rem;
        }

        .medal {
            top: .25rem;
            right: .5rem;
            cursor: pointer;
        }

        .delete {
            bottom: -.5rem;
            background-color: #ec3726;
        }

        .image-blank {
            min-height: 150px;
        }

        &:before {
            position: absolute;
            bottom: -.25rem;
            right: -.25rem;
            width: .65rem;
            height: .65rem;
            border-radius: 2px;
            content: ""
        }

        &.online:before {
            background: #d8ab34;
        }

        &.offline:before {
            background: #dddddd;
        }
    }

    .upload {
        width: 100%;
        height: 100%;

        input[type=file] {
            width: 100%;
            height: 100%;
        }

        .upload-draggable {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
</style>
