import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header>
        <h1>React News App</h1>
        <nav>
          <Link to="/" style={{ 
            textDecoration: 'none', 
            color: '#0066cc', 
            fontWeight: 'bold' 
          }}>Home</Link>
        </nav>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;