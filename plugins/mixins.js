import Vue from 'vue'
import moment from "moment";

Vue.mixin({
    methods: {
        timeSince(date) {
            let seconds = moment().diff(this.momentTime(date), 'seconds', false);
            return this.convertTime(seconds)
        },
        convertTime(seconds) {
            var interval = Math.floor(seconds / 31536000);
            if (interval > 1) {
                return interval + " years";
            }
            interval = Math.floor(seconds / 2592000);
            if (interval > 1) {
                return interval + " month";
            }
            interval = Math.floor(seconds / 86400);
            if (interval > 1) {
                return interval + " day";
            }
            interval = Math.floor(seconds / 3600);
            if (interval > 1) {
                return interval + " hours";
            }
            interval = Math.floor(seconds / 60);
            if (interval > 1) {
                return interval + " minutes";
            }
            return Math.floor(seconds) + " seconds";
        },
        capitalizeFirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        convertName(user) {
            if (user === null) {
                return 'Anonymouse';
            }
            if (user.profile && user.profile.nick) {
                return user.profile.nick;
            }
            if (user.first_name || user.last_name) {
                return user.first_name + ' ' + user.last_name;
            }
            return user.username;
        },
        formatDate(dateStr) {
            return new moment(dateStr, 'YYYY-MM-DD').format('YYYY-MM-DD')
        },
        cleanData(data, fields) {
            let out = {}
            if (typeof fields === 'undefined') {
                fields = Object.keys(data)
            }
            fields.forEach(i => {
                if (typeof data[i] !== 'undefined') {
                    if (data[i] && ['created', 'updated', 'start_date', 'due_date'].includes(i)) {
                        out[i] = this.momentTime(data[i]).format('YYYY-MM-DD HH:mm')
                    } else if (data[i] && i === "options") {
                        out[i] = {}
                        for (let j in data[i]) {
                            if (['start_date', 'end_date'].includes(j)) {
                                out[i][j] = this.momentTime(data[i][j]).format('YYYY-MM-DD HH:mm')
                            } else {
                                out[i][j] = data[i][j]
                            }
                        }
                    } else if (Array.isArray(data[i])) {
                        out[i] = data[i].map(x => {
                            return x.id ? x.id : x
                        })
                    } else if (typeof data[i] === 'object' && data[i] && data[i].id) {
                        out[i] = data[i].id
                    } else {
                        out[i] = data[i]
                    }
                }
            })
            return out
        },
        cleanFilter(data, fields) {
            let out = {}
            if (typeof fields === 'undefined') {
                fields = Object.keys(data)
            }
            fields.forEach(i => {
                if (typeof data[i] !== 'undefined') {
                    if (Array.isArray(data[i])) {
                        out[i] = data[i].map(x => {
                            if (x.id) return x.id
                            else if (x.value) return x.value
                            else return x
                        })
                    } else if (typeof data[i] === 'object' && data[i] !== null) {
                        if (data[i].id) {
                            out[i] = data[i].id
                        } else if (typeof data[i].value !== 'undefined') {
                            out[i] = data[i].value
                        } else out[i] = data[i]
                    } else {
                        out[i] = data[i]
                    }
                }
            })
            return out
        },
        convertDate(date) {
            if (typeof date === 'string') {
                return new Date(date + ' UTC')
            }
            return null
        },
        momentTime(date) {
            return moment(date, 'YYYY-MM-DDTHH:mm').utc()
        },
        slugify(text, el = '-') {
            return text.toString().toLowerCase()
                .replace(/\s+/g, el)           // Replace spaces with -
                .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                .replace(/^-+/, '')             // Trim - from start of text
                .replace(/-+$/, '');            // Trim - from end of text
        },
        collaborateTitle(code) {
            let test = {
                "HUNTER": "Hunter",
                "CREATOR": "Creator",
                "DESIGNER": "Designer",
                "DEVELOPER": "Developer",
                "TESTER": "Tester",
                "MEMBER": "Collaborator"
            };
            return test[code];
        }
    },
    computed: {
        currentUser: {
            get() {
                return this.$store.getters['auth/getUser']
            },
            set() {

            }
        }
    }
});
