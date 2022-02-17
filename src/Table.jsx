import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

    const TableContainer = styled.div`
        width: 500px;
        height: 400px;
    `
    const Title = styled.h1`
      font-size: 2rem;
      text-align: center;
      font-family: 'Roboto';
    `
    const Form = styled.form`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `

function Table() {

  /** columns e realrows são da table do MUI*/
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nome', headerName: 'Nome', width: 130 },
        { field: 'categoria', headerName: 'Categoria', width: 130 },
      ];

      const realRows = [
        { id: 1, nome: 'Big Mac', categoria: 'Hamburguer'},
        { id: 2, nome: 'Coca cola', categoria: 'Refrigerante'},
        { id: 3, nome: 'Big Bob', categoria: 'Hamburguer'},
        { id: 4, nome: 'McChicken', categoria: 'Hamburguer'},
        { id: 5, nome: 'Guaraná', categoria: 'Refrigerante'},
        { id: 6, nome: 'Ovomaltine', categoria: 'Milk Shake'},
        { id: 7, nome: 'Big King', categoria: 'Hamburguer'},
        { id: 8, nome: 'Fanta', categoria: 'Refrigerante'},
        { id: 9, nome: 'Chocolate', categoria: 'Milk Shake'},
        { id: 10, nome: 'Morango', categoria: 'Milk Shake'},
      ];

      let categoriasRepetidas = [];
      realRows.forEach(row => {
        categoriasRepetidas.push(row.categoria);
      });
      const categorias = [...new Set(categoriasRepetidas)];

    const [category,setCategory] = useState("Geral");
    const [rows,setRows] = useState(realRows);

  return (
  <TableContainer>
      <Title>Formulário Buscável</Title>
      <Form onSubmit={(event) =>{event.preventDefault();
          const categoriaAtual = (event.target.categoria.value==="Geral")? "":event.target.categoria.value;
          const nomeAtual = event.target.nome.value;
          const newRows = realRows.filter(row => row.nome.indexOf(nomeAtual) >= 0 && row.categoria.indexOf(categoriaAtual) >= 0);
          setRows(newRows);
        }}>
          <TextField name="nome" id="filled-basic" label="Filled" variant="filled" />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Categoria</InputLabel>
            <Select
              name="categoria"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              onChange={(event)=>{setCategory(event.target.value);}}
              value={category}
              label="Categoria"
            >
              <MenuItem value="Geral">
                <em>Geral</em>
              </MenuItem>
              {
                categorias.map((categoria,index)=>{
                  return (<MenuItem key={index} value={categoria}>{categoria}</MenuItem>);
                })
              }
            </Select>
          </FormControl>
          <Button type="submit" variant="contained">Buscar</Button>
      </Form>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
  </TableContainer>
  );
}

export default Table;