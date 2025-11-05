import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
} from '@mui/material';
import {
  Add,
  Search,
  SmartToy,
} from '@mui/icons-material';
import { mockAgents, mockCategories } from '../data/mockData';

export default function Agents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const filteredAgents = mockAgents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'draft': return 'warning';
      case 'paused': return 'info';
      case 'error': return 'error';
      default: return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            AI Agents
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Browse and configure your AI agents
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
        >
          Create Agent
        </Button>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Tabs
          value={selectedCategory}
          onChange={(_, value) => setSelectedCategory(value)}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All Categories" value="all" />
          {mockCategories.map(cat => (
            <Tab key={cat.id} label={cat.name} value={cat.name} />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Search agents..."
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

      <Grid container spacing={3}>
        {filteredAgents.map((agent) => (
          <Grid item xs={12} sm={6} lg={4} key={agent.id}>
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }
              }}
              onClick={() => navigate(`/agents/${agent.id}`)}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'secondary.50',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'secondary.main',
                    }}
                  >
                    <SmartToy fontSize="large" />
                  </Box>
                  <Chip
                    label={agent.status}
                    size="small"
                    color={getStatusColor(agent.status)}
                  />
                </Box>

                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {agent.name}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 40 }}>
                  {agent.description}
                </Typography>

                <Chip label={agent.category} size="small" sx={{ mb: 2 }} />

                {agent.llmProvider && agent.llmModel && (
                  <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
                    {agent.llmProvider} • {agent.llmModel}
                  </Typography>
                )}

                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Executions
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>
                      {agent.executionCount}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Success Rate
                    </Typography>
                    <Typography variant="body2" fontWeight={600} color="success.main">
                      {agent.successRate}%
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
