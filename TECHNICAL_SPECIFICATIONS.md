# SynthesiaCanvas 2.0 - Technical Specifications

## 📋 Document Overview

This document defines the complete technical architecture, technology stack, and implementation specifications for SynthesiaCanvas 2.0 - a multi-tenant agentic AI system design platform.

**Version:** 1.0  
**Date:** November 5, 2025  
**Status:** Final Specification

---

## 🎯 Core Requirements

### 1. Multi-Tenant Architecture ✅
- Complete data isolation between tenants
- Tenant-aware authentication and authorization
- Shared infrastructure with tenant-specific resources
- Scalable tenant management

### 2. Backend Framework ✅
- **FastAPI** for REST API implementation
- Async/await support for high performance
- Automatic OpenAPI documentation
- Pydantic models for data validation

### 3. Frontend Framework ✅
- **React.js** for user interface
- Modern component-based architecture
- TypeScript for type safety
- Responsive design

### 4. Agent Orchestration ✅
- **AutoGen** framework for multi-agent systems
- Agent coordination and communication
- Workflow execution engine
- Agent lifecycle management

### 5. Code Generation & Deployment ✅
- **Python Wheel (.whl) files** for code distribution
- Automated wheel building pipeline
- Version management and dependency handling
- Docker containerization for deployment

### 6. Database ✅
- **PostgreSQL** (local instance)
- Multi-tenant schema design
- JSONB for flexible data storage
- Full ACID compliance

---

## 🧪 Development Methodology

### Test-Driven Development (TDD) Approach

SynthesiaCanvas 2.0 adopts **Test-First Design** and **Test-Driven Development (TDD)** as the core development methodology for building a robust, maintainable, and high-quality product.

#### TDD Principles

**Red-Green-Refactor Cycle:**
1. **RED** - Write a failing test first (defines expected behavior)
2. **GREEN** - Write minimal code to make the test pass
3. **REFACTOR** - Improve code quality while keeping tests green

#### TDD Benefits for SynthesiaCanvas 2.0

| Benefit | Impact |
|---------|--------|
| **Early Bug Detection** | Issues caught during development, not in production |
| **Living Documentation** | Tests serve as executable specifications |
| **Regression Prevention** | Automated tests prevent breaking existing functionality |
| **Better Design** | TDD forces modular, testable code architecture |
| **Confident Refactoring** | Tests provide safety net for code improvements |
| **Faster Debugging** | Failing tests pinpoint exact location of issues |
| **Code Coverage** | TDD naturally achieves high test coverage (target: 90%+) |

#### Test-First Design Implementation

**For Every New Feature:**

```python
# Example: User Input Agent Implementation with TDD

# STEP 1: Write Test First (RED)
# tests/unit/agents/test_user_input_agent.py

import pytest
from app.agents.user_input_agent import UserInputAgent
from app.schemas.agent import AgentConfig

def test_user_input_agent_collects_text_input():
    """Test that User Input Agent collects text input from user."""
    # Arrange
    config = AgentConfig(
        agent_type="user_input",
        input_type="text",
        input_prompt="Enter your name:",
        timeout_seconds=30
    )
    agent = UserInputAgent(config)
    
    # Act
    result = agent.collect_input(user_response="John Doe")
    
    # Assert
    assert result.status == "success"
    assert result.value == "John Doe"
    assert result.input_type == "text"

def test_user_input_agent_validates_required_input():
    """Test that agent validates required input."""
    # Arrange
    config = AgentConfig(
        agent_type="user_input",
        input_type="text",
        required=True,
        input_prompt="Enter email:"
    )
    agent = UserInputAgent(config)
    
    # Act & Assert
    with pytest.raises(ValidationError) as exc:
        agent.collect_input(user_response="")
    assert "Input is required" in str(exc.value)

# STEP 2: Implement Minimal Code (GREEN)
# app/agents/user_input_agent.py

class UserInputAgent:
    def __init__(self, config: AgentConfig):
        self.config = config
    
    def collect_input(self, user_response: str) -> InputResult:
        if self.config.required and not user_response:
            raise ValidationError("Input is required")
        
        return InputResult(
            status="success",
            value=user_response,
            input_type=self.config.input_type
        )

# STEP 3: Run Tests - Should PASS (GREEN)
# STEP 4: Refactor code while keeping tests green
```

#### Test Coverage Requirements

**Mandatory Test Coverage by Component:**

| Component | Minimum Coverage | Priority |
|-----------|-----------------|----------|
| **Core Agent Logic** | 95% | Critical |
| **API Endpoints** | 90% | Critical |
| **AutoGen Integration** | 90% | Critical |
| **Code Generation** | 85% | High |
| **Database Models** | 90% | High |
| **Authentication** | 95% | Critical |
| **Multi-Tenant Logic** | 95% | Critical |
| **Utility Functions** | 80% | Medium |
| **Overall Project** | 90% | Target |

#### Test Types & Strategy

**1. Unit Tests (70% of test suite)**
- Test individual functions/methods in isolation
- Mock external dependencies
- Fast execution (< 1 second per test)
- Run on every code change

```python
# Example: Unit test for workflow validation
def test_workflow_validator_rejects_circular_dependencies():
    validator = WorkflowValidator()
    workflow = {
        "agents": [
            {"id": "agent1", "depends_on": ["agent2"]},
            {"id": "agent2", "depends_on": ["agent1"]}  # Circular!
        ]
    }
    
    with pytest.raises(CircularDependencyError):
        validator.validate(workflow)
```

**2. Integration Tests (20% of test suite)**
- Test interaction between components
- Use test database
- Test API endpoints with real database
- Run before commits

```python
# Example: Integration test for agent creation API
async def test_create_agent_endpoint_persists_to_database(
    client: AsyncClient, 
    tenant_context: TenantContext
):
    # Arrange
    agent_data = {
        "name": "Research Agent",
        "agent_type": "research_web_search",
        "llm_configuration": {...}
    }
    
    # Act
    response = await client.post(
        "/api/v1/agents/",
        json=agent_data,
        headers={"Authorization": f"Bearer {tenant_context.token}"}
    )
    
    # Assert
    assert response.status_code == 201
    agent = await Agent.get(response.json()["id"])
    assert agent.name == "Research Agent"
    assert agent.tenant_id == tenant_context.tenant_id
```

**3. End-to-End Tests (10% of test suite)**
- Test complete user workflows
- Test AutoGen workflow execution
- Test code generation pipeline
- Run before releases

```python
# Example: E2E test for complete workflow execution
async def test_complete_workflow_execution_generates_wheel_file(
    client: AsyncClient,
    tenant_context: TenantContext
):
    # Create workflow with agents
    workflow = await create_test_workflow(client, tenant_context)
    
    # Execute workflow
    execution = await client.post(
        f"/api/v1/workflows/{workflow.id}/execute"
    )
    
    # Wait for completion
    await wait_for_execution_complete(execution.id)
    
    # Generate code
    code_result = await client.post(
        f"/api/v1/code-generation/generate",
        json={"workflow_id": workflow.id}
    )
    
    # Build wheel
    wheel_result = await client.post(
        f"/api/v1/code-generation/{code_result.id}/build"
    )
    
    # Assert
    assert wheel_result.status == "success"
    assert wheel_result.wheel_file_path.endswith(".whl")
    assert os.path.exists(wheel_result.wheel_file_path)
```

#### TDD Workflow Integration

**Development Process:**

```
┌─────────────────────────────────────────────────────────────┐
│  1. Write Failing Test (RED)                                │
│     - Define expected behavior in test                      │
│     - Test should fail initially                            │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  2. Run Test Suite                                          │
│     $ pytest tests/unit/test_new_feature.py                 │
│     Result: FAILED (as expected)                            │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  3. Write Minimal Implementation (GREEN)                    │
│     - Write just enough code to pass test                   │
│     - No over-engineering                                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  4. Run Test Suite Again                                    │
│     $ pytest tests/unit/test_new_feature.py                 │
│     Result: PASSED ✓                                        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  5. Refactor Code (REFACTOR)                                │
│     - Improve code quality                                  │
│     - Remove duplication                                    │
│     - Enhance readability                                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  6. Run Full Test Suite                                     │
│     $ pytest tests/ --cov=app --cov-report=html             │
│     Ensure all tests still pass ✓                           │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  7. Commit Changes                                          │
│     $ git add .                                             │
│     $ git commit -m "feat: implement feature with tests"    │
└─────────────────────────────────────────────────────────────┘
```

#### Continuous Testing

**Pre-Commit Hooks:**
```bash
# .pre-commit-config.yaml
repos:
  - repo: local
    hooks:
      - id: pytest-check
        name: pytest-check
        entry: pytest tests/unit/
        language: system
        pass_filenames: false
        always_run: true
      
      - id: coverage-check
        name: coverage-check
        entry: pytest --cov=app --cov-fail-under=90
        language: system
        pass_filenames: false
        always_run: true
```

**CI/CD Pipeline:**
```yaml
# .github/workflows/test.yml
name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: |
          pip install -r requirements.txt
          pip install pytest pytest-cov pytest-asyncio
      
      - name: Run tests with coverage
        run: |
          pytest tests/ \
            --cov=app \
            --cov-report=xml \
            --cov-report=html \
            --cov-fail-under=90
      
      - name: Upload coverage reports
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage.xml
```

#### Test-First Design Benefits

**Quality Metrics Impact:**

| Metric | Without TDD | With TDD | Improvement |
|--------|-------------|----------|-------------|
| **Bug Density** | 15 bugs/1000 LOC | 3 bugs/1000 LOC | 80% reduction |
| **Code Coverage** | 60% | 90%+ | 50% increase |
| **Refactoring Confidence** | Low | High | High trust |
| **Time to Debug** | 3-4 hours/bug | 30 min/bug | 85% faster |
| **Documentation Quality** | Outdated docs | Living tests | Always current |
| **Regression Bugs** | 20% of releases | <2% of releases | 90% reduction |

#### TDD Best Practices for Team

1. **Write Tests First** - No exceptions, always test before code
2. **Keep Tests Fast** - Unit tests < 1 second, full suite < 5 minutes
3. **One Assert Per Test** - Focused tests are easier to debug
4. **Descriptive Test Names** - Test name should describe behavior
5. **Arrange-Act-Assert** - Clear test structure (AAA pattern)
6. **Mock External Dependencies** - Tests should be isolated
7. **Test Edge Cases** - Not just happy path
8. **Maintain Test Quality** - Tests are first-class code
9. **Review Test Coverage** - Check coverage in every PR
10. **Refactor Tests Too** - Keep tests DRY and maintainable

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SynthesiaCanvas 2.0 Architecture                 │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                         FRONTEND LAYER                               │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  React.js + TypeScript                                         │ │
│  │  • React Flow (Visual Canvas)                                  │ │
│  │  • Redux Toolkit (State Management)                            │ │
│  │  • Material-UI / Ant Design (UI Components)                    │ │
│  │  • Axios (HTTP Client)                                         │ │
│  │  • Socket.io-client (Real-time Communication)                  │ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                    ↕ HTTPS/WSS
┌─────────────────────────────────────────────────────────────────────┐
│                         API GATEWAY LAYER                            │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Nginx / Traefik                                               │ │
│  │  • Load Balancing                                              │ │
│  │  • SSL/TLS Termination                                         │ │
│  │  • Rate Limiting                                               │ │
│  │  • Request Routing                                             │ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                    ↕
┌─────────────────────────────────────────────────────────────────────┐
│                         BACKEND LAYER (FastAPI)                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Authentication & Authorization Service                        │ │
│  │  • JWT Token Management                                        │ │
│  │  • Multi-tenant Context                                        │ │
│  │  • RBAC (Role-Based Access Control)                            │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Core API Services                                             │ │
│  │  • Tenant Management API                                       │ │
│  │  • User Management API                                         │ │
│  │  • Agent Management API                                        │ │
│  │  • Workflow Management API                                     │ │
│  │  • Project Management API                                      │ │
│  │  • Code Generation API                                         │ │
│  │  • Deployment API                                              │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Background Task Processing                                    │ │
│  │  • Celery Workers                                              │ │
│  │  • Redis (Message Broker)                                      │ │
│  │  • Long-running workflows                                      │ │
│  │  • Code generation jobs                                        │ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                    ↕
┌─────────────────────────────────────────────────────────────────────┐
│                    AGENT ORCHESTRATION LAYER                         │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  AutoGen Framework                                             │ │
│  │  • AssistantAgent Management                                   │ │
│  │  • UserProxyAgent for Human-in-Loop                            │ │
│  │  • GroupChat for Multi-Agent Coordination                      │ │
│  │  • ConversableAgent Base                                       │ │
│  │  • Agent Registry & Discovery                                  │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Workflow Execution Engine                                     │ │
│  │  • Workflow Parser & Validator                                 │ │
│  │  • Agent Instance Manager                                      │ │
│  │  • Message Router                                              │ │
│  │  • Execution State Manager                                     │ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                    ↕
┌─────────────────────────────────────────────────────────────────────┐
│                    CODE GENERATION & PACKAGING                       │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Python Wheel Builder                                          │ │
│  │  • setup.py Generator                                          │ │
│  │  • pyproject.toml Generator                                    │ │
│  │  • Dependency Resolver                                         │ │
│  │  • Wheel Compilation (setuptools/build)                        │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Code Templates                                                │ │
│  │  • Jinja2 Template Engine                                      │ │
│  │  • AutoGen Template Library                                    │ │
│  │  • Docker Compose Templates                                    │ │
│  │  • Requirements.txt Generator                                  │ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                    ↕
┌─────────────────────────────────────────────────────────────────────┐
│                         DATA LAYER                                   │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  PostgreSQL Database (Local)                                   │ │
│  │  • Multi-tenant Schema Design                                  │ │
│  │  • Row-Level Security (RLS)                                    │ │
│  │  • JSONB for Flexible Data                                     │ │
│  │  • Full-Text Search                                            │ │
│  │  • Connection Pooling (PgBouncer)                              │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Redis Cache & Message Broker                                 │ │
│  │  • Session Storage                                             │ │
│  │  • API Response Caching                                        │ │
│  │  • Celery Message Queue                                        │ │
│  │  • Real-time Pub/Sub                                           │ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔧 Technology Stack

### Frontend Stack

#### Core Framework
```json
{
  "framework": "React 18+",
  "language": "TypeScript 5+",
  "build_tool": "Vite 5+",
  "package_manager": "npm / pnpm"
}
```

#### Key Libraries
| Library | Version | Purpose |
|---------|---------|---------|
| **React** | 18.2+ | UI Framework |
| **TypeScript** | 5.0+ | Type Safety |
| **React Flow** | 11.0+ | Visual Canvas / Node Editor |
| **Redux Toolkit** | 2.0+ | State Management |
| **RTK Query** | - | API State Management |
| **Material-UI (MUI)** | 5.14+ | UI Components |
| **Ant Design** | 5.0+ | Additional UI Components |
| **Axios** | 1.6+ | HTTP Client |
| **Socket.io-client** | 4.6+ | WebSocket Communication |
| **React Hook Form** | 7.48+ | Form Management |
| **Zod** | 3.22+ | Schema Validation |
| **Monaco Editor** | 0.44+ | Code Editor |
| **React Query** | 5.0+ | Server State Management |
| **Recharts** | 2.10+ | Data Visualization |
| **date-fns** | 3.0+ | Date Utilities |

#### Project Structure
```
frontend/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── agents/
│   │   ├── canvas/
│   │   ├── workflows/
│   │   └── layouts/
│   ├── features/
│   │   ├── auth/
│   │   ├── agents/
│   │   ├── workflows/
│   │   ├── projects/
│   │   └── deployment/
│   ├── hooks/
│   ├── services/
│   │   └── api/
│   ├── store/
│   │   └── slices/
│   ├── types/
│   ├── utils/
│   ├── config/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .env
```

---

### Backend Stack

#### Core Framework
```json
{
  "framework": "FastAPI 0.104+",
  "language": "Python 3.11+",
  "async_framework": "asyncio + uvloop",
  "web_server": "Uvicorn"
}
```

#### Key Libraries
| Library | Version | Purpose |
|---------|---------|---------|
| **FastAPI** | 0.104+ | Web Framework |
| **Pydantic** | 2.5+ | Data Validation |
| **SQLAlchemy** | 2.0+ | ORM |
| **Alembic** | 1.13+ | Database Migrations |
| **asyncpg** | 0.29+ | PostgreSQL Async Driver |
| **psycopg2-binary** | 2.9+ | PostgreSQL Driver (sync) |
| **Redis** | 5.0+ | Caching & Message Broker |
| **Celery** | 5.3+ | Background Tasks |
| **AutoGen** | 0.2+ | Agent Orchestration |
| **python-jose** | 3.3+ | JWT Tokens |
| **passlib** | 1.7+ | Password Hashing |
| **python-multipart** | 0.0.6+ | File Uploads |
| **Jinja2** | 3.1+ | Template Engine |
| **setuptools** | 69.0+ | Wheel Building |
| **build** | 1.0+ | Python Package Building |
| **wheel** | 0.42+ | Wheel Support |
| **docker** | 7.0+ | Docker API |
| **websockets** | 12.0+ | WebSocket Support |
| **python-socketio** | 5.10+ | Socket.IO Server |

#### Project Structure
```
backend/
├── app/
│   ├── api/
│   │   ├── v1/
│   │   │   ├── endpoints/
│   │   │   │   ├── auth.py
│   │   │   │   ├── tenants.py
│   │   │   │   ├── users.py
│   │   │   │   ├── agents.py
│   │   │   │   ├── workflows.py
│   │   │   │   ├── projects.py
│   │   │   │   ├── deployments.py
│   │   │   │   └── code_generation.py
│   │   │   └── router.py
│   │   └── dependencies.py
│   ├── core/
│   │   ├── config.py
│   │   ├── security.py
│   │   ├── middleware.py
│   │   └── tenant_context.py
│   ├── db/
│   │   ├── base.py
│   │   ├── session.py
│   │   └── models/
│   │       ├── tenant.py
│   │       ├── user.py
│   │       ├── agent.py
│   │       ├── workflow.py
│   │       ├── project.py
│   │       └── deployment.py
│   ├── schemas/
│   │   ├── tenant.py
│   │   ├── user.py
│   │   ├── agent.py
│   │   ├── workflow.py
│   │   └── project.py
│   ├── services/
│   │   ├── tenant_service.py
│   │   ├── agent_service.py
│   │   ├── workflow_service.py
│   │   ├── autogen_service.py
│   │   ├── code_generator.py
│   │   └── wheel_builder.py
│   ├── autogen_orchestration/
│   │   ├── agent_factory.py
│   │   ├── workflow_executor.py
│   │   ├── message_router.py
│   │   └── agents/
│   ├── code_generation/
│   │   ├── templates/
│   │   ├── generators/
│   │   └── wheel_builder/
│   ├── tasks/
│   │   ├── celery_app.py
│   │   └── workflow_tasks.py
│   ├── utils/
│   ├── main.py
│   └── __init__.py
├── migrations/
│   └── versions/
├── tests/
├── requirements.txt
├── pyproject.toml
└── .env
```

---

## 🗄️ Multi-Tenant Database Design

### Schema Strategy: **Shared Database, Separate Schemas**

Each tenant gets their own PostgreSQL schema for data isolation while sharing the same database instance.

```sql
-- Public schema (shared infrastructure)
CREATE SCHEMA public;

-- Tenant-specific schemas
CREATE SCHEMA tenant_<tenant_id>;
```

### Core Tables (Public Schema)

#### 1. Tenants Table
```sql
CREATE TABLE public.tenants (
    tenant_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_name VARCHAR(255) NOT NULL UNIQUE,
    subdomain VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'trial', 'cancelled')),
    
    -- Subscription & Billing
    subscription_tier VARCHAR(50) DEFAULT 'free' CHECK (subscription_tier IN ('free', 'professional', 'enterprise')),
    subscription_start_date TIMESTAMP,
    subscription_end_date TIMESTAMP,
    
    -- Limits
    max_users INTEGER DEFAULT 3,
    max_projects INTEGER DEFAULT 3,
    max_agents_per_project INTEGER DEFAULT 10,
    storage_limit_mb INTEGER DEFAULT 1000,
    
    -- Configuration
    settings JSONB DEFAULT '{}',
    metadata JSONB DEFAULT '{}'
);

CREATE INDEX idx_tenants_subdomain ON public.tenants(subdomain);
CREATE INDEX idx_tenants_status ON public.tenants(status);
```

#### 2. Users Table (Cross-tenant)
```sql
CREATE TABLE public.users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES public.tenants(tenant_id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    
    -- Authentication
    is_active BOOLEAN DEFAULT true,
    is_verified BOOLEAN DEFAULT false,
    email_verified_at TIMESTAMP,
    last_login_at TIMESTAMP,
    
    -- Authorization
    role VARCHAR(50) DEFAULT 'user' CHECK (role IN ('owner', 'admin', 'user', 'viewer')),
    permissions JSONB DEFAULT '[]',
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(tenant_id, email),
    UNIQUE(tenant_id, username)
);

CREATE INDEX idx_users_tenant ON public.users(tenant_id);
CREATE INDEX idx_users_email ON public.users(email);
CREATE INDEX idx_users_username ON public.users(username);
```

### Tenant-Specific Tables (Per-Tenant Schema)

Each tenant schema contains:

#### 1. Projects Table
```sql
CREATE TABLE tenant_<tenant_id>.projects (
    project_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_name VARCHAR(255) NOT NULL,
    description TEXT,
    created_by UUID NOT NULL REFERENCES public.users(user_id),
    
    status VARCHAR(50) DEFAULT 'active',
    settings JSONB DEFAULT '{}',
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 2. Agents Table
```sql
CREATE TABLE tenant_<tenant_id>.agents (
    agent_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_name VARCHAR(255) NOT NULL,
    agent_type VARCHAR(50) NOT NULL,
    category VARCHAR(100) NOT NULL,
    subcategory VARCHAR(100),
    
    -- Configuration (from AGENT_TAXONOMY_AND_SCHEMA.md)
    metadata JSONB,
    description JSONB,
    capabilities JSONB,
    llm_configuration JSONB,
    prompts JSONB,
    tools JSONB,
    memory JSONB,
    dependencies JSONB,
    execution JSONB,
    monitoring JSONB,
    security JSONB,
    collaboration JSONB,
    ui_configuration JSONB,
    human_interaction JSONB,
    
    created_by UUID NOT NULL REFERENCES public.users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    search_vector tsvector GENERATED ALWAYS AS (
        to_tsvector('english', 
            COALESCE(agent_name, '') || ' ' || 
            COALESCE(description->>'short_description', '')
        )
    ) STORED
);

CREATE INDEX idx_agents_category ON tenant_<tenant_id>.agents(category);
CREATE INDEX idx_agents_search ON tenant_<tenant_id>.agents USING GIN(search_vector);
```

#### 3. Workflows Table
```sql
CREATE TABLE tenant_<tenant_id>.workflows (
    workflow_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES tenant_<tenant_id>.projects(project_id) ON DELETE CASCADE,
    workflow_name VARCHAR(255) NOT NULL,
    description TEXT,
    
    -- Workflow Definition
    workflow_definition JSONB NOT NULL,
    -- Contains: nodes (agents), edges (connections), configuration
    
    -- Execution
    status VARCHAR(50) DEFAULT 'draft',
    version INTEGER DEFAULT 1,
    
    created_by UUID NOT NULL REFERENCES public.users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_workflows_project ON tenant_<tenant_id>.workflows(project_id);
CREATE INDEX idx_workflows_status ON tenant_<tenant_id>.workflows(status);
```

#### 4. Workflow Executions Table
```sql
CREATE TABLE tenant_<tenant_id>.workflow_executions (
    execution_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    workflow_id UUID NOT NULL REFERENCES tenant_<tenant_id>.workflows(workflow_id),
    
    status VARCHAR(50) DEFAULT 'pending',
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    execution_time_ms INTEGER,
    
    -- Runtime Data
    input_data JSONB,
    output_data JSONB,
    runtime_state JSONB,
    
    -- Metrics
    metrics JSONB,
    errors JSONB,
    
    triggered_by UUID REFERENCES public.users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_executions_workflow ON tenant_<tenant_id>.workflow_executions(workflow_id);
CREATE INDEX idx_executions_status ON tenant_<tenant_id>.workflow_executions(status);
```

#### 5. Agent Instances Table
```sql
CREATE TABLE tenant_<tenant_id>.agent_instances (
    instance_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    execution_id UUID NOT NULL REFERENCES tenant_<tenant_id>.workflow_executions(execution_id),
    agent_id UUID NOT NULL REFERENCES tenant_<tenant_id>.agents(agent_id),
    
    status VARCHAR(50) NOT NULL,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    execution_time_ms INTEGER,
    
    runtime_data JSONB,
    metrics JSONB,
    errors JSONB,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_instances_execution ON tenant_<tenant_id>.agent_instances(execution_id);
CREATE INDEX idx_instances_agent ON tenant_<tenant_id>.agent_instances(agent_id);
```

#### 6. Generated Code Table
```sql
CREATE TABLE tenant_<tenant_id>.generated_code (
    code_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    workflow_id UUID NOT NULL REFERENCES tenant_<tenant_id>.workflows(workflow_id),
    project_id UUID NOT NULL REFERENCES tenant_<tenant_id>.projects(project_id),
    
    -- Generated Artifacts
    wheel_file_path VARCHAR(500),
    wheel_file_name VARCHAR(255),
    wheel_version VARCHAR(50),
    source_code_archive_path VARCHAR(500),
    docker_compose_path VARCHAR(500),
    requirements_path VARCHAR(500),
    
    -- Generation Metadata
    framework VARCHAR(50), -- 'autogen', 'langchain', 'crewai'
    python_version VARCHAR(20),
    build_status VARCHAR(50),
    build_log TEXT,
    
    generated_by UUID REFERENCES public.users(user_id),
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    metadata JSONB DEFAULT '{}'
);

CREATE INDEX idx_generated_code_workflow ON tenant_<tenant_id>.generated_code(workflow_id);
CREATE INDEX idx_generated_code_project ON tenant_<tenant_id>.generated_code(project_id);
```

### Row-Level Security (RLS)

```sql
-- Enable RLS on tenant-specific tables
ALTER TABLE tenant_<tenant_id>.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE tenant_<tenant_id>.agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE tenant_<tenant_id>.workflows ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY tenant_isolation_policy ON tenant_<tenant_id>.projects
    USING (created_by IN (
        SELECT user_id FROM public.users WHERE tenant_id = '<tenant_id>'
    ));
```

---

## 🔐 Authentication & Multi-Tenancy

### JWT Token Structure

```json
{
  "sub": "user_id",
  "email": "user@example.com",
  "tenant_id": "tenant-uuid",
  "tenant_name": "acme_corp",
  "role": "admin",
  "permissions": ["read:agents", "write:workflows"],
  "exp": 1699200000,
  "iat": 1699196400
}
```

### Tenant Context Middleware

```python
# app/core/tenant_context.py
from contextvars import ContextVar
from fastapi import Request, HTTPException
from jose import jwt

tenant_context: ContextVar[str] = ContextVar('tenant_context', default=None)

async def get_tenant_context(request: Request):
    """Extract tenant context from JWT token"""
    auth_header = request.headers.get("Authorization")
    if not auth_header:
        raise HTTPException(status_code=401, detail="Missing authorization header")
    
    token = auth_header.replace("Bearer ", "")
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    
    tenant_id = payload.get("tenant_id")
    if not tenant_id:
        raise HTTPException(status_code=401, detail="Invalid token: missing tenant_id")
    
    tenant_context.set(tenant_id)
    return tenant_id
```

### Database Session with Tenant Context

```python
# app/db/session.py
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.tenant_context import tenant_context

async def get_tenant_db_session(session: AsyncSession):
    """Set search_path to tenant schema"""
    tenant_id = tenant_context.get()
    if tenant_id:
        await session.execute(f"SET search_path TO tenant_{tenant_id}, public")
    return session
```

---

## 🤖 AutoGen Integration

### AutoGen Architecture

```python
# app/autogen_orchestration/agent_factory.py
from autogen import AssistantAgent, UserProxyAgent, GroupChat, GroupChatManager

class AutoGenAgentFactory:
    """Factory for creating AutoGen agents from SynthesiaCanvas agent definitions"""
    
    def create_agent(self, agent_config: dict) -> AssistantAgent:
        """
        Create AutoGen agent from agent configuration
        
        Args:
            agent_config: Agent configuration from database (JSONB)
        
        Returns:
            AutoGen AssistantAgent instance
        """
        llm_config = agent_config.get("llm_configuration", {})
        
        # Extract LLM settings
        llm_settings = {
            "config_list": [
                {
                    "model": llm_config.get("model", {}).get("model_name", "gpt-4"),
                    "api_key": self._get_api_key(llm_config),
                    "temperature": llm_config.get("inference_parameters", {}).get("temperature", 0.7),
                    "max_tokens": llm_config.get("inference_parameters", {}).get("max_tokens", 1024),
                }
            ],
            "timeout": llm_config.get("performance", {}).get("request_timeout", 60),
            "cache_seed": None,  # For reproducibility
        }
        
        # Create AutoGen agent
        agent = AssistantAgent(
            name=agent_config["agent_name"],
            system_message=agent_config.get("prompts", {}).get("system_prompt", ""),
            llm_config=llm_settings,
            human_input_mode="NEVER",  # Controlled by UserProxyAgent
        )
        
        return agent
    
    def create_user_proxy(self, human_interaction_config: dict) -> UserProxyAgent:
        """Create UserProxyAgent for human-in-the-loop"""
        return UserProxyAgent(
            name="user_proxy",
            human_input_mode="ALWAYS" if human_interaction_config.get("requires_human_input") else "NEVER",
            max_consecutive_auto_reply=10,
            code_execution_config={"use_docker": False},
        )
```

### Workflow Executor

```python
# app/autogen_orchestration/workflow_executor.py
from autogen import GroupChat, GroupChatManager
import asyncio

class WorkflowExecutor:
    """Executes workflows using AutoGen GroupChat"""
    
    async def execute_workflow(self, workflow_definition: dict, input_data: dict):
        """
        Execute workflow with AutoGen
        
        Args:
            workflow_definition: Workflow from database (nodes, edges, config)
            input_data: Input data for workflow
        
        Returns:
            Execution results
        """
        # Parse workflow
        agents = []
        for node in workflow_definition["nodes"]:
            agent_config = await self._get_agent_config(node["agent_id"])
            agent = self.agent_factory.create_agent(agent_config)
            agents.append(agent)
        
        # Create GroupChat
        group_chat = GroupChat(
            agents=agents,
            messages=[],
            max_round=50,
        )
        
        # Create Manager
        manager = GroupChatManager(
            groupchat=group_chat,
            llm_config={"config_list": [{"model": "gpt-4"}]},
        )
        
        # Execute
        user_proxy = self.agent_factory.create_user_proxy({})
        result = await user_proxy.a_initiate_chat(
            manager,
            message=input_data.get("initial_message", "Start workflow")
        )
        
        return result
```

### Agent Communication Pattern

```python
# Sequential Execution
agent1 -> agent2 -> agent3

# Parallel Execution
agent1 ──┬──> agent2
         └──> agent3

# Hierarchical (GroupChat)
manager
  ├── agent1
  ├── agent2
  └── agent3
```

---

## 📦 Code Generation & Wheel Building

### Workflow-to-Code Pipeline

```
Workflow Definition (JSON)
         ↓
   Code Generator
         ↓
   Python Files (AutoGen)
         ↓
   Wheel Builder
         ↓
   .whl File + Docker Compose
```

### Code Generator Structure

```python
# app/code_generation/generators/autogen_generator.py
from jinja2 import Environment, FileSystemLoader
import os

class AutoGenCodeGenerator:
    """Generates Python code for AutoGen workflows"""
    
    def __init__(self):
        self.template_env = Environment(
            loader=FileSystemLoader('app/code_generation/templates/autogen')
        )
    
    async def generate_project(self, workflow_definition: dict, project_name: str):
        """
        Generate complete Python project from workflow
        
        Returns:
            dict: {
                "project_path": str,
                "files": List[str],
                "wheel_path": str
            }
        """
        project_path = f"/tmp/generated/{project_name}"
        os.makedirs(project_path, exist_ok=True)
        
        # Generate files
        await self._generate_main_file(workflow_definition, project_path)
        await self._generate_agents_file(workflow_definition, project_path)
        await self._generate_requirements(workflow_definition, project_path)
        await self._generate_setup_py(project_name, project_path)
        await self._generate_docker_compose(project_name, project_path)
        await self._generate_readme(project_name, project_path)
        
        return {
            "project_path": project_path,
            "files": os.listdir(project_path)
        }
    
    async def _generate_main_file(self, workflow_def: dict, path: str):
        """Generate main.py using Jinja2 template"""
        template = self.template_env.get_template('main.py.j2')
        
        content = template.render(
            workflow_name=workflow_def["workflow_name"],
            agents=workflow_def["nodes"],
            connections=workflow_def["edges"],
        )
        
        with open(f"{path}/main.py", "w") as f:
            f.write(content)
```

### Jinja2 Template Example

```python
# app/code_generation/templates/autogen/main.py.j2
"""
Generated AutoGen Workflow: {{ workflow_name }}
Generated by SynthesiaCanvas 2.0
"""

import autogen
from agents import *

def main():
    # Initialize agents
    {% for agent in agents %}
    {{ agent.agent_name }} = create_{{ agent.agent_name }}()
    {% endfor %}
    
    # Create GroupChat
    agents_list = [{% for agent in agents %}{{ agent.agent_name }}{% if not loop.last %}, {% endif %}{% endfor %}]
    
    group_chat = autogen.GroupChat(
        agents=agents_list,
        messages=[],
        max_round=50
    )
    
    manager = autogen.GroupChatManager(
        groupchat=group_chat,
        llm_config={"config_list": [{"model": "gpt-4"}]}
    )
    
    # Execute workflow
    user_proxy = autogen.UserProxyAgent(
        name="user_proxy",
        human_input_mode="NEVER",
        max_consecutive_auto_reply=0,
    )
    
    user_proxy.initiate_chat(
        manager,
        message="Start workflow"
    )

if __name__ == "__main__":
    main()
```

### Wheel Builder

```python
# app/code_generation/wheel_builder/builder.py
import subprocess
import os
from pathlib import Path

class PythonWheelBuilder:
    """Builds Python wheel files from generated code"""
    
    async def build_wheel(self, project_path: str, project_name: str, version: str = "1.0.0"):
        """
        Build wheel file using setuptools
        
        Args:
            project_path: Path to generated project
            project_name: Name of the project
            version: Version string (semver)
        
        Returns:
            str: Path to generated .whl file
        """
        # Generate pyproject.toml
        await self._generate_pyproject_toml(project_path, project_name, version)
        
        # Build wheel
        result = subprocess.run(
            ["python", "-m", "build", "--wheel", project_path],
            capture_output=True,
            text=True,
            cwd=project_path
        )
        
        if result.returncode != 0:
            raise Exception(f"Wheel build failed: {result.stderr}")
        
        # Find generated wheel
        dist_dir = Path(project_path) / "dist"
        wheel_files = list(dist_dir.glob("*.whl"))
        
        if not wheel_files:
            raise Exception("No wheel file generated")
        
        return str(wheel_files[0])
    
    async def _generate_pyproject_toml(self, path: str, name: str, version: str):
        """Generate pyproject.toml for wheel building"""
        content = f"""
[build-system]
requires = ["setuptools>=69.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "{name}"
version = "{version}"
description = "Generated AutoGen workflow from SynthesiaCanvas 2.0"
requires-python = ">=3.11"
dependencies = [
    "pyautogen>=0.2.0",
    "openai>=1.0.0",
    "python-dotenv>=1.0.0",
]

[project.scripts]
{name} = "{name}.main:main"
"""
        with open(f"{path}/pyproject.toml", "w") as f:
            f.write(content)
```

### setup.py Generator

```python
# app/code_generation/wheel_builder/setup_generator.py

def generate_setup_py(project_name: str, version: str, dependencies: list) -> str:
    """Generate setup.py content"""
    return f"""
from setuptools import setup, find_packages

setup(
    name="{project_name}",
    version="{version}",
    packages=find_packages(),
    install_requires={dependencies},
    entry_points={{
        'console_scripts': [
            '{project_name}={project_name}.main:main',
        ],
    }},
    python_requires='>=3.11',
)
"""
```

---

## 🐳 Docker Deployment

### Docker Compose Generator

```python
# app/code_generation/generators/docker_generator.py

class DockerComposeGenerator:
    """Generates Docker Compose files for deployment"""
    
    def generate_docker_compose(self, project_name: str, config: dict) -> str:
        """Generate docker-compose.yml"""
        return f"""
version: '3.8'

services:
  {project_name}:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: {project_name}
    environment:
      - OPENAI_API_KEY=${{OPENAI_API_KEY}}
      - ANTHROPIC_API_KEY=${{ANTHROPIC_API_KEY}}
    volumes:
      - ./data:/app/data
      - ./logs:/app/logs
    restart: unless-stopped
    networks:
      - {project_name}_network

  redis:
    image: redis:7-alpine
    container_name: {project_name}_redis
    ports:
      - "6379:6379"
    networks:
      - {project_name}_network

networks:
  {project_name}_network:
    driver: bridge
"""
    
    def generate_dockerfile(self, project_name: str) -> str:
        """Generate Dockerfile"""
        return f"""
FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    build-essential \\
    && rm -rf /var/lib/apt/lists/*

# Copy wheel file
COPY dist/*.whl /tmp/

# Install wheel
RUN pip install --no-cache-dir /tmp/*.whl

# Copy additional files
COPY .env /app/.env
COPY data /app/data

# Run the application
CMD ["{project_name}"]
"""
```

---

## 🚀 API Specification

### FastAPI Application Structure

```python
# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.router import api_router
from app.core.config import settings

app = FastAPI(
    title="SynthesiaCanvas 2.0 API",
    description="Multi-tenant Agentic AI System Design Platform",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(api_router, prefix="/api/v1")

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
```

### Key API Endpoints

#### Authentication
```
POST   /api/v1/auth/register          - Register new user
POST   /api/v1/auth/login             - Login user
POST   /api/v1/auth/refresh           - Refresh JWT token
POST   /api/v1/auth/logout            - Logout user
GET    /api/v1/auth/me                - Get current user
```

#### Tenant Management
```
POST   /api/v1/tenants                - Create tenant (admin only)
GET    /api/v1/tenants/{tenant_id}    - Get tenant details
PUT    /api/v1/tenants/{tenant_id}    - Update tenant
DELETE /api/v1/tenants/{tenant_id}    - Delete tenant
GET    /api/v1/tenants                - List tenants (admin only)
```

#### Agent Management
```
GET    /api/v1/agents                 - List all agents
GET    /api/v1/agents/{agent_id}      - Get agent details
POST   /api/v1/agents                 - Create custom agent
PUT    /api/v1/agents/{agent_id}      - Update agent
DELETE /api/v1/agents/{agent_id}      - Delete agent
GET    /api/v1/agents/categories      - Get agent categories
GET    /api/v1/agents/templates       - Get pre-built templates
POST   /api/v1/agents/{agent_id}/test - Test agent
```

#### Workflow Management
```
GET    /api/v1/workflows              - List workflows
GET    /api/v1/workflows/{id}         - Get workflow
POST   /api/v1/workflows              - Create workflow
PUT    /api/v1/workflows/{id}         - Update workflow
DELETE /api/v1/workflows/{id}         - Delete workflow
POST   /api/v1/workflows/{id}/execute - Execute workflow
GET    /api/v1/workflows/{id}/executions - Get execution history
```

#### Code Generation
```
POST   /api/v1/code-generation/generate        - Generate code from workflow
GET    /api/v1/code-generation/{code_id}       - Get generated code
POST   /api/v1/code-generation/{code_id}/build - Build wheel file
GET    /api/v1/code-generation/{code_id}/download - Download wheel
POST   /api/v1/code-generation/{code_id}/deploy  - Deploy to Docker
```

#### Project Management
```
GET    /api/v1/projects               - List projects
GET    /api/v1/projects/{id}          - Get project
POST   /api/v1/projects               - Create project
PUT    /api/v1/projects/{id}          - Update project
DELETE /api/v1/projects/{id}          - Delete project
```

### Example API Implementation

```python
# app/api/v1/endpoints/agents.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List
from app.db.session import get_tenant_db_session
from app.schemas.agent import AgentCreate, AgentResponse
from app.services.agent_service import AgentService
from app.core.tenant_context import get_tenant_context

router = APIRouter()

@router.get("/agents", response_model=List[AgentResponse])
async def list_agents(
    skip: int = 0,
    limit: int = 100,
    category: str = None,
    db: AsyncSession = Depends(get_tenant_db_session),
    tenant_id: str = Depends(get_tenant_context),
):
    """List all agents for the current tenant"""
    service = AgentService(db)
    agents = await service.list_agents(skip=skip, limit=limit, category=category)
    return agents

@router.post("/agents", response_model=AgentResponse, status_code=201)
async def create_agent(
    agent: AgentCreate,
    db: AsyncSession = Depends(get_tenant_db_session),
    tenant_id: str = Depends(get_tenant_context),
):
    """Create a new custom agent"""
    service = AgentService(db)
    new_agent = await service.create_agent(agent)
    return new_agent

@router.get("/agents/{agent_id}", response_model=AgentResponse)
async def get_agent(
    agent_id: str,
    db: AsyncSession = Depends(get_tenant_db_session),
    tenant_id: str = Depends(get_tenant_context),
):
    """Get agent by ID"""
    service = AgentService(db)
    agent = await service.get_agent(agent_id)
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")
    return agent
```

---

## 🔄 Background Task Processing

### Celery Configuration

```python
# app/tasks/celery_app.py
from celery import Celery
from app.core.config import settings

celery_app = Celery(
    "synthesiacanvas",
    broker=settings.REDIS_URL,
    backend=settings.REDIS_URL,
)

celery_app.conf.update(
    task_serializer='json',
    accept_content=['json'],
    result_serializer='json',
    timezone='UTC',
    enable_utc=True,
    task_track_started=True,
    task_time_limit=30 * 60,  # 30 minutes
    task_soft_time_limit=25 * 60,  # 25 minutes
)
```

### Task Examples

```python
# app/tasks/workflow_tasks.py
from app.tasks.celery_app import celery_app
from app.autogen_orchestration.workflow_executor import WorkflowExecutor

@celery_app.task(bind=True)
def execute_workflow_task(self, workflow_id: str, input_data: dict, tenant_id: str):
    """Background task for workflow execution"""
    try:
        executor = WorkflowExecutor()
        result = executor.execute_workflow_sync(workflow_id, input_data, tenant_id)
        return {"status": "success", "result": result}
    except Exception as e:
        self.retry(exc=e, countdown=60, max_retries=3)

@celery_app.task(bind=True)
def generate_code_task(self, workflow_id: str, project_name: str, tenant_id: str):
    """Background task for code generation"""
    try:
        generator = AutoGenCodeGenerator()
        result = generator.generate_project_sync(workflow_id, project_name, tenant_id)
        return {"status": "success", "result": result}
    except Exception as e:
        self.retry(exc=e, countdown=60, max_retries=3)

@celery_app.task(bind=True)
def build_wheel_task(self, code_id: str, tenant_id: str):
    """Background task for wheel building"""
    try:
        builder = PythonWheelBuilder()
        result = builder.build_wheel_sync(code_id, tenant_id)
        return {"status": "success", "result": result}
    except Exception as e:
        self.retry(exc=e, countdown=60, max_retries=3)
```

---

## 📊 Configuration Management

### Environment Variables

```bash
# .env
# Application
APP_NAME=SynthesiaCanvas2.0
APP_VERSION=1.0.0
DEBUG=False
ENVIRONMENT=production

# API
API_HOST=0.0.0.0
API_PORT=8000
API_WORKERS=4

# Security
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
REFRESH_TOKEN_EXPIRE_DAYS=7

# Database
DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/synthesiacanvas
DATABASE_POOL_SIZE=20
DATABASE_MAX_OVERFLOW=10

# Redis
REDIS_URL=redis://localhost:6379/0

# Celery
CELERY_BROKER_URL=redis://localhost:6379/1
CELERY_RESULT_BACKEND=redis://localhost:6379/1

# CORS
CORS_ORIGINS=["http://localhost:3000", "http://localhost:5173"]

# LLM Providers
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_API_KEY=...

# Storage
GENERATED_CODE_PATH=/app/generated
WHEEL_FILES_PATH=/app/wheels
MAX_UPLOAD_SIZE_MB=100

# Monitoring
LOG_LEVEL=INFO
SENTRY_DSN=...
```

### Settings Module

```python
# app/core/config.py
from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    # Application
    APP_NAME: str = "SynthesiaCanvas2.0"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = False
    ENVIRONMENT: str = "production"
    
    # API
    API_HOST: str = "0.0.0.0"
    API_PORT: int = 8000
    API_WORKERS: int = 4
    
    # Security
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    
    # Database
    DATABASE_URL: str
    DATABASE_POOL_SIZE: int = 20
    DATABASE_MAX_OVERFLOW: int = 10
    
    # Redis
    REDIS_URL: str
    
    # Celery
    CELERY_BROKER_URL: str
    CELERY_RESULT_BACKEND: str
    
    # CORS
    CORS_ORIGINS: List[str] = ["http://localhost:3000"]
    
    # LLM
    OPENAI_API_KEY: str = ""
    ANTHROPIC_API_KEY: str = ""
    GOOGLE_API_KEY: str = ""
    
    # Storage
    GENERATED_CODE_PATH: str = "/app/generated"
    WHEEL_FILES_PATH: str = "/app/wheels"
    MAX_UPLOAD_SIZE_MB: int = 100
    
    # Monitoring
    LOG_LEVEL: str = "INFO"
    SENTRY_DSN: str = ""
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
```

---

## 📈 Performance & Scalability

### Database Optimization
- Connection pooling with PgBouncer
- Prepared statements for common queries
- JSONB indexing with GIN indexes
- Full-text search with tsvector
- Query result caching with Redis

### API Performance
- Async/await throughout the stack
- Response caching with Redis
- Database query optimization
- Connection pooling
- Rate limiting per tenant

### Horizontal Scaling
```
Load Balancer (Nginx/Traefik)
         ↓
   ┌─────┴─────┬─────────┬─────────┐
   ↓           ↓         ↓         ↓
FastAPI-1  FastAPI-2  FastAPI-3  FastAPI-4
   ↓           ↓         ↓         ↓
   └─────┬─────┴─────────┴─────────┘
         ↓
   PostgreSQL (Single Instance / Read Replicas)
         ↓
   Redis (Sentinel / Cluster)
```

---

## 🧪 Testing Strategy

### Test Structure
```
tests/
├── unit/
│   ├── test_agents.py
│   ├── test_workflows.py
│   ├── test_code_generation.py
│   └── test_wheel_builder.py
├── integration/
│   ├── test_api_endpoints.py
│   ├── test_autogen_integration.py
│   └── test_database.py
├── e2e/
│   ├── test_workflow_execution.py
│   └── test_code_generation_pipeline.py
└── conftest.py
```

### Testing Tools
- **pytest** - Test framework
- **pytest-asyncio** - Async test support
- **httpx** - HTTP client for API testing
- **faker** - Test data generation
- **factory_boy** - Model factories
- **pytest-cov** - Code coverage

---

## 📝 Development Workflow

### Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/ShanKonduru/SynthesiaCanvas2.0.git
cd SynthesiaCanvas2.0

# 2. Backend setup
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

# 3. Database setup
createdb synthesiacanvas
alembic upgrade head

# 4. Start Redis
redis-server

# 5. Start Celery worker
celery -A app.tasks.celery_app worker --loglevel=info

# 6. Start FastAPI
uvicorn app.main:app --reload --port 8000

# 7. Frontend setup (new terminal)
cd frontend
npm install
npm run dev

# 8. Access application
# Frontend: http://localhost:5173
# API Docs: http://localhost:8000/api/docs
```

---

## 🚢 Deployment Architecture

### Production Deployment Stack

```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - backend
      - frontend

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.prod
    expose:
      - "80"

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    env_file:
      - .env.production
    depends_on:
      - postgres
      - redis
    command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4

  celery_worker:
    build:
      context: ./backend
      dockerfile: Dockerfile
    env_file:
      - .env.production
    depends_on:
      - redis
      - postgres
    command: celery -A app.tasks.celery_app worker --loglevel=info --concurrency=4

  celery_beat:
    build:
      context: ./backend
      dockerfile: Dockerfile
    env_file:
      - .env.production
    depends_on:
      - redis
    command: celery -A app.tasks.celery_app beat --loglevel=info

  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: synthesiacanvas
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"

  pgbouncer:
    image: pgbouncer/pgbouncer
    environment:
      DATABASES_HOST: postgres
      DATABASES_PORT: 5432
      DATABASES_USER: ${DB_USER}
      DATABASES_PASSWORD: ${DB_PASSWORD}
      PGBOUNCER_POOL_MODE: transaction
      PGBOUNCER_MAX_CLIENT_CONN: 1000
      PGBOUNCER_DEFAULT_POOL_SIZE: 25
    depends_on:
      - postgres

volumes:
  postgres_data:
  redis_data:
```

---

## 📚 Additional Documentation References

- **[Agent Taxonomy & Schema](./AGENT_TAXONOMY_AND_SCHEMA.md)** - Complete agent definitions
- **[Code Export Specification](./CODE_EXPORT_SPECIFICATION.md)** - Code generation details
- **[Work Breakdown Structure](./WORK_BREAKDOWN_STRUCTURE.md)** - Implementation timeline
- **[README](./README.md)** - Project overview
- **[README Detailed](./README_DETAILED.md)** - Comprehensive documentation

---

## 🎯 Implementation Priorities

### Phase 1: Foundation (Weeks 1-6)
1. ✅ Multi-tenant database setup
2. ✅ FastAPI project structure
3. ✅ Authentication & authorization
4. ✅ Tenant management
5. ✅ Basic agent CRUD APIs
6. ✅ React.js frontend scaffold

### Phase 2: Core Features (Weeks 7-12)
1. ✅ Visual canvas with React Flow
2. ✅ AutoGen integration
3. ✅ Workflow execution engine
4. ✅ Code generation pipeline
5. ✅ Wheel builder
6. ✅ Docker deployment

### Phase 3: Production Ready (Weeks 13-18)
1. ✅ MCP server implementation
2. ✅ Performance optimization
3. ✅ Security hardening
4. ✅ Monitoring & logging
5. ✅ Testing suite
6. ✅ Documentation

---

## ✅ Technical Specifications Summary

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Backend Framework** | FastAPI | 0.104+ | REST API |
| **Frontend Framework** | React.js | 18.2+ | UI |
| **Agent Orchestration** | AutoGen | 0.2+ | Multi-agent coordination |
| **Database** | PostgreSQL | 15+ | Data storage |
| **Cache/Queue** | Redis | 7+ | Caching & messaging |
| **Task Queue** | Celery | 5.3+ | Background jobs |
| **Code Distribution** | Python Wheel | - | Packaging |
| **Containerization** | Docker | 24+ | Deployment |
| **Template Engine** | Jinja2 | 3.1+ | Code generation |
| **ORM** | SQLAlchemy | 2.0+ | Database abstraction |
| **Validation** | Pydantic | 2.5+ | Data validation |
| **Authentication** | JWT | - | Token-based auth |

---

**This specification provides a complete, production-ready architecture for building SynthesiaCanvas 2.0 as a robust, scalable, multi-tenant platform.**

🚀 **Ready for implementation!**
