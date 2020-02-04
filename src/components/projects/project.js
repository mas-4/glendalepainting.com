import React from 'react'
import Img from 'gatsby-image'

export const Project = ({data}) => {
    return (
        <div>
            <h3>{data.title}</h3>
            {data.featuredImage && <Img fluid={data.featuredImage.childImageSharp.fluid} />}
            <h4>{data.tags}</h4>
        </div>
    )
}
