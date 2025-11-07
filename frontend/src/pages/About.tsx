import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle,
  Code,
  Speed,
  Security,
  CloudDownload,
  AutoAwesome,
  People,
  TrendingUp,
} from '@mui/icons-material';
import Logo from '../components/Logo';

export default function About() {
  const features = [
    {
      icon: <AutoAwesome />,
      title: 'AI-Powered Agent Design',
      description: 'Visual drag-and-drop interface to design multi-agent workflows with 90+ pre-built agent types',
    },
    {
      icon: <Code />,
      title: 'Zero Vendor Lock-in',
      description: 'Export your workflows as standalone Python wheel files. Your code, your infrastructure, your control.',
    },
    {
      icon: <Speed />,
      title: 'AutoGen Framework',
      description: 'Built on Microsoft AutoGen for enterprise-grade agent orchestration and communication',
    },
    {
      icon: <Security />,
      title: 'Multi-Tenant Architecture',
      description: 'Complete data isolation, tenant-aware authentication, and scalable infrastructure',
    },
    {
      icon: <CloudDownload />,
      title: 'Deploy Anywhere',
      description: 'Docker-ready exports work on any cloud provider or on-premise infrastructure',
    },
    {
      icon: <People />,
      title: 'Team Collaboration',
      description: 'Built-in collaboration features with role-based access control and approval workflows',
    },
  ];

  const stats = [
    { label: 'Agent Categories', value: '9+' },
    { label: 'Pre-built Agents', value: '90+' },
    { label: 'Supported LLM Providers', value: '7+' },
    { label: 'Export Frameworks', value: '3' },
  ];

  const techStack = {
    frontend: ['React 18.2', 'TypeScript 5', 'Material-UI 5.14', 'React Flow 11', 'Redux Toolkit 2', 'Vite 5'],
    backend: ['FastAPI 0.104', 'Python 3.11', 'PostgreSQL 15', 'AutoGen 0.2', 'Celery 5.3', 'Redis 7'],
    deployment: ['Docker 24', 'Nginx', 'Python Wheels', 'Docker Compose'],
  };

  return (
    <Box>
      {/* Header with Professional Logo */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Logo size={120} variant="icon" />
        </Box>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          SynthesiaCanvas 2.0
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Multi-Tenant Agentic AI System Design Platform
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 2 }}>
          <Chip label="v2.0.0" color="primary" />
          <Chip label="React + FastAPI" color="secondary" />
          <Chip label="Zero Lock-in" color="success" />
        </Box>
      </Box>

      {/* Mission Statement */}
      <Paper 
        sx={{ 
          p: 4, 
          mb: 4, 
          backgroundColor: 'background.paper',
          border: '2px solid',
          borderColor: 'primary.main',
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom color="primary.main">
          Our Mission
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          To democratize AI agent development by providing a visual, code-free platform that empowers businesses 
          to design, build, and deploy sophisticated multi-agent workflows without vendor lock-in. We believe in 
          giving you complete control over your AI infrastructure.
        </Typography>
      </Paper>

      {/* Key Features */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mb: 3 }}>
          Key Features
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      backgroundColor: 'primary.50',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Statistics */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mb: 3 }}>
          By the Numbers
        </Typography>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" fontWeight={700} color="primary.main">
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Technology Stack */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mb: 3 }}>
          Technology Stack
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={600} gutterBottom color="primary.main">
                Frontend
              </Typography>
              <List dense>
                {techStack.frontend.map((tech, index) => (
                  <ListItem key={index}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircle color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={tech} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={600} gutterBottom color="secondary.main">
                Backend
              </Typography>
              <List dense>
                {techStack.backend.map((tech, index) => (
                  <ListItem key={index}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircle color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={tech} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={600} gutterBottom color="info.main">
                Deployment
              </Typography>
              <List dense>
                {techStack.deployment.map((tech, index) => (
                  <ListItem key={index}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircle color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={tech} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Revolutionary Differentiator */}
      <Paper 
        sx={{ 
          p: 4, 
          mb: 4, 
          backgroundColor: 'background.paper',
          border: '2px solid',
          borderColor: 'secondary.main',
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom color="secondary.main">
          🚀 Revolutionary Differentiator
        </Typography>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Zero Vendor Lock-in - Your Code, Your Infrastructure
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Unlike competitors (Base44, Replit, Lovable) that trap you in their ecosystems, 
          SynthesiaCanvas exports your workflows as standalone Python wheel files. Deploy anywhere - 
          AWS, Azure, Google Cloud, on-premise, or even your laptop.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Chip 
            icon={<TrendingUp />} 
            label="0% Vendor Lock-in" 
            color="success"
          />
          <Chip 
            icon={<Code />} 
            label="Export to .whl files" 
            color="primary"
          />
          <Chip 
            icon={<CloudDownload />} 
            label="Deploy Anywhere" 
            color="info"
          />
        </Box>
      </Paper>

      {/* Development Approach */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Development Methodology
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Built using Test-Driven Development (TDD) with the Red-Green-Refactor cycle. 
          Our commitment to quality includes 90%+ code coverage, comprehensive unit and integration tests, 
          and continuous integration pipelines.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="success.main">90%+</Typography>
            <Typography variant="caption" color="text.secondary">Code Coverage</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="primary.main">TDD</Typography>
            <Typography variant="caption" color="text.secondary">Test-First Design</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="info.main">CI/CD</Typography>
            <Typography variant="caption" color="text.secondary">Automated Pipeline</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="secondary.main">TypeScript</Typography>
            <Typography variant="caption" color="text.secondary">Type Safety</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Subscription Tiers */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mb: 3 }}>
          Subscription Tiers
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Free
                </Typography>
                <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
                  $0
                  <Typography variant="caption" color="text.secondary">/month</Typography>
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="3 Projects" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="10 Agents" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Code Export ✓" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ border: '2px solid', borderColor: 'primary.main' }}>
              <CardContent>
                <Chip label="Popular" color="primary" size="small" sx={{ mb: 1 }} />
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Professional
                </Typography>
                <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
                  $49
                  <Typography variant="caption" color="text.secondary">/month</Typography>
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Unlimited Projects" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Unlimited Agents" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Code Export ✓" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Priority Support" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Enterprise
                </Typography>
                <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
                  Custom
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Everything in Pro" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="On-Premise Deployment" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="SLA & Dedicated Support" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Custom Integrations" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Paper sx={{ p: 4, textAlign: 'center', backgroundColor: 'background.default' }}>
        <Typography variant="body2" color="text.secondary" paragraph>
          Built with ❤️ using AI-Accelerated Development
        </Typography>
        <Typography variant="body2" fontWeight={600} color="primary.main" paragraph>
          Powered by Vedic Metaverses™
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Version 2.0.0 | November 2025 | Test-Driven Development | Multi-Tenant Architecture
        </Typography>
      </Paper>
    </Box>
  );
}
