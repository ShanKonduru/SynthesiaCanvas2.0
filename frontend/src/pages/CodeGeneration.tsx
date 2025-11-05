import {
  Box,
  Paper,
  Typography,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  LinearProgress,
} from '@mui/material';
import {
  Download,
  Refresh,
  CheckCircle,
  Error,
  Schedule,
} from '@mui/icons-material';
import { mockCodeGenerations } from '../data/mockData';

export default function CodeGeneration() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle color="success" />;
      case 'failed': return <Error color="error" />;
      default: return <Schedule color="info" />;
    }
  };

  const getStatusColor = (status: string): any => {
    switch (status) {
      case 'completed': return 'success';
      case 'failed': return 'error';
      case 'building': return 'info';
      case 'generating': return 'warning';
      default: return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Code Generation & Export
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Generate Python wheel files from your workflows
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Refresh />}
          size="large"
        >
          Generate Code
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>Workflow</TableCell>
              <TableCell>Framework</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>File</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockCodeGenerations.map((gen) => (
              <TableRow key={gen.id} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {getStatusIcon(gen.status)}
                    <Chip
                      label={gen.status}
                      size="small"
                      color={getStatusColor(gen.status)}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" fontWeight={600}>
                    {gen.workflowName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip label={gen.framework} size="small" variant="outlined" />
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {new Date(gen.createdAt).toLocaleString()}
                  </Typography>
                </TableCell>
                <TableCell>
                  {gen.wheelFilePath ? (
                    <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
                      {gen.wheelFilePath.split('/').pop()}
                    </Typography>
                  ) : (
                    <LinearProgress sx={{ width: 100 }} />
                  )}
                </TableCell>
                <TableCell>
                  {gen.status === 'completed' && (
                    <IconButton size="small" color="primary">
                      <Download />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          📦 Zero Vendor Lock-in
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Export your workflows as standalone Python wheel files that can run anywhere. 
          Your code, your infrastructure, your control.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Chip label="AutoGen Framework" color="primary" />
          <Chip label="LangChain Compatible" color="secondary" />
          <Chip label="Docker Ready" color="success" />
        </Box>
      </Paper>
    </Box>
  );
}
