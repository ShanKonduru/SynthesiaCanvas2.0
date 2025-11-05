import { Box, Typography, Paper, Tabs, Tab } from '@mui/material';
import { useState } from 'react';

export default function Settings() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Settings
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Manage your account and platform preferences
      </Typography>

      <Paper>
        <Tabs value={currentTab} onChange={(_, v) => setCurrentTab(v)}>
          <Tab label="Profile" />
          <Tab label="Team" />
          <Tab label="API Keys" />
          <Tab label="LLM Providers" />
          <Tab label="Billing" />
        </Tabs>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">
            {['Profile', 'Team', 'API Keys', 'LLM Providers', 'Billing'][currentTab]} Settings
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Configuration options will appear here
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
