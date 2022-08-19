import React from 'react'
import Iconos from './Iconos'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import Layout from './layout'
import { graphql } from 'gatsby'

const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px){
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

const SideBar = styled.aside`
  .precio {
    font-size: 2rem;
    color: #75AB00;
  }
  .agente {
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75AB00;
    padding: 3rem;
    color: #FFF;

    p {
      margin: 0;
    }
  }
  
`

export const query = graphql`
  query($id:String!) {
    allStrapiPropiedad(filter: {id: {eq: $id}}){
      nodes {
        nombre
        estacionamiento
        descripcion {
          data {
            descripcion
          }
        }
        wc
        cantidad
        precio
        agente {
          nombre
          telefono
          email
        }
        imagen {
          localFile{
            sharp: childImageSharp {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
          }
        }
      }
    }
  }
`

const Propiedades = ( {data: { allStrapiPropiedad : {nodes}}} ) => {

  const {nombre, cantidad, estacionamiento, precio, wc, imagen, descripcion, agente } = nodes[0]

  return (
    <Layout>
      <h1>{nombre}</h1>

      <Contenido>
        <main>
          <Image fluid={imagen.localFile.sharp.fluid} />
          <p>{descripcion.data.descripcion}</p>
        </main>
        <SideBar>
          <p className='precio'>${precio}</p>

          <Iconos 
            wc={wc}
            estacionamiento={estacionamiento}
            habitaciones={cantidad}
          />

          <div className='agente'>
            <h2>Vendedor:</h2>
            <p>{agente.nombre}</p>
            <p>Tel: {agente.telefono}</p>
            <p>Email: {agente.email}</p>
          </div>
        </SideBar>
      </Contenido>
    </Layout>
  )
}

export default Propiedades
