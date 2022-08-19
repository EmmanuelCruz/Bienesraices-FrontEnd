import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const ListadoIconos = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 3rem auto 0 auto;

  li {
    display: flex;
    img {
      margin-right: 1rem;
    }
  }
`

const Iconos = ({wc, estacionamiento, habitaciones }) => {

  const { iconos } = useStaticQuery(graphql`
    query {
      iconos: allFile(filter: { relativeDirectory: {eq: "iconos"} }){
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  const imagenesIconos = iconos.edges

  return (
    <div>
      <ListadoIconos>
        <li>
          <img src={imagenesIconos[2].node.publicURL} alt='Icono wc' />
          <p>{wc}</p>
        </li>

        <li>
          <img src={imagenesIconos[1].node.publicURL} alt='Icono estacionamiento' />
          <p>{estacionamiento}</p>
        </li>

        <li>
          <img src={imagenesIconos[0].node.publicURL} alt='Icono habitaciones' />
          <p>{habitaciones}</p>
        </li>
      </ListadoIconos> 
    </div>
  )
}

export default Iconos
