import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import { columns, rows } from '../commands/commands'
import '@material-ui/core/styles'
import { Box, withStyles } from "@material-ui/core";

const StyledDataGrid = withStyles({
  root: {
    "& .MuiDataGrid-renderingZone": {
      maxHeight: "none !important"
    },
    "& .MuiDataGrid-cell": {
      lineHeight: "unset !important",
      maxHeight: "none !important",
      whiteSpace: "normal"
    },
    "& .MuiDataGrid-row": {
      maxHeight: "none !important"
    }
  }
})(DataGrid);

export default function Table() {
  return (
    <div style={{ height: 620, width: '100%', marginBottom: 25 }}>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  )
}