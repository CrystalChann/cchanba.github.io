import React from 'react';
import { useRouter } from 'next/navigation'; // Updated import

const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <nav style={styles.nav}>
      <button type="button" style={styles.button} onClick={() => router.push('/')}>
        Home
      </button>
      <button style={styles.button} onClick={() => router.push('/project1')}>
        Project 1
      </button>
      <button style={styles.button} onClick={() => router.push('/project2')}>
        Project 2
      </button>
      <button style={styles.button} onClick={() => router.push('/project3')}>
        Project 3
      </button>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
    height: "10vh",
    padding: '10px',
    marginBottom: '10vh'
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: '#949fca',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default NavBar;