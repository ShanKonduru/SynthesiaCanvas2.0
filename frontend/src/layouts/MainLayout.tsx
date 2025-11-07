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
  Tooltip,
  ListItemIcon as MenuListItemIcon,
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
  MenuOpen as MenuOpenIcon,
  Notifications as NotificationsIcon,
  Info as InfoIcon,
  Help as HelpIcon,
  Logout as LogoutIcon,
  Palette as PaletteIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  Waves as WavesIcon,
} from '@mui/icons-material';
import { mockUser } from '../data/mockData';
import Logo from '../components/Logo';
import { useThemeContext } from '../contexts/ThemeContext';
import type { ThemeMode } from '../theme';

const drawerWidth = 260;
const drawerWidthCollapsed = 65;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Projects', icon: <FolderIcon />, path: '/projects' },
  { text: 'Agents', icon: <SmartToyIcon />, path: '/agents' },
  { text: 'Workflows', icon: <AccountTreeIcon />, path: '/workflows' },
  { text: 'Executions', icon: <PlayCircleIcon />, path: '/executions' },
  { text: 'Code Generation', icon: <CodeIcon />, path: '/code-generation' },
  { text: 'About', icon: <InfoIcon />, path: '/about' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [themeMenuAnchor, setThemeMenuAnchor] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { themeMode, setThemeMode } = useThemeContext();

  const currentDrawerWidth = sidebarOpen ? drawerWidth : drawerWidthCollapsed;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleThemeMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setThemeMenuAnchor(event.currentTarget);
  };

  const handleThemeMenuClose = () => {
    setThemeMenuAnchor(null);
  };

  const handleThemeChange = (mode: ThemeMode) => {
    setThemeMode(mode);
    handleThemeMenuClose();
  };

  const getThemeIcon = () => {
    switch (themeMode) {
      case 'light':
        return <LightModeIcon />;
      case 'dark':
        return <DarkModeIcon />;
      case 'ocean':
        return <WavesIcon />;
      default:
        return <PaletteIcon />;
    }
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
      <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, justifyContent: sidebarOpen ? 'flex-start' : 'center' }}>
        {sidebarOpen ? (
          <>
            <Logo size={36} variant="icon" />
            <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
              SynthesiaCanvas
            </Typography>
          </>
        ) : (
          <Logo size={36} variant="icon" />
        )}
      </Toolbar>
      
      <Divider />
      
      <List sx={{ flex: 1, px: 1, py: 2 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          const listItemButton = (
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              sx={{
                borderRadius: 1,
                backgroundColor: isActive ? 'primary.main' : 'transparent',
                color: isActive ? 'white' : 'text.primary',
                justifyContent: sidebarOpen ? 'initial' : 'center',
                px: 2,
                '&:hover': {
                  backgroundColor: isActive ? 'primary.dark' : 'action.hover',
                },
              }}
            >
              <ListItemIcon sx={{ 
                color: isActive ? 'white' : 'text.secondary', 
                minWidth: 40,
                justifyContent: 'center',
              }}>
                {item.icon}
              </ListItemIcon>
              {sidebarOpen && (
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 600 : 500,
                  }}
                />
              )}
            </ListItemButton>
          );

          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              {sidebarOpen ? (
                listItemButton
              ) : (
                <Tooltip title={item.text} placement="right">
                  {listItemButton}
                </Tooltip>
              )}
            </ListItem>
          );
        })}
      </List>

      <Divider />
      
      {sidebarOpen && (
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
      )}
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${currentDrawerWidth}px)` },
          ml: { sm: `${currentDrawerWidth}px` },
          backgroundColor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
          transition: 'width 0.3s, margin 0.3s',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle sidebar"
            edge="start"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            sx={{ mr: 2, display: { xs: 'none', sm: 'block' }, color: 'text.primary' }}
          >
            {sidebarOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>

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
            <Tooltip title="Change Theme">
              <IconButton onClick={handleThemeMenuOpen} sx={{ color: 'text.secondary' }}>
                {getThemeIcon()}
              </IconButton>
            </Tooltip>

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

      {/* Theme Selection Menu */}
      <Menu
        anchorEl={themeMenuAnchor}
        open={Boolean(themeMenuAnchor)}
        onClose={handleThemeMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography variant="subtitle2" fontWeight={600}>
            Choose Theme
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Select your preferred color scheme
          </Typography>
        </Box>
        <Divider />
        <MenuItem 
          onClick={() => handleThemeChange('light')}
          selected={themeMode === 'light'}
        >
          <MenuListItemIcon>
            <LightModeIcon fontSize="small" />
          </MenuListItemIcon>
          Light Theme
        </MenuItem>
        <MenuItem 
          onClick={() => handleThemeChange('dark')}
          selected={themeMode === 'dark'}
        >
          <MenuListItemIcon>
            <DarkModeIcon fontSize="small" />
          </MenuListItemIcon>
          Dark Theme
        </MenuItem>
        <MenuItem 
          onClick={() => handleThemeChange('ocean')}
          selected={themeMode === 'ocean'}
        >
          <MenuListItemIcon>
            <WavesIcon fontSize="small" />
          </MenuListItemIcon>
          Ocean Theme
        </MenuItem>
      </Menu>

      <Box
        component="nav"
        sx={{ width: { sm: currentDrawerWidth }, flexShrink: { sm: 0 } }}
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
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: currentDrawerWidth, 
              borderRight: '1px solid', 
              borderColor: 'divider',
              transition: 'width 0.3s',
              overflowX: 'hidden',
            },
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
          width: { sm: `calc(100% - ${currentDrawerWidth}px)` },
          transition: 'width 0.3s',
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
