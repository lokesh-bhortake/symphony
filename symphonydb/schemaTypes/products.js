export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name:'images',
            title: 'Images',
            type: 'array',
            of: [{type : 'image'}],
        }
    ]
}