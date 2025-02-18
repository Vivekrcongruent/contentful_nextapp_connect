import { Container, CssBaseline, Grid2, Stack, Typography } from "@/node_modules/@mui/material/index";
import Link from "@/node_modules/next/link";
import React from "react";
import '../../app/components.css';


export default function StickyFooter() {
  return (
    <div className='footer'>
      <footer>
        <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 16 }}>
        <Grid2 size={4}>
          <Stack>
            <Link href="/">Privacy Policy</Link>
          </Stack>
        </Grid2>
        <Grid2 size={4}>
          <Stack>
            <Link href="/" variant="h2">Whats new?</Link>
            <Link href="/">Firebase</Link>
            <Link href="/">React</Link>
            <Link href="/">Vue</Link>
            <Link href="/">meteor</Link>
            <Link href="/">Express</Link>
          </Stack>
        </Grid2>
        <Grid2 size={4}>
          <Stack>
            <Link href="/" variant="h2">Store</Link>
            <Link href="/">Power center</Link>
            <Link href="/">Support</Link>
            <Link href="/">Returns</Link>
            <Link href="/">Tracking</Link>
          </Stack>
        </Grid2>
        <Grid2 size={4}>          
          <Stack>
            <Link href="/" variant="h2">Business</Link>
            <Link href="/">Cloud</Link>
            <Link href="/">Security</Link>
            <Link href="/">Azure</Link>
            <Link href="/">Dynamics</Link>
          </Stack></Grid2>
        </Grid2>
      </footer>
    </div>
  );
}
