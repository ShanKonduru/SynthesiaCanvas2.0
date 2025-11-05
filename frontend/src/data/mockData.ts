// Mock Data for Prototype
import { User, Project, Agent, Workflow, WorkflowExecution, AgentCategory, CodeGeneration, DashboardStats } from '../types';

export const mockUser: User = {
  id: 'user-1',
  email: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  role: 'admin',
  tenantId: 'tenant-1',
  tenantName: 'Acme Corporation',
  avatar: 'https://i.pravatar.cc/150?img=12'
};

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    name: 'Customer Support Automation',
    description: 'AI-powered customer support system with multi-agent collaboration',
    status: 'active',
    createdAt: '2024-10-15T10:30:00Z',
    updatedAt: '2024-11-05T14:20:00Z',
    createdBy: 'John Doe',
    agentCount: 8,
    workflowCount: 3
  },
  {
    id: 'proj-2',
    name: 'Content Generation Pipeline',
    description: 'Automated content creation with SEO optimization and multi-channel publishing',
    status: 'active',
    createdAt: '2024-09-20T08:15:00Z',
    updatedAt: '2024-11-04T16:45:00Z',
    createdBy: 'Jane Smith',
    agentCount: 12,
    workflowCount: 5
  },
  {
    id: 'proj-3',
    name: 'Data Analysis & Reporting',
    description: 'Intelligent data processing and automated report generation',
    status: 'draft',
    createdAt: '2024-11-01T09:00:00Z',
    updatedAt: '2024-11-03T11:30:00Z',
    createdBy: 'John Doe',
    agentCount: 5,
    workflowCount: 2
  },
  {
    id: 'proj-4',
    name: 'E-commerce Product Research',
    description: 'Market research and competitive analysis for e-commerce',
    status: 'active',
    createdAt: '2024-08-10T07:20:00Z',
    updatedAt: '2024-11-02T13:15:00Z',
    createdBy: 'Mike Johnson',
    agentCount: 6,
    workflowCount: 4
  }
];

export const mockAgents: Agent[] = [
  {
    id: 'agent-1',
    name: 'Web Search Agent',
    description: 'Searches the web for relevant information using multiple search engines',
    agentType: 'research_web_search',
    category: 'Research & Analysis',
    status: 'active',
    llmProvider: 'OpenAI',
    llmModel: 'gpt-4-turbo',
    createdAt: '2024-10-15T10:30:00Z',
    updatedAt: '2024-11-05T14:20:00Z',
    executionCount: 156,
    avgExecutionTime: 2.3,
    successRate: 98.5
  },
  {
    id: 'agent-2',
    name: 'Content Writer Agent',
    description: 'Creates high-quality content based on research and guidelines',
    agentType: 'content_blog_writer',
    category: 'Content Creation',
    status: 'active',
    llmProvider: 'Anthropic',
    llmModel: 'claude-3-opus',
    createdAt: '2024-10-16T11:45:00Z',
    updatedAt: '2024-11-04T15:30:00Z',
    executionCount: 89,
    avgExecutionTime: 5.7,
    successRate: 96.2
  },
  {
    id: 'agent-3',
    name: 'SEO Optimizer Agent',
    description: 'Optimizes content for search engines with keyword analysis',
    agentType: 'content_seo_optimizer',
    category: 'Content Creation',
    status: 'active',
    llmProvider: 'OpenAI',
    llmModel: 'gpt-4-turbo',
    createdAt: '2024-10-17T09:20:00Z',
    updatedAt: '2024-11-03T16:10:00Z',
    executionCount: 72,
    avgExecutionTime: 3.1,
    successRate: 99.1
  },
  {
    id: 'agent-4',
    name: 'Email Response Agent',
    description: 'Generates professional email responses for customer inquiries',
    agentType: 'communication_email_writer',
    category: 'Communication',
    status: 'active',
    llmProvider: 'Google',
    llmModel: 'gemini-pro',
    createdAt: '2024-10-18T13:00:00Z',
    updatedAt: '2024-11-05T10:25:00Z',
    executionCount: 234,
    avgExecutionTime: 1.8,
    successRate: 97.8
  },
  {
    id: 'agent-5',
    name: 'User Input Collector',
    description: 'Collects and validates user input with custom forms',
    agentType: 'user_input',
    category: 'Human Interaction',
    status: 'active',
    llmProvider: 'None',
    llmModel: 'None',
    createdAt: '2024-10-19T14:30:00Z',
    updatedAt: '2024-11-02T12:40:00Z',
    executionCount: 145,
    avgExecutionTime: 0.5,
    successRate: 100
  },
  {
    id: 'agent-6',
    name: 'Approval Gate Agent',
    description: 'Requires human approval before proceeding to next step',
    agentType: 'approval_gate',
    category: 'Human Interaction',
    status: 'active',
    llmProvider: 'None',
    llmModel: 'None',
    createdAt: '2024-10-20T08:15:00Z',
    updatedAt: '2024-11-01T09:55:00Z',
    executionCount: 67,
    avgExecutionTime: 0.3,
    successRate: 100
  }
];

export const mockWorkflows: Workflow[] = [
  {
    id: 'workflow-1',
    name: 'Customer Support Resolution',
    description: 'End-to-end customer support ticket resolution workflow',
    projectId: 'proj-1',
    status: 'active',
    agentCount: 5,
    executionCount: 45,
    lastExecutedAt: '2024-11-05T14:30:00Z',
    createdAt: '2024-10-15T10:30:00Z',
    updatedAt: '2024-11-05T14:30:00Z'
  },
  {
    id: 'workflow-2',
    name: 'Blog Post Creation Pipeline',
    description: 'Research, write, optimize and publish blog posts',
    projectId: 'proj-2',
    status: 'active',
    agentCount: 7,
    executionCount: 28,
    lastExecutedAt: '2024-11-04T16:20:00Z',
    createdAt: '2024-09-20T08:15:00Z',
    updatedAt: '2024-11-04T16:20:00Z'
  },
  {
    id: 'workflow-3',
    name: 'Social Media Campaign',
    description: 'Create and schedule social media posts across platforms',
    projectId: 'proj-2',
    status: 'active',
    agentCount: 4,
    executionCount: 52,
    lastExecutedAt: '2024-11-05T11:15:00Z',
    createdAt: '2024-09-25T10:00:00Z',
    updatedAt: '2024-11-05T11:15:00Z'
  },
  {
    id: 'workflow-4',
    name: 'Data Collection & Analysis',
    description: 'Collect data from multiple sources and generate insights',
    projectId: 'proj-3',
    status: 'draft',
    agentCount: 3,
    executionCount: 0,
    createdAt: '2024-11-01T09:00:00Z',
    updatedAt: '2024-11-03T11:30:00Z'
  }
];

export const mockExecutions: WorkflowExecution[] = [
  {
    id: 'exec-1',
    workflowId: 'workflow-1',
    workflowName: 'Customer Support Resolution',
    status: 'running',
    startTime: '2024-11-05T14:30:00Z',
    agentsExecuted: 3,
    totalAgents: 5
  },
  {
    id: 'exec-2',
    workflowId: 'workflow-2',
    workflowName: 'Blog Post Creation Pipeline',
    status: 'completed',
    startTime: '2024-11-04T16:20:00Z',
    endTime: '2024-11-04T16:35:00Z',
    duration: 15,
    agentsExecuted: 7,
    totalAgents: 7
  },
  {
    id: 'exec-3',
    workflowId: 'workflow-3',
    workflowName: 'Social Media Campaign',
    status: 'completed',
    startTime: '2024-11-05T11:15:00Z',
    endTime: '2024-11-05T11:22:00Z',
    duration: 7,
    agentsExecuted: 4,
    totalAgents: 4
  },
  {
    id: 'exec-4',
    workflowId: 'workflow-1',
    workflowName: 'Customer Support Resolution',
    status: 'failed',
    startTime: '2024-11-05T10:00:00Z',
    endTime: '2024-11-05T10:08:00Z',
    duration: 8,
    agentsExecuted: 2,
    totalAgents: 5,
    errorMessage: 'LLM API rate limit exceeded'
  },
  {
    id: 'exec-5',
    workflowId: 'workflow-2',
    workflowName: 'Blog Post Creation Pipeline',
    status: 'completed',
    startTime: '2024-11-03T14:10:00Z',
    endTime: '2024-11-03T14:28:00Z',
    duration: 18,
    agentsExecuted: 7,
    totalAgents: 7
  }
];

export const mockCategories: AgentCategory[] = [
  {
    id: 'cat-1',
    name: 'Research & Analysis',
    description: 'Agents for data gathering, analysis, and insights',
    icon: 'search',
    agentCount: 15,
    subcategories: ['Web Search', 'Document Analysis', 'Data Mining']
  },
  {
    id: 'cat-2',
    name: 'Content Creation',
    description: 'Agents for generating various types of content',
    icon: 'edit',
    agentCount: 22,
    subcategories: ['Writing', 'SEO', 'Translation', 'Summarization']
  },
  {
    id: 'cat-3',
    name: 'Human Interaction',
    description: 'Agents for collecting user input and approvals',
    icon: 'people',
    agentCount: 11,
    subcategories: ['User Input', 'Approvals', 'Reviews']
  },
  {
    id: 'cat-4',
    name: 'Communication',
    description: 'Agents for email, chat, and notifications',
    icon: 'mail',
    agentCount: 18,
    subcategories: ['Email', 'Chat', 'SMS', 'Notifications']
  },
  {
    id: 'cat-5',
    name: 'Business & Productivity',
    description: 'Agents for business operations and automation',
    icon: 'business',
    agentCount: 14,
    subcategories: ['CRM', 'Project Management', 'Document Processing']
  },
  {
    id: 'cat-6',
    name: 'Development & DevOps',
    description: 'Agents for code generation and deployment',
    icon: 'code',
    agentCount: 12,
    subcategories: ['Code Generation', 'Testing', 'Deployment']
  }
];

export const mockCodeGenerations: CodeGeneration[] = [
  {
    id: 'codegen-1',
    workflowId: 'workflow-1',
    workflowName: 'Customer Support Resolution',
    status: 'completed',
    framework: 'autogen',
    wheelFilePath: '/exports/customer_support-1.0.0-py3-none-any.whl',
    createdAt: '2024-11-04T10:00:00Z',
    completedAt: '2024-11-04T10:05:00Z'
  },
  {
    id: 'codegen-2',
    workflowId: 'workflow-2',
    workflowName: 'Blog Post Creation Pipeline',
    status: 'building',
    framework: 'autogen',
    createdAt: '2024-11-05T14:00:00Z'
  },
  {
    id: 'codegen-3',
    workflowId: 'workflow-3',
    workflowName: 'Social Media Campaign',
    status: 'completed',
    framework: 'langchain',
    wheelFilePath: '/exports/social_media-1.0.0-py3-none-any.whl',
    createdAt: '2024-11-02T15:30:00Z',
    completedAt: '2024-11-02T15:38:00Z'
  }
];

export const mockDashboardStats: DashboardStats = {
  totalProjects: 4,
  totalAgents: 32,
  totalWorkflows: 12,
  totalExecutions: 287,
  activeExecutions: 1,
  successRate: 96.8,
  avgExecutionTime: 12.4,
  codeGenerations: 8
};

export const mockChartData = {
  executionTrend: [
    { date: 'Nov 1', executions: 45, successful: 43, failed: 2 },
    { date: 'Nov 2', executions: 52, successful: 50, failed: 2 },
    { date: 'Nov 3', executions: 38, successful: 37, failed: 1 },
    { date: 'Nov 4', executions: 61, successful: 59, failed: 2 },
    { date: 'Nov 5', executions: 48, successful: 46, failed: 2 }
  ],
  agentPerformance: [
    { name: 'Web Search', executions: 156, avgTime: 2.3, successRate: 98.5 },
    { name: 'Email Response', executions: 234, avgTime: 1.8, successRate: 97.8 },
    { name: 'User Input', executions: 145, avgTime: 0.5, successRate: 100 },
    { name: 'Content Writer', executions: 89, avgTime: 5.7, successRate: 96.2 },
    { name: 'SEO Optimizer', executions: 72, avgTime: 3.1, successRate: 99.1 }
  ],
  categoryDistribution: [
    { name: 'Research', value: 15 },
    { name: 'Content', value: 22 },
    { name: 'Human Interaction', value: 11 },
    { name: 'Communication', value: 18 },
    { name: 'Business', value: 14 },
    { name: 'Development', value: 12 }
  ]
};
