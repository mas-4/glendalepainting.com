import React, { useState, useEffect, useContext, useMemo } from 'react';
import { StateContext, setSelectedPage, setSelectedTab, changeFilters } from '../globalState';
import { Layout, SEO } from '../components/global';
import { graphql } from 'gatsby';
import {
    Project,
    ProjectsFilter,
    ProjectsPagination,
    TagsFilter,
} from '../components/projects';
import Order from '../data/projectsOrderJSON.js';
import styled from 'styled-components';

function sortProjects(raw) {
    const specified = [];
    const unspecified = [];
    for (let el of raw) {
        let slug = el.node.fields.slug;
        if (Order.includes(slug)) {
            specified.push(el);
        } else {
            unspecified.push(el);
        }
    }
    let orderedSpecified = specified.sort((a, b) =>
        Order.indexOf(a.node.fields.slug) > Order.indexOf(b.node.fields.slug)
            ? 1
            : -1
    );
    let orderedUnspecified = unspecified.sort((a, b) =>
        a.node.frontmatter.title > b.node.frontmatter.title ? 1 : -1
    );
    let projects = [...orderedSpecified, ...orderedUnspecified];

    return projects;
}

const ProjectsPage = ({ data }) => {
    const [{ pageInfo }, dispatch] = useContext(StateContext);
    const [currentProjects, setCurrentProjects] = useState([]);
    const [displayedProjects, setDisplayedProjects] = useState([]);

    let sortedProjects = useMemo(
        () => sortProjects(data.allMarkdownRemark.edges),
        [data.allMarkdownRemark.edges]
    );
    let itemPerPage = 15;

    useEffect(() => {
        let filteredProjects = sortedProjects;
        if(pageInfo.filters.length > 0){
            filteredProjects = filteredProjects.filter(project => {
                let tags = project.node.frontmatter.tags
                let allPresent = pageInfo.filters.every(tag => tags.includes(tag))
                if(allPresent)
                    return project
            })
        }
        
        if (pageInfo.tab === 'Repaint')
            filteredProjects = filteredProjects.filter(
                project => project.node.frontmatter.category === 'Repaint'
            );
        else if (pageInfo.tab === 'New Construction')
            filteredProjects = filteredProjects.filter(
                project =>
                    project.node.frontmatter.category === 'New Construction'
            );
        let filterSliced = filteredProjects.slice(
            itemPerPage * (pageInfo.page - 1),
            itemPerPage * pageInfo.page
        );

        setCurrentProjects(filteredProjects);
        setDisplayedProjects(filterSliced);
        window.scroll(0, 0);
    }, [pageInfo.filters, pageInfo.page, pageInfo.tab, itemPerPage, sortedProjects]);

    return (
        <Layout>
            <SEO title="Projects" />
            <h1 style={{ textAlign: 'center', marginBottom: '15px' }}>
                A Few of our Projects
            </h1>
            <ProjectsFilter
                selectedTab={pageInfo.tab}
                setSelectedTab={setSelectedTab}
                dispatch={dispatch}
            />
            <TagsFilter
                selectedFilters={pageInfo.filters}
                changeFilters ={changeFilters}
                dispatch={dispatch}
            />
            <ProjectsContainer size={displayedProjects.length}>
                {displayedProjects.map(project => (
                    <Project
                        key={project.node.frontmatter.title}
                        data={project.node.frontmatter}
                        slug={project.node.fields.slug}
                    />
                ))}
            </ProjectsContainer>
            <ProjectsPagination
                setSelectedPage={setSelectedPage}
                dispatch={dispatch}
                totalPages={Math.ceil(currentProjects.length / itemPerPage)}
                chosenPage={pageInfo.page}
            />
        </Layout>
    );
};

export default ProjectsPage;

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/projects/" } }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        category
                        location
                        tags
                        title
                        featuredImage {
                            childImageSharp {
                                fixed(quality: 100, width: 420, height: 280) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const ProjectsContainer = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({size}) => size < 3 ? 'flex-start' : 'center'};
    align-content: space-between;
    margin: 0 auto;

    &::after{
        content: "";
        flex: 0 0 420px;
        margin: 10px;
    }
`;
