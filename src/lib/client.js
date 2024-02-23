import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient(
    {
        projectId: import.meta.env.VITE_sanity_project_id,
        dataset: 'production',
        useCdn: true, // set to `false` to bypass the edge cache
        apiVersion: '2024-02-17',
        token: import.meta.env.VITE_sanity_token,
        ignoreBrowserTokenWarning: true,
    }
)

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source)
}

export {client, urlFor}