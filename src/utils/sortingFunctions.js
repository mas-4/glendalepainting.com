import projectOrder from '../data/projectsOrderJSON.js';
import tagOrder from '../data/tagOrderJSON';

export const sortProjects = raw => {
    const specified = [];
    const unspecified = [];
    for (let el of raw) {
        let slug = el.node.fields.slug;
        if (projectOrder.includes(slug)) {
            specified.push(el);
        } else {
            unspecified.push(el);
        }
    }
    let orderedSpecified = specified.sort((a, b) =>
        projectOrder.indexOf(a.node.fields.slug) >
        projectOrder.indexOf(b.node.fields.slug)
            ? 1
            : -1
    );
    let orderedUnspecified = unspecified.sort((a, b) =>
        a.node.frontmatter.title > b.node.frontmatter.title ? 1 : -1
    );
    let projects = [...orderedSpecified, ...orderedUnspecified];

    return projects;
};

export const sortTags = raw => {
    const specified = [];
    const unspecified = [];

    for (let tag of raw) {
        if (tagOrder.includes(tag[0])) {
            specified.push(tag);
        } else {
            unspecified.push(tag);
        }
    }

    let orderedSpecified = specified.sort((a, b) =>
        tagOrder.indexOf(a[0]) > tagOrder.indexOf(b[0]) ? 1 : -1
    );
    let orderedUnspecified = unspecified.sort((a, b) => b[1] - a[1]);
    let projects = [...orderedSpecified, ...orderedUnspecified];

    return projects;
};


export const grabTags = (projects, category) => {
    const tags = []
    const tagsDict = {}
    
    for(let project of projects){
        if(category === 'Show All' || category === project.node.frontmatter.category){
            let tags = project.node.frontmatter.tags
            for(let tag of tags){
                tagsDict[tag] = (tagsDict[tag] || 0) + 1
            }
        }
    }

    for(let tag in tagsDict){
        tags.push([tag, tagsDict[tag]])
    }

    return tags
}