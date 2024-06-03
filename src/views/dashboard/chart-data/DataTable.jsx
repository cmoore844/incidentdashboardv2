import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';

//JSON data import
import incident_records from '../../../api/data/incident_event_logs_truncated100.json'

//useState hook to intialize the state of data within the empty array

//create the columns for the table 
const columns = [
  { field: 'number', headerName: 'ID', width: 100 },
  { field: 'incident_state', headerName: 'INC STATE', width: 100 },
  { field: 'active', headerName: 'ACTIVE', width: 100 },
  { field: 'location', headerName: 'LOCATION', width: 110 },
  { field: 'impact', headerName: 'IMPACT', width: 100 },
  { field: 'category', headerName: 'CATEGORY', width: 100 },
  { field: 'opened_at', headerName: 'DATE OPENED', width: 100 },
];


//JSON Data
const rows = incident_records.map(record => ({
  id: uuidv4(), //will insert unique ID, NOT based on INC record number 
  number: record.number,
  incident_state: record.incident_state,
  active: record.active,
  impact: record.impact,
  location: record.location,
  category: record.category,
  made_sla: record.made_sla,
  caller_id: record.caller_id,
  opened_at: record.opened_at
})
);

export default function DataTable() {
  return (
    <div style={{ height: 600, width: 830}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 30, 50]}
      />
    </div>
  );
}