import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const HeroImage = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "jobs/BelleHarbor.jpg" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <Img fluid={data.file.childImageSharp.fluid} style={{ width: '100%' }} />
    )
}
export default HeroImage
