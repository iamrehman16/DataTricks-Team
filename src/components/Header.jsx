import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Team", id: "team" },
  { label: "Projects", id: "projects" },
  { label: "TechStack", id: "techstack" },
  { label: "Performance", id: "performance" },
  { label: "Contact", id: "contact" }
];

const Header = () => {
  const [open, setOpen] = useState(false);        
  const [popupOpen, setPopupOpen] = useState(false); 

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const handlePopupOpen = () => setPopupOpen(true);
  const handlePopupClose = () => setPopupOpen(false);

  return (
    <>
      <AppBar position="static" color="primary" sx={{ boxShadow: 3 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo & Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}>
            <img src="/icons/logo.jpg" alt="DataTricks Logo" style={{ width: 40, height: 40, borderRadius: "50%" }} />
            <Typography
              variant="h6"
              sx={{ fontFamily: "Orbitron, sans-serif", fontWeight: "bold", letterSpacing: 1 }}
            >
              DataTricks
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box>
              {navItems.map((item) => (
                <Button key={item.id} color="inherit" onClick={() => handleScroll(item.id)}>
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Desktop Login & Signup */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button sx={{ border: "1px solid #fff" }} variant="contained" onClick={handlePopupOpen}>
                Login
              </Button>
              <Button variant="contained" onClick={handlePopupOpen}>
                SignUp
              </Button>
            </Box>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <>
              <IconButton sx={{ color: "white" }} onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <List sx={{ width: 220 }}>
                  {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                      <ListItemButton onClick={() => handleScroll(item.id)}>
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  <Box sx={{ textAlign: "center", p: 2 }}>
                    <Button fullWidth variant="outlined" sx={{ mb: 1 }} onClick={handlePopupOpen}>
                      Login
                    </Button>
                    <Button fullWidth variant="contained" onClick={handlePopupOpen}>
                      SignUp
                    </Button>
                  </Box>
                </List>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Popup Dialog */}
      <Dialog open={popupOpen} onClose={handlePopupClose}>
        <DialogTitle>🚧 Feature Coming Soon!</DialogTitle>
        <DialogContent>
          We’re working hard to bring you this feature. Stay tuned!
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePopupClose} variant="contained">Okay</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;
