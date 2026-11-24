import './App.css'

function App() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">DH</span>
          <span>DevOps<span className="brand-highlight">Hub</span></span>
        </div>

        <nav className="navigation">
          <a href="#overview" className="nav-item active">
            <span>▦</span> Overview
          </a>
          <a href="#pipeline" className="nav-item">
            <span>↻</span> CI/CD Pipeline
          </a>
          <a href="#deployments" className="nav-item">
            <span>◇</span> Deployments
          </a>
          <a href="#testing" className="nav-item">
            <span>✓</span> Testing
          </a>
          <a href="#security" className="nav-item">
            <span>⌑</span> Security
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="profile">
            <div className="profile-avatar">TJ</div>
            <div>
              <strong>DevOps Engineer</strong>
              <small>Project Administrator</small>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content" id="overview">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Workspace / Overview</p>
            <h1>Deployment Dashboard</h1>
          </div>

          <div className="topbar-right">
            <span className="system-status">
              <span className="status-dot"></span>
              All Systems Operational
            </span>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="welcome-section">
          <div>
            <h2>Welcome to your DevOps Dashboard</h2>
            <p>
              Monitor your application pipeline, deployments, tests, and
              security checks in one place.
            </p>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="stats-grid">
          <article className="stat-card">
            <div className="stat-card-header">
              <span>Total Deployments</span>
              <span className="stat-icon purple">↗</span>
            </div>
            <h3>24</h3>
            <p className="stat-description">Across all environments</p>
          </article>

          <article className="stat-card">
            <div className="stat-card-header">
              <span>Build Success Rate</span>
              <span className="stat-icon green">✓</span>
            </div>
            <h3>96.8%</h3>
            <p className="stat-description">Last 30 days</p>
          </article>

          <article className="stat-card">
            <div className="stat-card-header">
              <span>Average Build Time</span>
              <span className="stat-icon blue">◷</span>
            </div>
            <h3>2m 34s</h3>
            <p className="stat-description">Pipeline execution time</p>
          </article>

          <article className="stat-card">
            <div className="stat-card-header">
              <span>Open Issues</span>
              <span className="stat-icon orange">!</span>
            </div>
            <h3>0</h3>
            <p className="stat-description">No critical issues</p>
          </article>
        </section>

        {/* Pipeline */}
        <section className="dashboard-section" id="pipeline">
          <div className="section-header">
            <div>
              <h2>CI/CD Pipeline</h2>
              <p>Latest pipeline execution</p>
            </div>
            <span className="badge success">Passed</span>
          </div>

          <div className="pipeline">
            <div className="pipeline-stage">
              <div className="stage-icon success-icon">✓</div>
              <strong>Code</strong>
              <small>Source committed</small>
            </div>

            <div className="pipeline-connector"></div>

            <div className="pipeline-stage">
              <div className="stage-icon success-icon">✓</div>
              <strong>Build</strong>
              <small>Build successful</small>
            </div>

            <div className="pipeline-connector"></div>

            <div className="pipeline-stage">
              <div className="stage-icon success-icon">✓</div>
              <strong>Test</strong>
              <small>Tests passed</small>
            </div>

            <div className="pipeline-connector"></div>

            <div className="pipeline-stage">
              <div className="stage-icon success-icon">✓</div>
              <strong>Deploy</strong>
              <small>Deployment complete</small>
            </div>
          </div>

          <div className="pipeline-footer">
            <span>Pipeline #24</span>
            <span>Branch: main</span>
            <span>Duration: 2m 34s</span>
          </div>
        </section>

        {/* Deployments */}
        <section className="dashboard-section" id="deployments">
          <div className="section-header">
            <div>
              <h2>Environments</h2>
              <p>Application deployment status</p>
            </div>
          </div>

          <div className="environment-grid">
            <article className="environment-card">
              <div className="environment-header">
                <div className="environment-icon staging">S</div>
                <div>
                  <h3>Staging</h3>
                  <p>Testing environment</p>
                </div>
                <span className="badge success">Active</span>
              </div>

              <div className="environment-details">
                <div>
                  <span>Version</span>
                  <strong>v1.2.4</strong>
                </div>
                <div>
                  <span>Last deployed</span>
                  <strong>Today</strong>
                </div>
              </div>

              <div className="environment-url">
                staging.example.com
              </div>
            </article>

            <article className="environment-card">
              <div className="environment-header">
                <div className="environment-icon production">P</div>
                <div>
                  <h3>Production</h3>
                  <p>Live environment</p>
                </div>
                <span className="badge success">Active</span>
              </div>

              <div className="environment-details">
                <div>
                  <span>Version</span>
                  <strong>v1.2.3</strong>
                </div>
                <div>
                  <span>Last deployed</span>
                  <strong>Yesterday</strong>
                </div>
              </div>

              <div className="environment-url">
                production.example.com
              </div>
            </article>
          </div>
        </section>

        {/* Testing and Security */}
        <section className="bottom-grid">
          <article className="dashboard-section" id="testing">
            <div className="section-header">
              <div>
                <h2>Testing Results</h2>
                <p>Latest automated tests</p>
              </div>
            </div>

            <div className="test-summary">
              <div className="test-score">98%</div>
              <div>
                <strong>Tests Passed</strong>
                <p>49 of 50 tests successful</p>
              </div>
            </div>

            <div className="test-progress">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>

            <div className="test-details">
              <span className="test-passed">49 Passed</span>
              <span className="test-failed">1 Failed</span>
            </div>
          </article>

          <article className="dashboard-section" id="security">
            <div className="section-header">
              <div>
                <h2>Security Overview</h2>
                <p>Latest security scan</p>
              </div>
            </div>

            <div className="security-item">
              <span className="security-check">✓</span>
              <div>
                <strong>Dependency Audit</strong>
                <small>No vulnerabilities detected</small>
              </div>
              <span className="badge success">Passed</span>
            </div>

            <div className="security-item">
              <span className="security-check">✓</span>
              <div>
                <strong>Code Quality</strong>
                <small>ESLint checks passed</small>
              </div>
              <span className="badge success">Passed</span>
            </div>
          </article>
        </section>

        {/* Activity */}
        <section className="dashboard-section activity-section">
          <div className="section-header">
            <div>
              <h2>Recent Activity</h2>
              <p>Latest pipeline events</p>
            </div>
          </div>

          <div className="activity-item">
            <span className="activity-icon success-icon">✓</span>
            <div>
              <strong>Production deployment successful</strong>
              <p>Version v1.2.3 deployed to production</p>
            </div>
            <time>Yesterday</time>
          </div>

          <div className="activity-item">
            <span className="activity-icon success-icon">✓</span>
            <div>
              <strong>Pipeline completed successfully</strong>
              <p>Build, test, and deployment stages passed</p>
            </div>
            <time>Today</time>
          </div>

          <div className="activity-item">
            <span className="activity-icon success-icon">✓</span>
            <div>
              <strong>Staging deployment successful</strong>
              <p>Version v1.2.4 deployed to staging</p>
            </div>
            <time>Today</time>
          </div>
        </section>

        <footer className="dashboard-footer">
          <p>DevOpsHub Dashboard | Frontend CI/CD Capstone Project</p>
        </footer>
      </main>
    </div>
  )
}

export default App
