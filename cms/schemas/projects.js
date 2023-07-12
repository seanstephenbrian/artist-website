export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                }
            ]
        }
    ]
}