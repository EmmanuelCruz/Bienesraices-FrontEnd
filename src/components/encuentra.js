import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const Encuentra = () => {

  const ImageBackground = styled(BackgroundImage)`
    height: 300px;
  `

  const ImagenBg = styled.div`
    color: #FFF;
    height: 100%;
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  
  const { imagen } = useStaticQuery(graphql`
    query {
      imagen: file(relativePath: {eq: "encuentra.jpg"}){
        sharp: childImageSharp{
          fluid (maxWidth: 1500){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground
      tag='section'
      fluid={imagen.sharp.fluid}
      fadeIn='soft'
    >
      <ImagenBg>
        <h3>Encuentra la casa de tus sueños</h3>
        <p>15 años de experiencia</p>
      </ImagenBg>
    </ImageBackground>
  )
}

export default Encuentra
