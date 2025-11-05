# Agent Taxonomy and Schema Specification

## 📋 Overview

This document defines the complete taxonomy, categorization, and data schema for agents in SynthesiaCanvas 2.0. It serves as the foundation for agent management, template library, and code generation.

---

## 🏷️ Agent Categories & Subcategories

### 1. **Research & Analysis Agents**

#### 1.1 Information Gathering
- **Web Research Agent** - Searches and extracts information from web sources
- **Academic Research Agent** - Specialized in scholarly articles and research papers
- **Market Research Agent** - Analyzes market trends, competitors, and opportunities
- **News Monitor Agent** - Tracks and summarizes news from multiple sources

#### 1.2 Data Analysis
- **Data Analyst Agent** - Performs statistical analysis on datasets
- **Report Generator Agent** - Creates comprehensive reports from data
- **Sentiment Analysis Agent** - Analyzes sentiment in text data
- **Trend Analyzer Agent** - Identifies patterns and trends in data

#### 1.3 Document Processing
- **Document Summarizer Agent** - Summarizes long documents
- **Document Classifier Agent** - Categorizes documents by type/topic
- **PDF Extractor Agent** - Extracts structured data from PDFs
- **OCR Agent** - Converts images to text

---

### 2. **Content Creation Agents**

#### 2.1 Writing & Copywriting
- **Blog Writer Agent** - Creates blog posts and articles
- **Technical Writer Agent** - Writes technical documentation
- **Marketing Copywriter Agent** - Creates marketing content
- **Email Writer Agent** - Drafts professional emails
- **Social Media Writer Agent** - Creates social media posts

#### 2.2 Creative Content
- **Story Generator Agent** - Creates narratives and stories
- **Poetry Writer Agent** - Generates poems in various styles
- **Script Writer Agent** - Writes scripts for videos/podcasts
- **Song Lyric Writer Agent** - Creates song lyrics

#### 2.3 Code Generation
- **Python Code Generator Agent** - Generates Python code
- **JavaScript Code Generator Agent** - Generates JavaScript code
- **SQL Query Generator Agent** - Creates SQL queries
- **API Integration Code Agent** - Generates API integration code
- **Test Code Generator Agent** - Creates unit and integration tests

---

### 3. **Human Interaction & Input Agents**

#### 3.1 User Input Collection
- **User Input Agent** - Prompts and collects user input during workflow execution
- **Form Builder Agent** - Creates dynamic forms for data collection
- **Approval Gate Agent** - Pauses workflow for human approval/rejection
- **Multi-Choice Selector Agent** - Presents options for user selection
- **File Upload Agent** - Handles file uploads from users
- **Confirmation Agent** - Asks for user confirmation before critical actions

#### 3.2 Human-in-the-Loop
- **Review Agent** - Routes content to human reviewers
- **Quality Check Agent** - Requires human quality verification
- **Decision Agent** - Escalates to human for complex decisions
- **Annotation Agent** - Collects human annotations/labels
- **Correction Agent** - Allows humans to correct agent outputs

---

### 4. **Communication & Interaction Agents**

#### 4.1 Customer Service
- **Customer Support Agent** - Handles customer inquiries
- **FAQ Agent** - Answers frequently asked questions
- **Complaint Handler Agent** - Processes and resolves complaints
- **Feedback Collector Agent** - Gathers and organizes customer feedback

#### 4.2 Conversational
- **Chatbot Agent** - General purpose conversational agent
- **Interview Agent** - Conducts structured interviews
- **Survey Agent** - Administers surveys and questionnaires
- **Training Coach Agent** - Provides interactive training

#### 4.3 Translation & Localization
- **Language Translator Agent** - Translates between languages
- **Localization Agent** - Adapts content for different cultures
- **Dialect Converter Agent** - Converts between language dialects

---

### 5. **Business & Productivity Agents**

#### 5.1 Project Management
- **Task Manager Agent** - Manages tasks and todos
- **Meeting Scheduler Agent** - Schedules and coordinates meetings
- **Project Planner Agent** - Creates project plans and timelines
- **Resource Allocator Agent** - Optimizes resource allocation

#### 5.2 Financial
- **Invoice Generator Agent** - Creates invoices
- **Expense Tracker Agent** - Tracks and categorizes expenses
- **Budget Planner Agent** - Creates and monitors budgets
- **Financial Analyst Agent** - Analyzes financial data

#### 5.3 HR & Recruitment
- **Resume Screener Agent** - Screens resumes for positions
- **Interview Scheduler Agent** - Coordinates interview schedules
- **Onboarding Agent** - Guides new employee onboarding
- **Performance Review Agent** - Assists with performance reviews

---

### 6. **Development & DevOps Agents**

#### 6.1 Code Review & Quality
- **Code Reviewer Agent** - Reviews code for quality and standards
- **Bug Detector Agent** - Identifies potential bugs in code
- **Security Auditor Agent** - Checks code for security vulnerabilities
- **Performance Optimizer Agent** - Suggests performance improvements

#### 6.2 Testing & QA
- **Test Case Generator Agent** - Creates test cases
- **Automated Tester Agent** - Executes automated tests
- **Load Test Agent** - Performs load testing
- **Regression Test Agent** - Runs regression test suites

#### 6.3 DevOps & Deployment
- **CI/CD Pipeline Agent** - Manages CI/CD workflows
- **Docker Deployment Agent** - Handles Docker deployments
- **Kubernetes Manager Agent** - Manages K8s resources
- **Infrastructure Monitor Agent** - Monitors infrastructure health

---

### 7. **Data & Integration Agents**

#### 7.1 Data Transformation
- **ETL Agent** - Extracts, transforms, and loads data
- **Data Cleaner Agent** - Cleans and normalizes data
- **Data Validator Agent** - Validates data quality
- **Data Merger Agent** - Merges data from multiple sources

#### 7.2 API Integration
- **REST API Agent** - Interacts with REST APIs
- **GraphQL Agent** - Queries GraphQL endpoints
- **WebSocket Agent** - Handles real-time WebSocket connections
- **Webhook Handler Agent** - Processes webhook events

#### 7.3 Database Operations
- **Database Query Agent** - Executes database queries
- **Database Migration Agent** - Manages database migrations
- **Database Backup Agent** - Handles database backups
- **Database Monitor Agent** - Monitors database performance

---

### 8. **Monitoring & Alerting Agents**

#### 8.1 System Monitoring
- **Server Monitor Agent** - Monitors server health
- **Application Monitor Agent** - Tracks application metrics
- **Log Analyzer Agent** - Analyzes log files
- **Error Tracker Agent** - Tracks and categorizes errors

#### 8.2 Alerting & Notification
- **Alert Manager Agent** - Manages alert rules and thresholds
- **Notification Dispatcher Agent** - Sends notifications via multiple channels
- **Incident Reporter Agent** - Reports incidents
- **Status Page Agent** - Updates status pages

---

### 9. **Specialized Domain Agents**

#### 9.1 Healthcare
- **Medical Record Parser Agent** - Parses medical records
- **Symptom Checker Agent** - Analyzes symptoms
- **Appointment Scheduler Agent** - Schedules medical appointments
- **Prescription Manager Agent** - Manages prescriptions

#### 9.2 Legal
- **Contract Analyzer Agent** - Analyzes legal contracts
- **Legal Research Agent** - Researches legal precedents
- **Compliance Checker Agent** - Checks regulatory compliance
- **Document Drafter Agent** - Drafts legal documents

#### 9.3 Education
- **Tutoring Agent** - Provides personalized tutoring
- **Quiz Generator Agent** - Creates quizzes and tests
- **Grading Agent** - Grades assignments
- **Curriculum Planner Agent** - Plans course curricula

#### 9.4 E-commerce
- **Product Recommender Agent** - Recommends products
- **Inventory Manager Agent** - Manages inventory
- **Price Optimizer Agent** - Optimizes pricing
- **Order Fulfillment Agent** - Manages order fulfillment

---

## 📊 Agent Data Schema

### Core Agent Attributes

```json
{
  "agent_id": "string (UUID)",
  "agent_name": "string",
  "agent_type": "string (enum: pre-built | custom | community)",
  "version": "string (semantic versioning: 1.0.0)",
  "created_at": "timestamp",
  "updated_at": "timestamp",
  "created_by": "string (user_id)",
  
  "metadata": {
    "category": "string",
    "subcategory": "string",
    "tags": ["array of strings"],
    "icon": "string (icon identifier or URL)",
    "color": "string (hex color for UI)",
    "complexity_level": "string (enum: beginner | intermediate | advanced | expert)",
    "estimated_execution_time": "string (e.g., '2-5 seconds', 'real-time')",
    "popularity_score": "integer (0-100)",
    "llm_dependent": "boolean (indicates if agent requires LLM to function)",
    "avg_tokens_per_execution": {
      "input": "integer (average input tokens)",
      "output": "integer (average output tokens)",
      "total": "integer"
    }
  },
  
  "description": {
    "short_description": "string (max 100 chars)",
    "long_description": "string (markdown supported)",
    "use_cases": ["array of strings"],
    "example_scenarios": ["array of strings"]
  },
  
  "capabilities": {
    "input_types": ["text", "file", "json", "url", "image", "audio", "video"],
    "output_types": ["text", "file", "json", "structured_data", "image", "audio"],
    "supported_languages": ["array of language codes"],
    "max_input_size": "string (e.g., '10MB', '1000 tokens')",
    "max_output_size": "string",
    "streaming_supported": "boolean",
    "async_execution": "boolean"
  },
  
  "llm_configuration": {
    "enabled": "boolean (if false, agent runs without LLM - rule-based logic only)",
    "required": "boolean (if true, agent cannot function without LLM)",
    
    "provider": {
      "primary_provider": "string (enum: openai | anthropic | google | azure | cohere | huggingface | ollama | local | custom)",
      "fallback_providers": ["array of provider names for failover"],
      "provider_priority": ["ordered array of providers to try"],
      "auto_failover": "boolean (automatically switch on failure)"
    },
    
    "model": {
      "model_name": "string (e.g., 'gpt-4-turbo', 'claude-3-5-sonnet', 'gemini-pro')",
      "model_version": "string (e.g., '2024-11-01')",
      "fallback_models": ["array of fallback model names"],
      "model_family": "string (enum: gpt-4 | gpt-3.5 | claude-3 | claude-2 | gemini | llama | mistral | custom)",
      "supports_vision": "boolean",
      "supports_function_calling": "boolean",
      "supports_streaming": "boolean",
      "supports_json_mode": "boolean",
      "context_window": "integer (max tokens: 4096, 8192, 32768, 128000, etc.)",
      "max_output_tokens": "integer"
    },
    
    "inference_parameters": {
      "temperature": "float (0.0-2.0, default: 0.7) - Controls randomness",
      "max_tokens": "integer (max completion tokens, default: 1024)",
      "top_p": "float (0.0-1.0, default: 1.0) - Nucleus sampling",
      "top_k": "integer (default: 50) - Top-K sampling (for some models)",
      "frequency_penalty": "float (-2.0 to 2.0, default: 0.0) - Penalize repeated tokens",
      "presence_penalty": "float (-2.0 to 2.0, default: 0.0) - Penalize new topics",
      "repetition_penalty": "float (1.0-2.0, default: 1.0) - For some models",
      "stop_sequences": ["array of strings to stop generation"],
      "seed": "integer (for reproducible outputs)",
      "logit_bias": "object (token_id: bias_value for token preferences)",
      "logprobs": "boolean (return log probabilities)",
      "top_logprobs": "integer (number of top tokens to return)"
    },
    
    "response_format": {
      "type": "string (enum: text | json_object | json_schema)",
      "json_schema": "object (JSON Schema when type=json_schema)",
      "strict_json": "boolean (enforce strict JSON mode)"
    },
    
    "authentication": {
      "api_key_source": "string (enum: user_provided | workspace | system | vault)",
      "api_key_name": "string (reference to stored credential)",
      "oauth_token": "string (for OAuth-based providers)",
      "azure_ad_token": "string (for Azure OpenAI)",
      "custom_headers": "object (additional auth headers)",
      "endpoint_url": "string (custom API endpoint URL)",
      "api_version": "string (for versioned APIs like Azure)"
    },
    
    "cost_control": {
      "max_cost_per_execution": "float (USD)",
      "max_cost_per_day": "float (USD)",
      "max_cost_per_month": "float (USD)",
      "cost_alert_threshold": "float (USD)",
      "alert_on_threshold": "boolean",
      "pause_on_budget_exceeded": "boolean",
      "estimated_cost_per_1k_tokens": {
        "input_tokens": "float (USD)",
        "output_tokens": "float (USD)",
        "cached_tokens": "float (USD, if applicable)"
      }
    },
    
    "performance": {
      "request_timeout": "integer (seconds, default: 30)",
      "max_retries": "integer (default: 3)",
      "retry_delay": "integer (seconds between retries)",
      "exponential_backoff": "boolean",
      "max_concurrent_requests": "integer (parallel execution limit)",
      "rate_limit_rpm": "integer (requests per minute)",
      "rate_limit_tpm": "integer (tokens per minute)",
      "use_caching": "boolean (enable prompt caching if available)",
      "cache_ttl": "integer (seconds to cache responses)"
    },
    
    "prompt_optimization": {
      "use_system_prompt": "boolean",
      "system_prompt_prefix": "string (prepended to system prompt)",
      "system_prompt_suffix": "string (appended to system prompt)",
      "use_few_shot_examples": "boolean",
      "dynamic_examples": "boolean (select examples based on input)",
      "max_examples": "integer (limit few-shot examples)",
      "use_chain_of_thought": "boolean (add CoT prompting)",
      "use_self_consistency": "boolean (multiple samples + voting)",
      "num_consistency_samples": "integer (for self-consistency)"
    },
    
    "function_calling": {
      "enabled": "boolean",
      "function_choice": "string (enum: auto | none | specific_function)",
      "parallel_function_calls": "boolean",
      "max_function_calls": "integer (prevent infinite loops)",
      "tools": [
        {
          "type": "string (function | code_interpreter | file_search)",
          "function": {
            "name": "string",
            "description": "string",
            "parameters": "object (JSON Schema)"
          }
        }
      ]
    },
    
    "multimodal": {
      "vision_enabled": "boolean",
      "supported_image_formats": ["jpg", "png", "gif", "webp"],
      "max_image_size_mb": "float",
      "image_detail": "string (enum: low | high | auto)",
      "audio_enabled": "boolean",
      "supported_audio_formats": ["mp3", "wav", "m4a"],
      "max_audio_duration_seconds": "integer"
    },
    
    "streaming": {
      "enabled": "boolean",
      "chunk_size": "integer (tokens per chunk)",
      "include_usage_in_stream": "boolean",
      "stream_to_client": "boolean (pass-through to UI)"
    },
    
    "safety_and_moderation": {
      "content_filtering": "boolean",
      "filter_level": "string (enum: off | low | medium | high)",
      "pii_detection": "boolean",
      "pii_redaction": "boolean",
      "toxicity_threshold": "float (0.0-1.0)",
      "moderation_api": "string (provider-specific moderation endpoint)",
      "block_on_moderation_flag": "boolean"
    },
    
    "output_validation": {
      "validate_json": "boolean (if expecting JSON output)",
      "validate_schema": "boolean (validate against JSON Schema)",
      "retry_on_invalid": "boolean",
      "max_validation_retries": "integer",
      "sanitize_output": "boolean (remove unsafe content)",
      "max_output_length": "integer (characters)"
    },
    
    "embeddings": {
      "use_embeddings": "boolean (for RAG, semantic search)",
      "embedding_model": "string (e.g., 'text-embedding-ada-002')",
      "embedding_dimensions": "integer (768, 1536, 3072, etc.)",
      "similarity_metric": "string (enum: cosine | dot_product | euclidean)",
      "embedding_batch_size": "integer"
    },
    
    "fine_tuning": {
      "use_fine_tuned_model": "boolean",
      "fine_tuned_model_id": "string",
      "base_model": "string",
      "training_data_reference": "string"
    },
    
    "debugging": {
      "log_prompts": "boolean (log all prompts sent to LLM)",
      "log_responses": "boolean (log all LLM responses)",
      "log_tokens_used": "boolean",
      "log_latency": "boolean",
      "verbose_errors": "boolean",
      "trace_enabled": "boolean (distributed tracing)"
    },
    
    "custom_parameters": "object (provider-specific parameters)"
  },
  
  "prompts": {
    "system_prompt": "string (agent's role and instructions)",
    "user_prompt_template": "string (template with variables)",
    "few_shot_examples": [
      {
        "input": "string",
        "output": "string"
      }
    ],
    "prompt_version": "string",
    "prompt_variables": [
      {
        "name": "string",
        "type": "string (text | number | boolean | select | multiselect)",
        "required": "boolean",
        "default_value": "any",
        "description": "string",
        "options": ["array (for select/multiselect)"],
        "validation_regex": "string (optional)",
        "min_value": "number (for numeric inputs)",
        "max_value": "number (for numeric inputs)"
      }
    ]
  },
  
  "tools": [
    {
      "tool_id": "string",
      "tool_name": "string",
      "tool_type": "string (enum: function | api | database | file_system | web_scraper)",
      "description": "string",
      "enabled": "boolean",
      "configuration": "object (tool-specific config)",
      "required_credentials": ["array of credential types needed"]
    }
  ],
  
  "memory": {
    "memory_type": "string (enum: none | short_term | long_term | vector_db)",
    "memory_size": "integer (in messages or tokens)",
    "vector_db_config": {
      "provider": "string (pinecone | chroma | qdrant | weaviate)",
      "collection_name": "string",
      "embedding_model": "string",
      "similarity_metric": "string"
    },
    "conversation_history_enabled": "boolean",
    "context_window_size": "integer"
  },
  
  "dependencies": {
    "required_agents": ["array of agent_ids that must exist"],
    "optional_agents": ["array of agent_ids that enhance functionality"],
    "required_tools": ["array of tool names"],
    "required_apis": ["array of API service names"],
    "python_packages": ["array of pip package names"],
    "system_requirements": {
      "min_memory": "string (e.g., '512MB')",
      "min_cpu": "string",
      "gpu_required": "boolean"
    }
  },
  
  "human_interaction": {
    "requires_human_input": "boolean",
    "input_type": "string (enum: text | choice | file | approval | form | custom)",
    "input_prompt": "string (prompt shown to user)",
    "input_schema": "object (JSON Schema for structured input)",
    "timeout_behavior": "string (enum: wait_indefinitely | timeout_and_skip | timeout_and_fail | use_default)",
    "default_value": "any (used when timeout occurs)",
    "wait_for_input": "boolean (pause workflow until input received)",
    "notification_channels": ["email", "slack", "teams", "webhook"],
    "escalation_policy": {
      "escalate_after_seconds": "integer",
      "escalate_to_user_id": "string",
      "escalation_message": "string"
    }
  },
  
  "execution": {
    "execution_mode": "string (enum: synchronous | asynchronous | streaming | human_in_loop)",
    "timeout": "integer (seconds)",
    "retry_policy": {
      "max_retries": "integer",
      "retry_delay": "integer (seconds)",
      "exponential_backoff": "boolean"
    },
    "rate_limiting": {
      "max_requests_per_minute": "integer",
      "max_tokens_per_day": "integer"
    },
    "error_handling": {
      "on_error": "string (enum: fail | fallback | retry | skip)",
      "fallback_agent_id": "string (optional)",
      "error_notification": "boolean"
    }
  },
  
  "monitoring": {
    "logging_enabled": "boolean",
    "log_level": "string (enum: DEBUG | INFO | WARNING | ERROR)",
    "metrics_enabled": "boolean",
    "tracked_metrics": ["response_time", "token_usage", "error_rate", "success_rate"],
    "alert_thresholds": {
      "response_time_ms": "integer",
      "error_rate_percent": "float"
    }
  },
  
  "security": {
    "authentication_required": "boolean",
    "authorization_roles": ["array of role names"],
    "data_encryption": "boolean",
    "pii_handling": "string (enum: none | mask | remove | encrypt)",
    "audit_logging": "boolean",
    "rate_limiting_per_user": "boolean"
  },
  
  "collaboration": {
    "can_delegate_to": ["array of agent_ids"],
    "can_receive_from": ["array of agent_ids"],
    "collaboration_pattern": "string (enum: sequential | parallel | hierarchical | peer_to_peer)",
    "message_format": "string (enum: json | xml | plain_text | custom)"
  },
  
  "ui_configuration": {
    "input_form_schema": "object (JSON Schema for input form)",
    "output_display_type": "string (enum: text | table | chart | json | markdown | custom)",
    "canvas_appearance": {
      "node_shape": "string (rectangle | circle | diamond | hexagon)",
      "node_size": "string (small | medium | large)",
      "port_configuration": {
        "input_ports": [
          {
            "port_id": "string",
            "port_name": "string",
            "data_type": "string",
            "position": "string (top | bottom | left | right)"
          }
        ],
        "output_ports": [
          {
            "port_id": "string",
            "port_name": "string",
            "data_type": "string",
            "position": "string"
          }
        ]
      }
    }
  },
  
  "testing": {
    "test_cases": [
      {
        "test_id": "string",
        "test_name": "string",
        "test_input": "object",
        "expected_output": "object",
        "test_type": "string (enum: unit | integration | performance)"
      }
    ],
    "validation_rules": [
      {
        "rule_name": "string",
        "rule_type": "string (regex | range | enum | custom)",
        "validation_criteria": "object"
      }
    ]
  },
  
  "documentation": {
    "readme": "string (markdown)",
    "api_documentation": "string (OpenAPI/Swagger)",
    "video_tutorial_url": "string",
    "example_workflows": [
      {
        "workflow_name": "string",
        "workflow_description": "string",
        "workflow_file": "string (path or content)"
      }
    ],
    "faq": [
      {
        "question": "string",
        "answer": "string"
      }
    ]
  },
  
  "pricing": {
    "tier_availability": ["free", "professional", "enterprise"],
    "custom_pricing": "boolean",
    "estimated_cost_per_execution": {
      "tokens": "integer",
      "api_calls": "integer",
      "estimated_usd": "float"
    }
  },
  
  "versioning": {
    "version_history": [
      {
        "version": "string",
        "release_date": "timestamp",
        "changelog": "string",
        "breaking_changes": "boolean",
        "deprecated_features": ["array of strings"]
      }
    ],
    "upgrade_path": "string (auto | manual | requires_migration)"
  },
  
  "marketplace": {
    "is_public": "boolean",
    "is_featured": "boolean",
    "author_info": {
      "author_name": "string",
      "author_email": "string",
      "author_url": "string"
    },
    "license": "string (MIT | Apache | Commercial | Custom)",
    "downloads": "integer",
    "rating": "float (0.0-5.0)",
    "reviews_count": "integer",
    "last_updated": "timestamp"
  }
}
```

---

## 🎯 Agent State Model

Each agent instance (when deployed/executed) has runtime state:

```json
{
  "instance_id": "string (UUID)",
  "agent_id": "string (references agent definition)",
  "workflow_id": "string (parent workflow)",
  "status": "string (enum: idle | running | paused | completed | failed | timeout)",
  "created_at": "timestamp",
  "started_at": "timestamp",
  "completed_at": "timestamp",
  "execution_time_ms": "integer",
  
  "runtime_data": {
    "current_input": "object",
    "current_output": "object",
    "intermediate_results": ["array"],
    "conversation_history": [
      {
        "role": "string (user | assistant | system)",
        "content": "string",
        "timestamp": "timestamp"
      }
    ],
    "context": "object (key-value pairs)",
    "variables": "object (runtime variables)"
  },
  
  "metrics": {
    "llm_metrics": {
      "total_tokens": "integer",
      "input_tokens": "integer (prompt tokens)",
      "output_tokens": "integer (completion tokens)",
      "cached_tokens": "integer (if prompt caching used)",
      "api_calls_made": "integer",
      "streaming_chunks": "integer (if streaming enabled)",
      "function_calls_made": "integer",
      "embeddings_generated": "integer"
    },
    "cost_metrics": {
      "total_cost_usd": "float",
      "input_cost_usd": "float",
      "output_cost_usd": "float",
      "cached_cost_usd": "float",
      "cost_breakdown_by_provider": "object"
    },
    "performance_metrics": {
      "avg_latency_ms": "integer",
      "first_token_latency_ms": "integer (for streaming)",
      "tokens_per_second": "float",
      "cache_hit_rate": "float (0.0-1.0)",
      "retry_count": "integer",
      "timeout_count": "integer"
    },
    "quality_metrics": {
      "output_validation_failures": "integer",
      "moderation_flags": "integer",
      "user_feedback_score": "float (1.0-5.0)"
    }
  },
  
  "errors": [
    {
      "error_id": "string",
      "error_type": "string",
      "error_message": "string",
      "error_stack": "string",
      "timestamp": "timestamp",
      "retry_count": "integer"
    }
  ],
  
  "connections": {
    "input_from": ["array of instance_ids"],
    "output_to": ["array of instance_ids"],
    "message_queue": [
      {
        "from_instance": "string",
        "message": "object",
        "timestamp": "timestamp",
        "processed": "boolean"
      }
    ]
  }
}
```

---

## 🔄 Agent Lifecycle States

```
┌─────────────────────────────────────────────────────────────┐
│                    Agent Lifecycle                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Draft] ──→ [Configured] ──→ [Validated] ──→ [Published]  │
│     ↓             ↓              ↓                ↓         │
│  [Editing]    [Testing]      [Reviewing]     [Active]      │
│                                                  ↓          │
│                                             [Deprecated]    │
│                                                  ↓          │
│                                             [Archived]      │
│                                                             │
└─────────────────────────────────────────────────────────────┘

**Execution States:**
- Idle → Queued → Running → Completed | Failed | Timeout | Cancelled
```

---

## 📦 Default Agent Templates (Starter Pack)

### Priority 1 - MVP Launch (Phase 1)
1. **User Input Agent** (Human Interaction) ⭐ **CRITICAL for workflows**
2. **Approval Gate Agent** (Human Interaction) ⭐ **CRITICAL for workflows**
3. **Web Research Agent** (Research & Analysis)
4. **Blog Writer Agent** (Content Creation)
5. **Customer Support Agent** (Communication)
6. **Code Reviewer Agent** (Development)
7. **Data Analyst Agent** (Research & Analysis)
8. **Email Writer Agent** (Content Creation)
9. **Task Manager Agent** (Business & Productivity)
10. **REST API Agent** (Data & Integration)
11. **Chatbot Agent** (Communication)
12. **Document Summarizer Agent** (Research & Analysis)

### Priority 2 - Post-MVP (Phase 2)
13. **Form Builder Agent** (Human Interaction)
14. **Review Agent** (Human Interaction)
15. **File Upload Agent** (Human Interaction)
16. **SQL Query Generator Agent** (Content Creation)
17. **Sentiment Analysis Agent** (Research & Analysis)
18. **Marketing Copywriter Agent** (Content Creation)
19. **Bug Detector Agent** (Development)
20. **ETL Agent** (Data & Integration)
21. **Meeting Scheduler Agent** (Business & Productivity)
22. **Language Translator Agent** (Communication)
23. **Product Recommender Agent** (Specialized - E-commerce)
24. **Log Analyzer Agent** (Monitoring)
25. **Report Generator Agent** (Research & Analysis)

### Priority 3 - Full Launch (Phase 3)
26. **Multi-Choice Selector Agent** (Human Interaction)
27. **Confirmation Agent** (Human Interaction)
28. **Decision Agent** (Human Interaction)
29. **Quality Check Agent** (Human Interaction)
30. **Annotation Agent** (Human Interaction)
31-60: Additional specialized agents based on user feedback and market demand

---

## 🏗️ Database Schema (PostgreSQL)

```sql
-- Agent Definitions Table
CREATE TABLE agents (
    agent_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_name VARCHAR(255) NOT NULL,
    agent_type VARCHAR(50) NOT NULL CHECK (agent_type IN ('pre-built', 'custom', 'community')),
    version VARCHAR(20) NOT NULL DEFAULT '1.0.0',
    category VARCHAR(100) NOT NULL,
    subcategory VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(user_id),
    
    -- JSONB columns for flexible schema
    metadata JSONB,
    description JSONB,
    capabilities JSONB,
    configuration JSONB,
    prompts JSONB,
    tools JSONB,
    memory JSONB,
    dependencies JSONB,
    execution JSONB,
    monitoring JSONB,
    security JSONB,
    collaboration JSONB,
    ui_configuration JSONB,
    testing JSONB,
    documentation JSONB,
    pricing JSONB,
    versioning JSONB,
    marketplace JSONB,
    
    -- Indexes for search
    search_vector tsvector GENERATED ALWAYS AS (
        to_tsvector('english', 
            COALESCE(agent_name, '') || ' ' || 
            COALESCE(description->>'short_description', '') || ' ' ||
            COALESCE(category, '')
        )
    ) STORED
);

-- Agent Instances (Runtime)
CREATE TABLE agent_instances (
    instance_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_id UUID REFERENCES agents(agent_id),
    workflow_id UUID REFERENCES workflows(workflow_id),
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    execution_time_ms INTEGER,
    
    runtime_data JSONB,
    metrics JSONB,
    errors JSONB,
    connections JSONB
);

-- Agent Categories (Reference)
CREATE TABLE agent_categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE,
    category_description TEXT,
    parent_category_id INTEGER REFERENCES agent_categories(category_id),
    icon VARCHAR(100),
    display_order INTEGER
);

-- Agent Tags (Many-to-Many)
CREATE TABLE agent_tags (
    tag_id SERIAL PRIMARY KEY,
    tag_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE agent_tag_mapping (
    agent_id UUID REFERENCES agents(agent_id),
    tag_id INTEGER REFERENCES agent_tags(tag_id),
    PRIMARY KEY (agent_id, tag_id)
);

-- Agent Ratings & Reviews
CREATE TABLE agent_reviews (
    review_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_id UUID REFERENCES agents(agent_id),
    user_id UUID REFERENCES users(user_id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    helpful_count INTEGER DEFAULT 0
);

-- Indexes
CREATE INDEX idx_agents_category ON agents(category);
CREATE INDEX idx_agents_created_by ON agents(created_by);
CREATE INDEX idx_agents_search ON agents USING GIN(search_vector);
CREATE INDEX idx_agent_instances_agent_id ON agent_instances(agent_id);
CREATE INDEX idx_agent_instances_workflow_id ON agent_instances(workflow_id);
CREATE INDEX idx_agent_instances_status ON agent_instances(status);
```

---

## 🎨 UI Component Requirements

### Agent Card (Library View)
- Agent icon with category color
- Agent name and short description
- Category badge
- Complexity level indicator
- Rating stars (if in marketplace)
- Quick action buttons (Add to Canvas, Preview, Configure)

### Agent Node (Canvas View)
- Compact node with agent icon
- Input/output ports clearly visible
- Status indicator (idle/running/error)
- Hover tooltip with key info
- Right-click context menu

### Agent Configuration Panel
- Tabbed interface (Basic, Advanced, Prompts, Tools, Testing)
- Form fields based on agent's prompt_variables
- Real-time validation
- Test execution button
- Save as template option

---

## 🔍 Search & Discovery

### Search Criteria
- Full-text search on name, description, tags
- Filter by category/subcategory
- Filter by complexity level
- Filter by pricing tier availability
- Sort by popularity, rating, date created

### Recommendation Engine
- "Similar Agents" based on category
- "Frequently Used Together" based on workflow patterns
- "Trending" based on usage metrics
- "New Releases" based on recent additions

---

## 📈 Analytics & Metrics

### Per-Agent Metrics
- Total executions
- Average execution time
- Success rate
- Error rate
- Token usage
- Cost per execution
- User adoption rate

### System-Wide Metrics
- Most popular agents
- Most used categories
- Average workflow complexity
- Total agent instances deployed
- User engagement by agent type

---

## Next Steps

1. **Review & Approve**: Please review this taxonomy and schema
2. **Prioritize**: Confirm the Priority 1 agents for MVP
3. **Extend**: Add any domain-specific agents needed
4. **Database Setup**: Implement the PostgreSQL schema
5. **API Design**: Design REST/GraphQL APIs for agent CRUD
6. **UI Mockups**: Create UI designs for agent library and canvas

---

**This specification provides a solid foundation for building a scalable, extensible agent system that can grow with user needs while maintaining consistency and quality.**
