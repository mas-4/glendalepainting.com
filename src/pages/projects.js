import React, { useState, useEffect } from 'react';
import { Layout, SEO } from '../components/global';
import { graphql } from 'gatsby';
import {
    Project,
    ProjectsFilter,
    ProjectsPagination,
} from '../components/projects';

const ProjectsPage = ({ data }) => {
    const [currentProjects, setCurrentProjects] = useState([]);
    const [chosenPage, setChosenPage] = useState(1);
    const [displayedProjects, setDisplayedProjects] = useState([]);
    const [selectedTab, setSelectedTab] = useState('show all');
    let projects = data.allMarkdownRemark.edges;
    let itemPerPage = 15

    useEffect(() => {
        let filteredProjects;
        if (selectedTab === 'show all') filteredProjects = projects;
        else if (selectedTab === 'new construction')
            filteredProjects = projects.filter(
                project =>
                    project.node.frontmatter.category === 'New Construction'
            );
        else
            filteredProjects = projects.filter(
                project => project.node.frontmatter.category === 'Repaint'
            );
        let filterSliced = filteredProjects.slice(0, itemPerPage);
        setCurrentProjects([...filteredProjects]);
        setDisplayedProjects([...filterSliced]);
        setChosenPage(1)
    }, [selectedTab, itemPerPage, projects]);

    const changePage = page => {
        setChosenPage(page)
        setDisplayedProjects(
            currentProjects.slice(itemPerPage * (page - 1), itemPerPage * page)
        );
        window.scroll(0,0)
    };

    return (
        <Layout>
            <SEO title="Projects" />
            <h1>A Few of our Projects</h1>
            <ProjectsFilter
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
            {displayedProjects.map(project => (
                <Project key={project.node.frontmatter.title} data={project.node.frontmatter} />
            ))}
            <ProjectsPagination
                changePage={changePage}
                currentProjects={currentProjects}
                itemPerPage={itemPerPage}
                chosenPage={chosenPage}
            />
        </Layout>
    );
};

export default ProjectsPage;

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        category
                        location
                        tags
                        title
                        featuredImage {
                            childImageSharp {
                                fluid(quality: 100, maxWidth: 1980) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
