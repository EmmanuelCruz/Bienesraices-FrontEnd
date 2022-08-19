import { useStaticQuery, graphql } from 'gatsby'

const usePropiedades = () => {

  const propiedades = useStaticQuery(graphql`
    query {
      allStrapiPropiedad {
        nodes {
          nombre
          descripcion {
            data {
              descripcion
            }
          }
          id
          wc
          precio
          estacionamiento
          cantidad
          categoria {
            nombre
          }
          agente {
            nombre
            telefono
            email
          }
          imagen {
            localFile{
              sharp: childImageSharp {
                  fluid(maxWidth: 1200, maxHeight: 400) {
                      ...GatsbyImageSharpFluid_withWebp
                  }
              }
            }
          }
        }
      }
    }
  `)
  
  return propiedades.allStrapiPropiedad.nodes
}

export default usePropiedades
