import { Box, Typography, Paper } from '@mui/material';

export default function WorkflowBuilder() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Workflow Builder
      </Typography>
      <Paper sx={{ p: 3, height: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          React Flow Canvas - Visual workflow builder with drag-and-drop agents
        </Typography>
      </Paper>
    </Box>
  );
}
