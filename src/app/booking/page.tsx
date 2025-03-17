import React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import DateReserve from '@/components/DateReserve';
import styles from './booking.module.css';

export default function Booking() {
  return (
    <div className={styles.bookingForm}>
      <form>
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
          fullWidth
          margin="dense"  // This is valid for TextField
        />
        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
          fullWidth
          margin="dense"  // This is valid for TextField
        />
        <Select
          id="venue"
          fullWidth
          margin="dense"  // This is valid for Select
          defaultValue=""
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
        <DateReserve />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Book Venue
        </Button>
      </form>
    </div>
  );
}
