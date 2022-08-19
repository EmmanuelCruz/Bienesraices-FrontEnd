import * as React from "react"
import Layout from "../components/layout"
import useInicio from "../hooks/useInicio"
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import BackgroundImage from "gatsby-background-image"
import Encuentra from "../components/encuentra"
import ListadoPropiedades from "../components/ListadoPropiedades"

const ImagenBackground = styled(BackgroundImage)`
  height: 600px;

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
const ImagenBgText = styled.h1`
  font-size: 2rem;
  margin: 0;
  max-width: 800px;
`

const IndexPage = () => {

  const inicio = useInicio()

  const { nombre, contenido, imagen } = inicio[0]

  return (
    <Layout>
      <ImagenBackground
        tag='section'
        fluid={imagen.localFile.sharp.fluid}
        fadeIn='soft'
      >
        <ImagenBg>
          <ImagenBgText>Venta de casas y departamentos exclusivos</ImagenBgText>
        </ImagenBg>
      </ImagenBackground>
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{nombre}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >{contenido}</p>
        </div>
      </main>

      <Encuentra />

      <ListadoPropiedades />  
    </Layout>
  )

}

export default IndexPage
