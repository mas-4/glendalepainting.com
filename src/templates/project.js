import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Layout, SEO } from '../components/global';
import styled from 'styled-components'

const Title = styled.h1`
    text-align: center;
`
const Picture = styled.div`
    width: 50%;
    margin: 0 auto;
`
const Description = styled.div`
    width: 50%;
    margin: 0 auto;
    p {
        font-size: 1.6rem;
        margin: 1rem;
    }
`
const Tag = styled.div`
    display: inline-block;
    margin: 1rem;
    background-color: ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.size1};
    width: auto;
    margin: 5px;
    padding: 3px 6px;
    border-radius: 5px;
`
const Tags = styled.div`
    margin: 0 auto;
    width: 50%;
    display: flex;
    justify-content: center;
`

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <div>
                <Picture>
                    <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                </Picture>
                <Title>{post.frontmatter.title}</Title>
                <Tags>
                    {post.frontmatter.tags.map(tag => (
                        <Tag>{tag}</Tag>
                    ))}
                </Tags>
                <Description>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </Description>
            </div>
        </Layout>
    );
};
export const query = graphql`
    query($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                tags
                featuredImage {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 960) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
