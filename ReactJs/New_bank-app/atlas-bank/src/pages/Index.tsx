import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: '📱',
      title: 'Mobile Banking',
      description: 'Access your account anytime, anywhere with our secure mobile app.'
    },
    {
      icon: '🔒',
      title: 'Secure Transactions',
      description: 'Rest easy with our state-of-the-art security protocols protecting your money.'
    },
    {
      icon: '💳',
      title: 'Digital Cards',
      description: 'Manage your cards digitally with instant freezing and spending controls.'
    },
    {
      icon: '💻',
      title: 'Online Banking',
      description: 'Manage your finances with our intuitive and powerful online platform.'
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textAlign: 'center' }}
          >
            <span style={{ 
              display: 'inline-block', 
              padding: '0.25rem 0.75rem', 
              marginBottom: '1.5rem', 
              fontSize: '0.75rem', 
              fontWeight: '600', 
              color: 'var(--primary-color)', 
              backgroundColor: 'rgba(26, 115, 232, 0.1)', 
              borderRadius: '9999px' 
            }}>
              Banking Reimagined
            </span>
            <h1 className="heading-xl" style={{ maxWidth: '54rem', margin: '0 auto 1.5rem' }}>
              Banking that puts you <span style={{ color: 'var(--primary-color)' }}>first</span>, not your money
            </h1>
            <p style={{ maxWidth: '36rem', margin: '0 auto 2.5rem', color: 'var(--text-light)', fontSize: '1.125rem' }}>
              Experience banking designed around your life, not the other way around. Elegant, intuitive, and built for the way you live today.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
            className="buttons-container"
          >
            <Link to="/register">
              <button className="btn btn-primary btn-lg">
                Get Started
                <svg style={{ marginLeft: '0.5rem' }} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
            <Link to="/services">
              <button className="btn btn-outline btn-lg">
                Explore Services
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            style={{ 
              position: 'absolute', 
              bottom: '2.5rem', 
              left: '50%', 
              transform: 'translateX(-50%)' 
            }}
          >
            <button
              onClick={handleScrollDown}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                fontSize: '0.875rem', 
                color: 'var(--text-light)', 
                background: 'none', 
                cursor: 'pointer' 
              }}
            >
              <span style={{ marginBottom: '0.5rem' }}>Scroll to learn more</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'bounce 1s infinite' }}>
                <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={scrollRef} 
        className="section-container"
        style={{ background: 'white' }}
      >
        <div className="container">
          <div style={{ maxWidth: '48rem', margin: '0 auto 4rem', textAlign: 'center' }}>
            <span style={{ 
              display: 'inline-block', 
              padding: '0.25rem 0.75rem', 
              marginBottom: '1rem', 
              fontSize: '0.75rem', 
              fontWeight: '600', 
              color: 'var(--primary-color)', 
              backgroundColor: 'rgba(26, 115, 232, 0.1)', 
              borderRadius: '9999px' 
            }}>
              Why Choose Us
            </span>
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
              Banking that adapts to your lifestyle
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-light)' }}>
              We've reimagined every aspect of banking to create an experience that's seamless, intuitive, and designed around your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 grid-cols-4" style={{ marginTop: '4rem', gap: '2rem' }}>
            {features.map((feature, index) => (
              <div key={index} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ 
                  padding: '0.5rem', 
                  backgroundColor: 'rgba(26, 115, 232, 0.1)', 
                  borderRadius: '9999px', 
                  width: 'fit-content', 
                  marginBottom: '1rem',
                  fontSize: '1.5rem'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container" style={{ background: 'rgba(26, 115, 232, 0.05)' }}>
        <div className="container">
          <div style={{ 
            maxWidth: '64rem', 
            margin: '0 auto', 
            background: 'white', 
            borderRadius: 'var(--radius)', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="cta-grid">
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="heading-md" style={{ marginBottom: '1rem' }}>Ready to experience better banking?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                  Join thousands of customers who have already switched to Atlas Bank.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="cta-buttons">
                  <Link to="/register">
                    <button className="btn btn-primary btn-lg">Open an Account</button>
                  </Link>
                  <Link to="/services">
                    <button className="btn btn-outline btn-lg">Learn More</button>
                  </Link>
                </div>
              </div>
              <div style={{ position: 'relative', height: '16rem' }} className="cta-image">
                <div style={{ 
                  position: 'absolute', 
                  inset: '0', 
                  background: 'linear-gradient(to right, #1a73e8, #1557b0)' 
                }}></div>
                <div style={{ 
                  position: 'absolute', 
                  inset: '0', 
                  background: 'linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)', 
                  backgroundSize: '24px 24px'
                }}></div>
                <div style={{ 
                  position: 'absolute', 
                  inset: '0', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white',
                  textAlign: 'center',
                  padding: '0 1.5rem'
                }}>
                  <div>
                    <p style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Join Today</p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem' }}>No hidden fees. No minimum balance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
