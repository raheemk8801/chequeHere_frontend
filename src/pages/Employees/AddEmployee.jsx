import React from "react";
import { Box, 
        Typography, 
        TextField, 
        Grid,
        Checkbox,
        FormControlLabel,
        Button,
        Paper,
        MenuItem 
        } from "@mui/material";

const AddEmployee = () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return (
        <Box sx={{ p:3 }}>
        <Typography variant="h5" sx={{color: "#0E1F5E", fontWeight: "bold", mb: 3}}>Employee</Typography>

        <Paper sx={{ p: 4, borderRadius: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
        <Typography variant="h6" sx={{ color: "#4A6CF7", mb: 3 }}>Add Employee</Typography>

       {/* Personal Details */}
        <Typography sx={{ color: "#2EC4B6", fontWeight: "bold", mb: 2 }}>Personal Details</Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={6}><TextField fullWidth label="First Name" variant="filled" /></Grid>
          <Grid item xs={6}><TextField fullWidth label="Last Name" variant="filled" /></Grid>
          <Grid item xs={6}><TextField fullWidth label="Contact Number" variant="filled" /></Grid>
          <Grid item xs={6}><TextField fullWidth label="Gmail" variant="filled" /></Grid>
          <Grid item xs={6}><TextField fullWidth label="SIN Number" variant="filled" /></Grid>
          <Grid item xs={6}><TextField fullWidth label="Wage per hour" variant="filled" /></Grid>
        </Grid>

        {/* Bank Details */}
        <Typography sx={{ color: "#2EC4B6", fontWeight: "bold", mb: 2 }}>Bank Details</Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={6}><TextField fullWidth label="Full Name" variant="filled" /></Grid>
          <Grid item xs={6}><TextField fullWidth label="Account Number" variant="filled" /></Grid>
          <Grid item xs={6}><TextField fullWidth label="Institution Number" variant="filled" /></Grid>
          <Grid item xs={6}><TextField fullWidth label="Transit Number" variant="filled" /></Grid>
        </Grid>

        {/* Availability */}
        <Typography sx={{ color: "#2EC4B6", fontWeight: "bold", mb: 2 }}>Availability</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
          {days.map((day) => (
            <FormControlLabel key={day} control={<Checkbox />} label={day} />
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="outlined" sx={{ borderRadius: "20px", px: 4 }}>Cancel</Button>
          <Button variant="contained" sx={{ borderRadius: "20px", px: 4, bgcolor: "#4A6CF7" }}>Save</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddEmployee;