// Core Types for SynthesiaCanvas 2.0

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user' | 'viewer';
  tenantId: string;
  tenantName: string;
  avatar?: string;
}

export interface Tenant {
  id: string;
  name: string;
  subdomain: string;
  status: 'active' | 'suspended' | 'trial';
  subscriptionTier: 'free' | 'professional' | 'enterprise';
  maxUsers: number;
  maxProjects: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'draft' | 'active' | 'archived';
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  agentCount: number;
  workflowCount: number;
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  agentType: string;
  category: string;
  status: 'draft' | 'active' | 'paused' | 'error';
  llmProvider?: string;
  llmModel?: string;
  createdAt: string;
  updatedAt: string;
  executionCount: number;
  avgExecutionTime: number;
  successRate: number;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  projectId: string;
  status: 'draft' | 'active' | 'archived';
  agentCount: number;
  executionCount: number;
  lastExecutedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface WorkflowExecution {
  id: string;
  workflowId: string;
  workflowName: string;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
  startTime: string;
  endTime?: string;
  duration?: number;
  agentsExecuted: number;
  totalAgents: number;
  errorMessage?: string;
}

export interface AgentCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  agentCount: number;
  subcategories?: string[];
}

export interface CodeGeneration {
  id: string;
  workflowId: string;
  workflowName: string;
  status: 'pending' | 'generating' | 'building' | 'completed' | 'failed';
  framework: 'autogen' | 'langchain' | 'crewai';
  wheelFilePath?: string;
  createdAt: string;
  completedAt?: string;
}

export interface DashboardStats {
  totalProjects: number;
  totalAgents: number;
  totalWorkflows: number;
  totalExecutions: number;
  activeExecutions: number;
  successRate: number;
  avgExecutionTime: number;
  codeGenerations: number;
}
