import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import Select from '@mui/material/Select';


    const TableContainer = styled.div`
        width: 600px;
        height: 400px;

    `
    const Form = styled.form`

    `

function Table() {

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

    const [rows,setRows] = useState(realRows);

  return (
  <TableContainer>
      <form>

      </form>
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