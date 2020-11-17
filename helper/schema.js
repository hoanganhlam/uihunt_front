export const post_detail = [
    "id",
    "pid",
    "title",
    "slug",
    "description",
    "content",
    "created",
    {
        "media": [
            "id",
            "title",
            "sizes"
        ]
    },
    {
        "medias": [
            "id",
            "title",
            "sizes"
        ]
    },
    {
        "post_related": [
            "title",
            "slug",
            "post_type",
            "content"
        ]
    },
    {
        "related": [
            "title",
            "pid",
            "slug",
            "created",
            {
                "media": [
                    "id",
                    "title",
                    "sizes"
                ]
            },
            {
                "medias": [
                    "id",
                    "title",
                    "sizes"
                ]
            },
        ]
    },
    "meta",
    "options",
    {
        "post_parent": [
            "meta"
        ]
    },
    {
        "terms": [
            "id",
            "taxonomy",
            {
                "term": [
                    "title",
                    "slug"
                ]
            }
        ]
    },
    "user",
    "post_type",
    "next",
    "previous"
]
export const post_list = [
    "id",
    "pid",
    "title",
    "slug",
    "created",
    {
        "media": [
            "title",
            "sizes"
        ]
    },
    {
        "medias": [
            "id",
            "title",
            "sizes"
        ]
    },
    {
        "meta": [
            "source"
        ]
    },
    "user"
]
