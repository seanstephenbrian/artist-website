import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

const config = {
    projectId: 'gbeurng3',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-07-12',
}

const client = createClient(config);

const builder = imageUrlBuilder(client);

// retrieve projects:
async function getProjects() {
    const projects = await client.fetch('*[_type == "projects"] | order(description asc)');
    return projects;
}

export { getProjects }