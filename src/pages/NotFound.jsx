import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <>
      <Nav />
      <Helmet>
        <title>404 Not Found – Rynova AI</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      <main style={{
        minHeight: 'calc(100vh - 160px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        background: 'radial-gradient(ellipse at top, #101624 0%, #0b1019 100%)',
        color: '#fff'
      }}>
        <div style={{
          maxWidth: 600,
          textAlign: 'center',
          background: 'rgba(22,32,55,0.91)',
          borderRadius: 14,
          boxShadow: '0 0 18px 0 #41ffe32f',
          padding: '36px 24px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#41ffe3',
            marginBottom: 12
          }}>
            404
          </h1>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: 20
          }}>
            Page Not Found
          </h2>
          <p style={{
            marginBottom: 30,
            color: '#d5ffe7',
            lineHeight: 1.6
          }}>
            Oops! The page you’re looking for doesn’t exist or may have been moved.
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: 'linear-gradient(90deg, #41ffe3 0%, #13caf7 100%)',
              color: '#000',
              fontWeight: 700,
              borderRadius: 8,
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
