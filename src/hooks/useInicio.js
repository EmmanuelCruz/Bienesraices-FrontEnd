import { useStaticQuery, graphql } from 'gatsby'

const useInicio = () => {

  const resultado = useStaticQuery(graphql`
    query {
      allStrapiPagina(filter: {nombre: {eq:"Inicio"}}){
        nodes {
          nombre
          id
          contenido
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
  `)

  return resultado.allStrapiPagina.nodes.map(inicio => ({
    nombre: inicio.nombre,
    contenido: inicio.contenido,
    imagen: inicio.imagen
  }))
}

export default useInicio
