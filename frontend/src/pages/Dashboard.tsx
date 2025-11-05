import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  Chip,
  LinearProgress,
} from '@mui/material';
import {
  TrendingUp,
  Folder,
  SmartToy,
  AccountTree,
  PlayCircle,
  CheckCircle,
  Error,
  Schedule,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { mockDashboardStats, mockChartData, mockExecutions, mockProjects } from '../data/mockData';

const StatCard = ({ title, value, subtitle, icon, color }: any) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" fontWeight={700} color={color}>
            {value}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 2,
            backgroundColor: `${color}.50`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: color,
          }}
        >
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const COLORS = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6'];

export default function Dashboard() {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Welcome back, John! 👋
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's what's happening with your AI agents today
        </Typography>
      </Box>

      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Projects"
            value={mockDashboardStats.totalProjects}
            subtitle="Active projects"
            icon={<Folder fontSize="large" />}
            color="primary.main"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Agents"
            value={mockDashboardStats.totalAgents}
            subtitle="AI agents configured"
            icon={<SmartToy fontSize="large" />}
            color="secondary.main"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Workflows"
            value={mockDashboardStats.totalWorkflows}
            subtitle="Active workflows"
            icon={<AccountTree fontSize="large" />}
            color="success.main"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Executions"
            value={mockDashboardStats.totalExecutions}
            subtitle={`${mockDashboardStats.successRate}% success rate`}
            icon={<PlayCircle fontSize="large" />}
            color="info.main"
          />
        </Grid>
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Execution Trend (Last 5 Days)
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockChartData.executionTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="executions" stroke="#6366f1" strokeWidth={2} name="Total" />
                <Line type="monotone" dataKey="successful" stroke="#10b981" strokeWidth={2} name="Successful" />
                <Line type="monotone" dataKey="failed" stroke="#ef4444" strokeWidth={2} name="Failed" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Agent Distribution
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockChartData.categoryDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => entry.name}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {mockChartData.categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Agent Performance */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Top Performing Agents
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockChartData.agentPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#6366f1" />
                <YAxis yAxisId="right" orientation="right" stroke="#10b981" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="executions" fill="#6366f1" name="Executions" />
                <Bar yAxisId="right" dataKey="successRate" fill="#10b981" name="Success Rate %" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
              Recent Executions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {mockExecutions.slice(0, 5).map((execution) => (
                <Box
                  key={execution.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                    borderRadius: 1,
                    backgroundColor: 'background.default',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                    {execution.status === 'completed' && <CheckCircle color="success" />}
                    {execution.status === 'running' && <Schedule color="info" />}
                    {execution.status === 'failed' && <Error color="error" />}
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        {execution.workflowName}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(execution.startTime).toLocaleString()}
                      </Typography>
                    </Box>
                  </Box>
                  <Chip
                    label={execution.status}
                    size="small"
                    color={
                      execution.status === 'completed' ? 'success' :
                      execution.status === 'running' ? 'info' :
                      execution.status === 'failed' ? 'error' : 'default'
                    }
                  />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
              Active Projects
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {mockProjects
                .filter(p => p.status === 'active')
                .slice(0, 5)
                .map((project) => (
                  <Box
                    key={project.id}
                    sx={{
                      p: 2,
                      borderRadius: 1,
                      backgroundColor: 'background.default',
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography variant="body2" fontWeight={600}>
                        {project.name}
                      </Typography>
                      <Chip label="Active" size="small" color="success" />
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Typography variant="caption" color="text.secondary">
                        {project.agentCount} agents
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {project.workflowCount} workflows
                      </Typography>
                    </Box>
                  </Box>
                ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* System Health */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              System Health
            </Typography>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    API Response Time
                  </Typography>
                  <Typography variant="h6" fontWeight={600} color="success.main">
                    124ms
                  </Typography>
                  <LinearProgress variant="determinate" value={25} color="success" sx={{ mt: 1 }} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Agent Success Rate
                  </Typography>
                  <Typography variant="h6" fontWeight={600} color="success.main">
                    {mockDashboardStats.successRate}%
                  </Typography>
                  <LinearProgress variant="determinate" value={mockDashboardStats.successRate} color="success" sx={{ mt: 1 }} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Active Workflows
                  </Typography>
                  <Typography variant="h6" fontWeight={600} color="info.main">
                    {mockDashboardStats.activeExecutions}
                  </Typography>
                  <LinearProgress variant="determinate" value={20} color="info" sx={{ mt: 1 }} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Storage Used
                  </Typography>
                  <Typography variant="h6" fontWeight={600} color="warning.main">
                    45%
                  </Typography>
                  <LinearProgress variant="determinate" value={45} color="warning" sx={{ mt: 1 }} />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
