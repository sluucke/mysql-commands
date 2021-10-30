import * as React from 'react';
import loadable from '@loadable/component'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const Disclaimer = loadable(() => import('../src/Disclaimer'));
const Link = loadable(() => import('../src/Link'));
const Copyright = loadable(() => import('../src/Copyright'));
import MySqlLogo from '../assets/mysql.png'
import Image from 'next/image'
export default function About() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Image src={MySqlLogo} width={200} height={100} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            About us
          </Typography>
          <Link href="/" style={{ textDecoration: 'none', borderBottom: '1px solid #3D2C8D', color: '#3D2C8D' }}>Back to home page</Link>
          
        </div>

        {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link> */}
        <Typography variant="span" component="span">
          This website was done in order to help new users use the command line of the
          MySQL more easily. Want to contribute? Do you have any suggestions or idea? Call me on Discord: Sluucke#4334 or contribute in the <Link href="https://github.com/sluucke" target="_blank" rel='noreferrer'>Github</Link>
        </Typography>
        <Disclaimer />
        <Copyright />
      </Box>
    </Container>
  );
}
