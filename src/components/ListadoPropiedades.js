import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import usePropiedades from '../hooks/usePropiedades'
import PropiedadPreview from './PropiedadPreview'
import styled from '@emotion/styled'
import useFiltro from '../hooks/useFiltro'

const Propiedades = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 480px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
  }

  @media (min-width: 768px){
    grid-template-columns: repeat(3, 1fr);
  }
`
const ListadoPropiedades = () => {

  const resultado = usePropiedades()
  const [propiedades] = useState(resultado)
  const [filtradas, setFiltradas] = useState([])

  const { categoria, FiltroUI } = useFiltro()

  useEffect(() => {
    if(categoria){
      const filtro = propiedades.filter(prop => prop.categoria.nombre === categoria)
      setFiltradas(filtro)
    } else {
      setFiltradas(propiedades)
    }
  }, [categoria, propiedades])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >Propiedades</h2>

      {FiltroUI()}

      <Propiedades>
        {filtradas.map( propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </Propiedades>
    </>
  )
}

export default ListadoPropiedades
