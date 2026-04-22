import React from "react";
import { Box, Typography, TextField, Grid, Button, Paper, MenuItem } from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';

const AddExpense = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ color: "#0E1F5E", fontWeight: "bold", mb: 3 }}>Expenses</Typography>
      
      <Paper sx={{ p: 4, borderRadius: "24px" }}>
        <Typography variant="h6" sx={{ color: "#4A6CF7", mb: 3 }}>Add Expense</Typography>
        
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth select label="Supplier Name" variant="filled" sx={{ mb: 2 }}>
              <MenuItem value="1">Supplier A</MenuItem>
            </TextField>
            <TextField fullWidth type="date" label="Date" InputLabelProps={{ shrink: true }} variant="filled" sx={{ mb: 2 }} />
            <TextField fullWidth label="Description" variant="filled" sx={{ mb: 2 }} />
            <TextField fullWidth label="Amount" placeholder="$0000.00" variant="filled" sx={{ mb: 2 }} />
            <TextField fullWidth select label="Status" variant="filled">
                <MenuItem value="paid">Paid</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Upload Photo</Typography>
            <Box sx={{ 
              border: "2px dashed #E0E0E0", 
              borderRadius: "16px", 
              height: "250px", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center",
              bgcolor: "#FAFAFA"
            }}>
              <UploadFileIcon sx={{ fontSize: 48, color: "#ccc", mb: 1 }} />
              <Typography variant="body2" color="textSecondary">Drag and Drop files</Typography>
              <Typography variant="body2">or <span style={{ color: "#4A6CF7", cursor: "pointer" }}>choose file</span></Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 4 }}>
          <Button variant="outlined" sx={{ borderRadius: "20px", px: 4 }}>Cancel</Button>
          <Button variant="contained" sx={{ borderRadius: "20px", px: 4, bgcolor: "#4A6CF7" }}>Save</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddExpense;