import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

const config = {
    projectId: 'gbeurng3',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-07-12',
}

const client = createClient(config);

// retrieve all projects:
async function getProjects() {
    const projects = await client.fetch('*[_type == "projects"] | order(description asc)');
    return projects;
}

// retrieve single project: 
async function getProject(slug) {
    const project = await client.fetch(`*[_type == "projects" && slug == "${slug}"]`);
    return project;
}

// set up sanity image-builder API:
const builder = imageUrlBuilder(client);

// get image URL:
function urlFor(source) {
    return builder.image(source);
}

export { getProjects, getProject, urlFor }