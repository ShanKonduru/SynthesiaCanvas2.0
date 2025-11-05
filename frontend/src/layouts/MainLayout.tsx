import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Badge,
  Tooltip
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Folder as FolderIcon,
  SmartToy as SmartToyIcon,
  AccountTree as AccountTreeIcon,
  PlayCircle as PlayCircleIcon,
  Code as CodeIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Help as HelpIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';
import { mockUser } from '../data/mockData';

const drawerWidth = 260;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Projects', icon: <FolderIcon />, path: '/projects' },
  { text: 'Agents', icon: <SmartToyIcon />, path: '/agents' },
  { text: 'Workflows', icon: <AccountTreeIcon />, path: '/workflows' },
  { text: 'Executions', icon: <PlayCircleIcon />, path: '/executions' },
  { text: 'Code Generation', icon: <CodeIcon />, path: '/code-generation' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: 1,
            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}
        >
          SC
        </Box>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
          SynthesiaCanvas
        </Typography>
      </Toolbar>
      
      <Divider />
      
      <List sx={{ flex: 1, px: 1, py: 2 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  borderRadius: 1,
                  backgroundColor: isActive ? 'primary.main' : 'transparent',
                  color: isActive ? 'white' : 'text.primary',
                  '&:hover': {
                    backgroundColor: isActive ? 'primary.dark' : 'action.hover',
                  },
                }}
              >
                <ListItemIcon sx={{ color: isActive ? 'white' : 'text.secondary', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 600 : 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider />
      
      <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          Tenant
        </Typography>
        <Typography variant="body2" fontWeight={600}>
          {mockUser.tenantName}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {mockUser.role} account
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'text.primary' }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
            {menuItems.find(item => location.pathname.startsWith(item.path))?.text || 'Dashboard'}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title="Help & Documentation">
              <IconButton color="inherit" sx={{ color: 'text.secondary' }}>
                <HelpIcon />
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Notifications">
              <IconButton color="inherit" sx={{ color: 'text.secondary' }}>
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Account">
              <IconButton onClick={handleProfileMenuOpen} sx={{ ml: 1 }}>
                <Avatar
                  src={mockUser.avatar}
                  alt={`${mockUser.firstName} ${mockUser.lastName}`}
                  sx={{ width: 36, height: 36 }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography variant="subtitle2" fontWeight={600}>
            {mockUser.firstName} {mockUser.lastName}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {mockUser.email}
          </Typography>
        </Box>
        <Divider />
        <MenuItem onClick={() => handleNavigation('/settings')}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRight: '1px solid', borderColor: 'divider' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: 'background.default',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
