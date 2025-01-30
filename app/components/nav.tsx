"use client";
import { Box, Stack, Container, Typography, IconButton, Drawer, List, ListItem, Hidden } from "@/node_modules/@mui/material/index";
import Link from "@/node_modules/next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const menuItems = () => (
        <>
            <Link href="/">Home</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">About</Link>
        </>
);

const Nav = () => {
    
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Stack>
            <Box sx={{ padding: "20px 0px", backgroundColor: "#fff", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)", }}>
                <Container>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{
                    padding: "8px 0",}}>
                        <Box component={Link} href="/">
                            <Typography variant="h6">
                                <>Next Js</>
                            </Typography>
                        </Box>

                        <Stack direction="row" gap={4} 
                            sx={{display: {xs: 'none', sm: 'flex', md: 'none', lg: 'flex', xl: 'flex'}}}
                        > 
                            <Link href="/">Home</Link>
                            <Link href="/">About</Link>
                            <Link href="/">Test</Link>
                        </Stack>
                        
                        {/* Hamburger menu */}
                        <Hidden lgUp>
                        <IconButton onClick={handleDrawerOpen}>
                            <MenuIcon/>
                        </IconButton>
                        </Hidden>
                    </Stack>
                </Container>
            </Box>
            
            <Hidden lgUp>
            <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
                <List>
                    <ListItem sx={{ width: 300 }} gap={4} sx={{
                        "& a:hover": {
                        color: "#FFFFF7",
                        transition: "ease-in-out 0.6s", 
                        },
                    }}>
                        <Stack direction="column">
                            <Link href="/">Home</Link>
                            <Link href="/">About</Link>
                            <Link href="/">Test</Link>
                        </Stack>
                    </ListItem>
                </List>
            </Drawer>
            </Hidden>
        </Stack>
    );
};

export default Nav;