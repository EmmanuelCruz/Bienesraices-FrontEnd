const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {

  const resultado = await graphql(`
    query {
      allStrapiPropiedad {
        nodes {
          nombre
          id
        }
      }
      allStrapiPagina{
        nodes {
          nombre
          id
        }
      }
    }
  `)
  
  if(resultado.errors){
    reporter.panic('No hubo resultados', resultado.errors)
  }
  
  const datos = JSON.stringify(resultado)
  const propiedades = resultado.data.allStrapiPropiedad.nodes
  const paginas = resultado.data.allStrapiPagina.nodes
  const { createPage } = actions

  paginas.forEach(pagina => {
    createPage({
      path: urlSlug(pagina.nombre),
      component: require.resolve("./src/components/Paginas.js"),
      context: {
        id: pagina.id
      },
      defer: true,
    })
  })

  propiedades.forEach(propiedad => {
    createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve("./src/components/Propiedades.js"),
      context: {
        id: propiedad.id
      },
      defer: true,
    })
  })

  propiedades.forEach(propiedad => {
    createPage({
      path: `propiedades/${urlSlug(propiedad.nombre)}`,
      component: require.resolve("./src/components/Propiedades.js"),
      context: {
        id: propiedad.id
      },
      defer: true,
    })
  })

  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
}
