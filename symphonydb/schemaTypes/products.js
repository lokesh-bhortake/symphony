export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{type : 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: "Neckbands", value: "neckbands" },
                    { title: "Wireless Headphones", value: "wireless-headphones" },
                    { title: "Wired Headphones", value: "wired-headphones" },
                    { title: "Wired Earphones", value: "wired-earphones" },
                ],
            },
        },
        {
            name: 'bestseller',
            title: 'Bestseller',
            type: 'boolean',
            initialValue: false,
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type : 'string'}],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 50)
          }
        },
    ]
}