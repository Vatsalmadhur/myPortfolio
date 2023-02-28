import "./Navbar.css";
import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useNavigate } from "react-router-dom";
function Navbar() {
  const Navigate =useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
        sx={{ position: "absolute", top: "0", right: "0", zIndex: "1" }}
      >
        <MenuIcon fontSize="large" sx={{ color: '#ff6f1d'}} />
      </IconButton >
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        
      >
        <List sx={{bgcolor:'#21282a', color:'#ffffff'}} >
          <Box sx={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
          <ListItem onClick={()=>{Navigate("/")}} sx={{width:'100px'}} >
            {/* <HomeIcon /> */}
            <HomeIcon sx={{ color: '#ff6f1d'}}   />
             <Typography ml={1}>Home</Typography> 
          </ListItem>

       <ListItem onClick={()=>{Navigate("/about")}} sx={{width:'100px'}}><AccountBoxIcon sx={{ color: '#ff6f1d'}} /><Typography ml={1}>About</Typography></ListItem>
          <ListItem onClick={()=>{Navigate("/skills")}} sx={{width:'100px'}}><CodeIcon sx={{ color: '#ff6f1d'}} /><Typography ml={1}>Skills</Typography> </ListItem>
          <ListItem onClick={()=>{Navigate("/project")}} sx={{width:'100px'}}><DataObjectIcon sx={{ color: '#ff6f1d'}} /><Typography ml={1}>Projects</Typography></ListItem>
          <ListItem onClick={()=>{Navigate("/contact")}} sx={{width:'100px'}}><ContactMailIcon sx={{ color: '#ff6f1d'}} /><Typography ml={1}>Contact</Typography></ListItem>
        </Box>
        </List>
      </Drawer>
    </>
  );
}
export default Navbar;
