import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient(
    {
        projectId: import.meta.env.VITE_sanity_project_id,
        dataset: 'production',
        useCdn: true, 
        apiVersion: '2024-02-17',
        token: import.meta.env.VITE_sanity_deploy_token,
        ignoreBrowserTokenWarning: true,
    }
)

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export {client, urlFor}