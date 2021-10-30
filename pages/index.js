import * as React from 'react';
import loadable from '@loadable/component'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const ProTip = loadable(() => import('../src/ProTip'));
const Link = loadable(() => import('../src/Link'));
const Copyright = loadable(() => import('../src/Copyright'));
const Table = loadable(() => import('../src/Table'));
import MySqlLogo from '../assets/mysql.png'
import Image from 'next/image'
export default function Index() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Image src={MySqlLogo} width={200} height={100} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Basic Commands
          </Typography>
          <Link href="/about" style={{ textDecoration: 'none', borderBottom: '1px solid #3D2C8D', color: '#3D2C8D' }}>About Us</Link>
        </div>

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
