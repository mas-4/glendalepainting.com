import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Order from '../data/projectsOrderJSON.js';
import { tags } from '../data/projectTags';
import {
    StateContext,
    setSelectedPage,
    setSelectedTab,
    changeFilters,
} from '../globalState';
import { LayoutScroll, SEO } from '../components/global';
import {
    Project,
    ProjectsFilter,
    ProjectsPagination,
    TagsFilter,
} from '../components/projects';

//Function to sort projects based on clients preference; order stored in data folder
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
    let ITEM_PER_PAGE = 15;
    const [{ pageInfo }, dispatch] = useContext(StateContext);
    console.log(pageInfo)
    //current-projects selected based on tabs/filters
    const [currentProjects, setCurrentProjects] = useState([]);
    //projects being shown on current page
    const [displayedProjects, setDisplayedProjects] = useState([]);
    //only want tags present for current projects being filtered
    const [currentTags, setCurrentTags] = useState([]);
    //Memoized so projects are only sorted once or when edges changes
    let sortedProjects = useMemo(
        () => sortProjects(data.allMarkdownRemark.edges),
        [data.allMarkdownRemark.edges]
    );

    //ref for a div inside layoutScroll to scroll into view on page change
    let scrollToDiv = useRef();

    useEffect(() => {
        let filteredProjects = sortedProjects;
        //if any filters have been selected
        if (pageInfo.filters.length > 0) {
            //get projects that have every filter in its tags
            filteredProjects = filteredProjects.filter(project => {
                let projectTags = project.node.frontmatter.tags;
                let allPresent = pageInfo.filters.every(tag =>
                    projectTags.includes(tag)
                );
                if (allPresent) return project;
            });
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
        //all filtering done, now get 15 that should show up on current page
        let filterSliced = filteredProjects.slice(
            ITEM_PER_PAGE * (pageInfo.page - 1),
            ITEM_PER_PAGE * pageInfo.page
        );

        setCurrentProjects(filteredProjects);
        setDisplayedProjects(filterSliced);
        
        let tagsDict = {}
        filteredProjects.forEach(project =>  {
            let projectTags = project.node.frontmatter.tags
            projectTags.forEach(tag => {
                tagsDict[tag] = (tagsDict[tag] || 0) + 1
            })
        })
        setCurrentTags(Object.entries(tagsDict))
        
        if (scrollToDiv.current)
            scrollToDiv.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
    }, [
        pageInfo.filters,
        pageInfo.page,
        pageInfo.tab,
        ITEM_PER_PAGE,
        sortedProjects,
    ]);

    const handleTagClick = (e, tag) => {
        e.preventDefault()
        if (pageInfo.filters.includes(tag))
            changeFilters(dispatch, 'remove', tag);
        else changeFilters(dispatch, 'add', tag);
    }

    return (
        <LayoutScroll ref={scrollToDiv}>
            <SEO title="Projects" />

            <ProjectsFilter
                selectedTab={pageInfo.tab}
                setSelectedTab={setSelectedTab}
                dispatch={dispatch}
            />
            <TagsFilter
                selectedFilters={pageInfo.filters}
                changeFilters={changeFilters}
                dispatch={dispatch}
                tags={currentTags}
                handleTagClick = {handleTagClick}
            />
            <ProjectsContainer size={displayedProjects.length}>
                {displayedProjects.map(project => (
                    <Project
                        key={project.node.frontmatter.title}
                        data={project.node.frontmatter}
                        slug={project.node.fields.slug}
                        handleTagClick = {handleTagClick}
                    />
                ))}
            </ProjectsContainer>
            <ProjectsPagination
                setSelectedPage={setSelectedPage}
                dispatch={dispatch}
                totalPages={Math.ceil(currentProjects.length / ITEM_PER_PAGE)}
                chosenPage={pageInfo.page}
            />
        </LayoutScroll>
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
    align-content: space-between;
    margin: 0 auto;

    //if less than 3 photos, left align them
    justify-content: ${({ size }) =>
        size < 3 ? 'flex-start' : 'space-between'};

    //if the last row has less than 3 photos, left align
    &::after {
        content: '';
        flex: 0 0 420px;
        margin: 10px;
    }
`;
