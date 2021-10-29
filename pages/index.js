import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import MySqlLogo from '../assets/mysql.png'
import Image from 'next/image'
import Table from '../src/Table'
export default function Index() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Image src={MySqlLogo} width={200} height={100} />
        <Typography variant="h4" component="h1" gutterBottom>
          Basic Commands
        </Typography>

        {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link> */}
        <Table />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
