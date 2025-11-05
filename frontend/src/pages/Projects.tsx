import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Add,
  Search,
  MoreVert,
  Folder,
  SmartToy,
  AccountTree,
  Edit,
  Delete,
  Archive,
} from '@mui/icons-material';
import { mockProjects } from '../data/mockData';
import { Project } from '../types';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, project: Project) => {
    setAnchorEl(event.currentTarget);
    setSelectedProject(project);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedProject(null);
  };

  const filteredProjects = mockProjects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'draft': return 'warning';
      case 'archived': return 'default';
      default: return 'default';
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Projects
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage your AI agent projects and workflows
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
          sx={{ borderRadius: 2 }}
        >
          New Project
        </Button>
      </Box>

      {/* Search */}
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: 500 }}
        />
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={3}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} lg={4} key={project.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }
              }}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <CardContent sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'primary.50',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                    }}
                  >
                    <Folder fontSize="large" />
                  </Box>
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMenuOpen(e, project);
                    }}
                  >
                    <MoreVert />
                  </IconButton>
                </Box>

                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {project.name}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 40 }}>
                  {project.description}
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <Chip
                    label={project.status}
                    size="small"
                    color={getStatusColor(project.status)}
                  />
                </Box>

                <Box sx={{ display: 'flex', gap: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <SmartToy fontSize="small" color="action" />
                    <Typography variant="caption" color="text.secondary">
                      {project.agentCount} agents
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AccountTree fontSize="small" color="action" />
                    <Typography variant="caption" color="text.secondary">
                      {project.workflowCount} workflows
                    </Typography>
                  </Box>
                </Box>
              </CardContent>

              <CardActions sx={{ p: 2, pt: 0 }}>
                <Typography variant="caption" color="text.secondary">
                  Updated {new Date(project.updatedAt).toLocaleDateString()}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Folder sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }} />
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No projects found
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {searchTerm ? 'Try adjusting your search' : 'Create your first project to get started'}
          </Typography>
          {!searchTerm && (
            <Button variant="contained" startIcon={<Add />}>
              Create Project
            </Button>
          )}
        </Box>
      )}

      {/* Context Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Edit fontSize="small" sx={{ mr: 1 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Archive fontSize="small" sx={{ mr: 1 }} />
          Archive
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
          <Delete fontSize="small" sx={{ mr: 1 }} />
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
}
