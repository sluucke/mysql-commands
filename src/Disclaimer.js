import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';


export default function ProTip() {
  return (
    <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary">
      <PriorityHighIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
      Disclaimer: This site is not the official MySQL website to access it <Link href="https://www.mysql.com/" target="_blank" rel="noreferrer">click here</Link>
    </Typography>
  );
}
