import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  ArrowBack,
  CheckCircle,
  Error,
  PlayArrow,
  Settings,
  Timeline,
  Memory,
  Speed,
  Storage,
  TrendingUp,
} from '@mui/icons-material';
import { mockAgents, mockExecutions } from '../data/mockData';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function AgentDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the agent
  const agent = mockAgents.find((a) => a.id === id);

  if (!agent) {
    return (
      <Box>
        <Button startIcon={<ArrowBack />} onClick={() => navigate('/agents')} sx={{ mb: 2 }}>
          Back to Agents
        </Button>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" color="error">
            Agent not found
          </Typography>
        </Paper>
      </Box>
    );
  }

  // Filter executions for this agent (simplified - in real app would filter by agent ID)
  const agentExecutions = mockExecutions.filter(() =>
    Math.random() > 0.5 // Mock filter - would use actual agent relationship
  ).slice(0, 5);

  // Mock performance data for charts
  const performanceData = [
    { date: 'Mon', executions: 45, success: 43, failed: 2, avgTime: 2.3 },
    { date: 'Tue', executions: 52, success: 51, failed: 1, avgTime: 2.1 },
    { date: 'Wed', executions: 48, success: 46, failed: 2, avgTime: 2.4 },
    { date: 'Thu', executions: 61, success: 60, failed: 1, avgTime: 2.2 },
    { date: 'Fri', executions: 55, success: 54, failed: 1, avgTime: 2.0 },
    { date: 'Sat', executions: 38, success: 38, failed: 0, avgTime: 1.9 },
    { date: 'Sun', executions: 32, success: 32, failed: 0, avgTime: 2.1 },
  ];

  const resourceData = [
    { time: '00:00', cpu: 25, memory: 512, tokens: 1200 },
    { time: '04:00', cpu: 18, memory: 480, tokens: 980 },
    { time: '08:00', cpu: 45, memory: 620, tokens: 2100 },
    { time: '12:00', cpu: 62, memory: 780, tokens: 3400 },
    { time: '16:00', cpu: 55, memory: 720, tokens: 2800 },
    { time: '20:00', cpu: 38, memory: 580, tokens: 1850 },
  ];

  // Mock configuration
  const configuration = {
    model: agent.llmModel || 'GPT-4',
    provider: agent.llmProvider || 'OpenAI',
    temperature: 0.7,
    maxTokens: 4096,
    topP: 0.9,
    frequencyPenalty: 0.5,
    presencePenalty: 0.5,
    systemPrompt: `You are a ${agent.name} agent specialized in ${agent.category.toLowerCase()} tasks. Your role is to assist users with high-quality, accurate, and efficient responses.`,
    tools: ['web_search', 'code_execution', 'file_operations'],
    timeout: 30,
    retryAttempts: 3,
    cachingEnabled: true,
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate('/agents')}>
          Back to Agents
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="outlined" startIcon={<Settings />}>
          Configure
        </Button>
        <Button variant="contained" startIcon={<PlayArrow />}>
          Test Agent
        </Button>
      </Box>

      {/* Agent Info Card */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {agent.name}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <Chip label={agent.category} color="primary" size="small" />
              <Chip label={agent.llmProvider || 'OpenAI'} color="secondary" size="small" />
              <Chip label={agent.llmModel || 'GPT-4'} color="info" size="small" />
              <Chip
                label={agent.status === 'active' ? 'Active' : agent.status}
                color={agent.status === 'active' ? 'success' : 'default'}
                size="small"
              />
            </Box>
            <Typography variant="body1" color="text.secondary">
              {agent.description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h4" fontWeight={700} color="primary.main">
                  {agent.executionCount}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Total Executions
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4" fontWeight={700} color="success.main">
                  {agent.successRate}%
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Success Rate
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        {/* Performance Metrics */}
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              <Timeline sx={{ mr: 1, verticalAlign: 'middle' }} />
              Execution Performance
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="success" fill="#10b981" name="Success" />
                <Bar dataKey="failed" fill="#ef4444" name="Failed" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Resource Usage */}
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              <Memory sx={{ mr: 1, verticalAlign: 'middle' }} />
              Resource Usage (24h)
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={resourceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <RechartsTooltip />
                <Legend />
                <Line type="monotone" dataKey="cpu" stroke="#6366f1" name="CPU %" />
                <Line type="monotone" dataKey="memory" stroke="#ec4899" name="Memory (MB)" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Configuration */}
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              <Settings sx={{ mr: 1, verticalAlign: 'middle' }} />
              Configuration
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List dense>
              <ListItem>
                <ListItemText
                  primary="Model"
                  secondary={configuration.model}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Temperature"
                  secondary={configuration.temperature}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Max Tokens"
                  secondary={configuration.maxTokens.toLocaleString()}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Top P"
                  secondary={configuration.topP}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Frequency Penalty"
                  secondary={configuration.frequencyPenalty}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Presence Penalty"
                  secondary={configuration.presencePenalty}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Timeout"
                  secondary={`${configuration.timeout} seconds`}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Retry Attempts"
                  secondary={configuration.retryAttempts}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Caching"
                  secondary={
                    <Chip
                      label={configuration.cachingEnabled ? 'Enabled' : 'Disabled'}
                      color={configuration.cachingEnabled ? 'success' : 'default'}
                      size="small"
                    />
                  }
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* System Prompt & Tools */}
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              System Prompt
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Paper sx={{ p: 2, bgcolor: 'background.default' }}>
              <Typography variant="body2" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                {configuration.systemPrompt}
              </Typography>
            </Paper>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Available Tools
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {configuration.tools.map((tool) => (
                <Chip key={tool} label={tool} color="primary" variant="outlined" />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Recent Executions */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Recent Executions
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Workflow</TableCell>
                    <TableCell>Started</TableCell>
                    <TableCell>Duration</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Tokens Used</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {agentExecutions.slice(0, 5).map((execution) => (
                    <TableRow key={execution.id}>
                      <TableCell>
                        <Typography variant="body2" fontWeight={600}>
                          {execution.workflowName}
                        </Typography>
                      </TableCell>
                      <TableCell>{new Date(execution.startTime).toLocaleString()}</TableCell>
                      <TableCell>
                        {execution.duration ? `${execution.duration}s` : '-'}
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={execution.status}
                          color={
                            execution.status === 'completed'
                              ? 'success'
                              : execution.status === 'failed'
                              ? 'error'
                              : execution.status === 'running'
                              ? 'primary'
                              : 'default'
                          }
                          size="small"
                          icon={
                            execution.status === 'completed' ? (
                              <CheckCircle />
                            ) : execution.status === 'failed' ? (
                              <Error />
                            ) : undefined
                          }
                        />
                      </TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 2000 + 500).toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title="View Details">
                          <IconButton
                            size="small"
                            onClick={() => navigate(`/executions`)}
                          >
                            <Timeline />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                  {agentExecutions.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} align="center">
                        <Typography variant="body2" color="text.secondary">
                          No executions found for this agent
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Performance Metrics Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Speed sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h5" fontWeight={700}>
                    2.2s
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Avg Response Time
                  </Typography>
                </Box>
              </Box>
              <LinearProgress variant="determinate" value={75} sx={{ height: 6, borderRadius: 1 }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp sx={{ fontSize: 40, color: 'success.main', mr: 2 }} />
                <Box>
                  <Typography variant="h5" fontWeight={700}>
                    {agent.successRate}%
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Success Rate
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={agent.successRate}
                color="success"
                sx={{ height: 6, borderRadius: 1 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Storage sx={{ fontSize: 40, color: 'secondary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h5" fontWeight={700}>
                    1.8k
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Avg Tokens/Request
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={45}
                color="secondary"
                sx={{ height: 6, borderRadius: 1 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Memory sx={{ fontSize: 40, color: 'info.main', mr: 2 }} />
                <Box>
                  <Typography variant="h5" fontWeight={700}>
                    580MB
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Avg Memory Usage
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={60}
                color="info"
                sx={{ height: 6, borderRadius: 1 }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
