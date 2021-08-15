import React from "react";
import { useStaticQuery, graphql } from 'gatsby'


function Dashboard() {

    const data = useStaticQuery(graphql`
    query {
        site {
        siteMetadata {
            title
        }
        }
    }
    `
    )
    return (
        <div><p>{data.site.siteMetadata.title}</p></div>
    )
}

export default Dashboard