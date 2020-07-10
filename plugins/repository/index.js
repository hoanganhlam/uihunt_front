const RestfulRepo = (app, item) => {
    let out = {
        list: async (query) => {
            let q = {};
            Object.keys(query).forEach(field => {
                if (Array.isArray(query[field])) {
                    q[field] = query[field].toString()
                } else {
                    q[field] = query[field]
                }
            });
            return await app.$axios.$get(`/${item.space}/${item.endpoint}/`, {params: q}).then(res => {
                if (res.results === null) {
                    res.results = []
                }
                return res
            });
        },
        post: async (body) => {
            return await app.$axios.$post(`/${item.space}/${item.endpoint}/`, body)
        },
        get: async (id, query) => {
            return await app.$axios.$get(`/${item.space}/${item.endpoint}/${id}/`, query)
        },
        update: async (id, body) => {
            return await app.$axios.$put(`/${item.space}/${item.endpoint}/${id}/`, body)
        },
        delete: async (id) => {
            return await app.$axios.$delete(`/${item.space}/${item.endpoint}/${id}/`)
        }
    };
    if (item.callbacks) {
        item.callbacks.forEach(callback => {
            if (callback.hasId) {
                out[callback.name] = async (id, body) => {
                    return await app.$axios[callback.method](`/${item.space}/${item.endpoint}/${id}/${callback.endpoint}`, body)
                }
            } else {
                out[callback.name] = async (body) => {
                    return await app.$axios[callback.method](`/${item.endpoint}/${callback.endpoint}`, body)
                }
            }

        })
    }
    return out
};

const apis_module = [
    {
        space: 'activity',
        endpoint: 'follow',
        name: 'follow'
    },
    {
        space: 'activity',
        endpoint: 'actions',
        name: 'activity',
        callbacks: [
            {
                hasId: true,
                name: 'vote',
                method: '$post',
                endpoint: 'vote'
            }
        ]
    },
    {
        space: 'activity',
        endpoint: 'config',
        name: 'config',
        methods: {}
    },
    {
        space: 'auth',
        endpoint: 'users',
        name: 'user',
        methods: {}
    },
    {
        space: 'media',
        endpoint: 'medias',
        name: 'media',
        methods: {}
    },
    {
        space: 'app',
        endpoint: 'applications',
        name: 'application',
        methods: {}
    },
    {
        space: 'app',
        endpoint: 'collaborations',
        name: 'collaboration',
        methods: {}
    },
    {
        space: 'app',
        endpoint: 'features',
        name: 'feature',
        methods: {}
    },
    {
        space: 'public',
        endpoint: 'features',
        name: 'public_feature',
        callbacks: [
            {
                hasId: true,
                name: 'feedback_list',
                method: '$get',
                endpoint: 'feedback'
            },
            {
                hasId: true,
                name: 'feedback_post',
                method: '$post',
                endpoint: 'feedback'
            },
            {
                hasId: true,
                name: 'rate',
                method: '$post',
                endpoint: 'rate'
            }
        ]
    },
    {
        space: 'public',
        endpoint: 'applications',
        name: 'public_application',
        methods: {}
    },
];

export default function (app, inject) {
    const API = {};
    apis_module.forEach(item => {
        API[item.name] = RestfulRepo(app, item);
    });
    app.$api = API;
    inject('api', API);
}
