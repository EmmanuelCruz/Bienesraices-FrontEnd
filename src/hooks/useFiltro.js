import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const Formulario = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid #e1e1e1;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`

const Select = styled.select`
  font-family: 'Lato', sans-serif;
  border: none;
  padding: 1rem;
  appearance: none;
  flex: 1;
`

const useFiltro = () => {

  const [categoria, setCategoria] = useState('')

  const resultado = useStaticQuery(graphql`
    query {
      allStrapiCategoria{
        nodes {
          nombre
          id
        }
      }
    }
  `)

  const categorias = resultado.allStrapiCategoria.nodes

  const FiltroUI = () => (
    <Formulario>
      <Select
        onChange={e => setCategoria(e.target.value)}
        value={categoria}
      >
        <option value=''>-- Filtrar --</option>

        {categorias.map(opcion => (
          <option key={opcion.id}>{opcion.nombre}</option>
        ))}
      </Select>
    </Formulario>
  )

  return {
    categoria,
    FiltroUI
  }
}

export default useFiltro
