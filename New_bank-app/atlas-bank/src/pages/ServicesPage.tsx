
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CreditCard, PiggyBank, LineChart, Banknote, Shield, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';

const ServicesPage = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(servicesRef, { once: true, amount: 0.2 });
  
  // Services cards data
  const services = [
    {
      icon: <CreditCard className="h-7 w-7" />,
      title: 'Credit Cards',
      description: 'Premium cards with competitive rates, rewards, and no annual fees.',
      link: '/services'
    },
    {
      icon: <PiggyBank className="h-7 w-7" />,
      title: 'Savings Accounts',
      description: 'High-yield savings accounts to help your money grow faster.',
      link: '/services'
    },
    {
      icon: <LineChart className="h-7 w-7" />,
      title: 'Investments',
      description: 'Smart investment opportunities managed by industry experts.',
      link: '/services'
    },
    {
      icon: <Banknote className="h-7 w-7" />,
      title: 'Personal Loans',
      description: 'Low-interest personal loans for your important life moments.',
      link: '/services'
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 pt-24 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Banking services designed around your needs
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Discover our comprehensive range of banking solutions tailored to help you manage, grow, and protect your money with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Open an Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Compare Plans
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-card">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Atlas Platinum Card</h3>
                  <p className="text-muted-foreground mb-6">Premium benefits with no annual fee</p>
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-5 rounded-xl mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    </div>
                    <div className="relative mb-8">
                      <p className="text-sm opacity-80 mb-1">Balance</p>
                      <p className="text-2xl font-semibold">$12,456.78</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm">•••• •••• •••• 4821</p>
                      <p className="text-sm">09/25</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Reward Points</p>
                      <p className="font-semibold">24,530</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Cashback</p>
                      <p className="font-semibold">$345.20</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              Exclusive Services
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl mb-6">
              Discover our premium banking services
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive range of financial products designed to help you achieve your goals.
            </p>
          </div>
          
          <div 
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-6 flex flex-col h-full"
                >
                  <div className="p-2 bg-primary/10 rounded-full w-fit mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
                  <div className="mt-auto">
                    <Link to={service.link} className="text-primary font-medium text-sm inline-flex items-center hover:underline">
                      Learn more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-t from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                  Advanced Features
                </span>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Banking that works for you
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our banking app puts powerful tools in your hands, giving you complete control over your finances with just a few taps.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="mr-4 p-2 bg-blue-100 rounded-full text-primary">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Advanced Security</h3>
                      <p className="text-sm text-muted-foreground">
                        State-of-the-art encryption and biometric authentication keep your account secure at all times.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 p-2 bg-blue-100 rounded-full text-primary">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Intuitive Mobile App</h3>
                      <p className="text-sm text-muted-foreground">
                        Manage all your accounts, make payments, and track your spending from our beautiful mobile app.
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Link to="/register">
                    <Button>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Mobile banking app" 
                    className="w-full rounded-xl object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Atlas Bank App</p>
                      <p className="text-xs opacity-80">Everything you need, one tap away</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to experience better banking?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have already made the switch to Atlas Bank.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="font-medium">
                  Open an Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="font-medium">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServicesPage;