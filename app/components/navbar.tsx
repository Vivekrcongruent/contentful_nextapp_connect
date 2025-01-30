"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

// humber menu props typescript interface
interface THamburgerMenuProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

// all menu items here. you can customize or add as your need
const menuItems = (
  <>
    <Typography component={Link} href="/" fontWeight={600} color="purple">
      Home
    </Typography>
    <Typography
      component={Link}
      href="/menu-one"
      fontWeight={600}
      color="purple"
    >
      Menu 1
    </Typography>
    <Typography
      component={Link}
      href="/menu-two"
      fontWeight={600}
      color="purple"
    >
      Menu 2
    </Typography>
    <Typography
      component={Link}
      href="/menu-three"
      fontWeight={600}
      color="purple"
    >
      Menu 3
    </Typography>
  </>
);

// navbar component start
const Navbar = () => {
  // modal state
  const [open, setOpen] = useState<boolean>(false);

  // drawer open function
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // drawer close function
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Stack>
      {/* navbar start */}
      <Box
        sx={{
          backgroundColor: "#f6cefc",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          padding: "20px 0px", // adjust padding according to your need
          "& a": {
            textDecoration: "none",
          },
        }}
      >
        <Container>
          {/* navbar stack */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              padding: "8px 0",
            }}
          >
            {/* logo */}
            <Box component={Link} href="/" color="purple">
              <Typography fontWeight={600} variant="h5">
                Your <Box component="span">Brand Logo</Box>
              </Typography>
            </Box>

            {/* menu items start */}
            <Stack
              direction="row"
              gap={4}
              alignItems="center"
              sx={{
                "& a:hover": {
                  textDecoration: "underline",
                  transition: "ease-in-out 0.2s",
                },
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            >
              {/* menu items rendered here*/}
              {menuItems}
            </Stack>

            {/* Hamburger Menu */}
            <Hidden lgUp>
              {/* custom hamburger menu component. see below in this component */}
              <HamburgerMenu open={open} handleDrawerOpen={handleDrawerOpen} />
            </Hidden>
          </Stack>
        </Container>
      </Box>

      {/* Drawer for Hamburger Menu in medium device*/}
      {/* responsive drawer */}
      <Hidden lgUp>
        <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
          {/* menu items list component start here*/}
          <List>
            <ListItem sx={{ width: 300 }}>
              <Stack
                direction="column"
                gap={2}
                sx={{
                  "& a:hover": {
                    color: "#FFFFF7",
                    transition: "ease-in-out 0.6s",
                  },
                }}
              >
                {/* menu items rendered here in medium devices */}
                {menuItems}
              </Stack>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </Stack>
  );
};

// Hamburger Menu component
const HamburgerMenu = ({ handleDrawerOpen }: THamburgerMenuProps) => {
  return (
    <IconButton
      sx={{ display: { md: "block", lg: "block" } }}
      onClick={handleDrawerOpen}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default Navbar;

//https://github.com/Mostakimw/material-ui-responsive-navbar/blob/main/src/components/Navbar.tsx