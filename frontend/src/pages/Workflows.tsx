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
  IconButton,
} from '@mui/material';
import {
  Add,
  PlayArrow,
  AccountTree,
} from '@mui/icons-material';
import { mockWorkflows } from '../data/mockData';

export default function Workflows() {
  const navigate = useNavigate();

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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Workflows
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Design and manage multi-agent workflows
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
          onClick={() => navigate('/workflows/new')}
        >
          New Workflow
        </Button>
      </Box>

      <Grid container spacing={3}>
        {mockWorkflows.map((workflow) => (
          <Grid item xs={12} sm={6} lg={4} key={workflow.id}>
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }
              }}
              onClick={() => navigate(`/workflows/${workflow.id}`)}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'success.50',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'success.main',
                    }}
                  >
                    <AccountTree fontSize="large" />
                  </Box>
                  <Chip
                    label={workflow.status}
                    size="small"
                    color={getStatusColor(workflow.status)}
                  />
                </Box>

                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {workflow.name}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 40 }}>
                  {workflow.description}
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Agents
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>
                      {workflow.agentCount}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Executions
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>
                      {workflow.executionCount}
                    </Typography>
                  </Box>
                </Box>

                {workflow.lastExecutedAt && (
                  <Typography variant="caption" color="text.secondary">
                    Last run: {new Date(workflow.lastExecutedAt).toLocaleString()}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
