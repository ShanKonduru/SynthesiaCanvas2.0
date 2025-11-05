import {
  Box,
  Paper,
  Typography,
  Chip,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import {
  CheckCircle,
  Error,
  Schedule,
  PlayArrow,
  Stop,
} from '@mui/icons-material';
import { mockExecutions } from '../data/mockData';

export default function Executions() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle color="success" />;
      case 'failed': return <Error color="error" />;
      case 'running': return <Schedule color="info" />;
      default: return <Schedule />;
    }
  };

  const getStatusColor = (status: string): any => {
    switch (status) {
      case 'completed': return 'success';
      case 'failed': return 'error';
      case 'running': return 'info';
      case 'pending': return 'warning';
      default: return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Workflow Executions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Monitor and manage workflow execution history
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>Workflow</TableCell>
              <TableCell>Started</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockExecutions.map((execution) => (
              <TableRow key={execution.id} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {getStatusIcon(execution.status)}
                    <Chip
                      label={execution.status}
                      size="small"
                      color={getStatusColor(execution.status)}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" fontWeight={600}>
                    {execution.workflowName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {new Date(execution.startTime).toLocaleString()}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {execution.duration ? `${execution.duration}m` : '-'}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ flex: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={(execution.agentsExecuted / execution.totalAgents) * 100}
                        color={execution.status === 'failed' ? 'error' : 'primary'}
                      />
                    </Box>
                    <Typography variant="caption">
                      {execution.agentsExecuted}/{execution.totalAgents}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  {execution.status === 'running' ? (
                    <IconButton size="small" color="error">
                      <Stop />
                    </IconButton>
                  ) : (
                    <IconButton size="small">
                      <PlayArrow />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
