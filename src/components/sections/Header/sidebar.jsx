import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { PrimaryButtons } from '../../Buttons/buttons';
import { Button } from '@mui/material';


export default function MobileNavbar() {
  const [navBarOpen, setNavBarOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setNavBarOpen(open);
  };

  return (
    <div className=''>
        <div onClick={toggleDrawer(true)}>
            <button  data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 rounded-lg lg:hidden  focus:outline-none focus:ring-2 focus:ring-[#b3de43]  dark:hover:bg-gray-700 dark:focus:ring-[#b3de43]">
            <svg className="w-8 h-8" aria-hidden="true" fill="#b3de43" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
            </button>
        </div>
        <Drawer
        anchor="right"
        open={navBarOpen}
        onClose={toggleDrawer(false)}>
        <div className='bg-[#1a1a1a]  h-screen '>
        <Box
            sx={{ width: navBarOpen === 'top' || navBarOpen === 'bottom' ? 'auto' : 250 }}
            role="presentation"
          
            className='my-6  flex flex-col gap-8 justify-center items-center text-white'>
            <Button>
                <CloseIcon onClick={toggleDrawer(false)} style={{fill:"#b3de43"}} />
            </Button>
            <List className='flex flex-col justify-center items-center tracking-widest gap-2 font-[400]' >
                <ListItemButton >
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton> 
                    <ListItemText primary="About" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Services" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Prize" />
                </ListItemButton>
                <ListItemButton>
                <ListItemText primary="News" />
                </ListItemButton>
                <ListItemButton>
                    <PrimaryButtons>Get Started</PrimaryButtons>
                </ListItemButton>
            </List>
        </Box>
        </div>
        </Drawer>
        
  
    </div>
  );
}
