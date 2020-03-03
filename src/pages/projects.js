import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import {sortProjects, sortTags, grabTags} from '../utils/sortingFunctions'
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
import {breakpoints} from '../styles/breakpoints'

const ProjectsPage = ({ data }) => {
    let ITEM_PER_PAGE = 15;

    const [{ pageInfo }, dispatch] = useContext(StateContext);
    //current-projects selected based on tabs/filters
    const [currentProjects, setCurrentProjects] = useState([]);
    //projects being shown on current page
    const [displayedProjects, setDisplayedProjects] = useState([])
    //tags being shown based on current tab selected
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
        if (pageInfo.filter) {
            //get projects that have matching filter
            filteredProjects = filteredProjects.filter(project => {
                let projectTags = project.node.frontmatter.tags;
                if (projectTags.includes(pageInfo.filter)) return project;
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
        
        if (scrollToDiv.current)
            scrollToDiv.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
    }, [
        pageInfo.filter,
        pageInfo.page,
        pageInfo.tab,
        ITEM_PER_PAGE,
        sortedProjects,
    ]);
    
    useEffect(() => {
        let availableTags = grabTags(sortedProjects, pageInfo.tab)
        let sortedTags = sortTags(availableTags)
        setCurrentTags(sortedTags)
    }, [pageInfo.tab, sortedProjects]);

    const handleTagClick = (e, tag) => {
        e.preventDefault()
        if (pageInfo.filter === tag)
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
                selectedFilter={pageInfo.filter}
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
    max-width: 1344px;

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
