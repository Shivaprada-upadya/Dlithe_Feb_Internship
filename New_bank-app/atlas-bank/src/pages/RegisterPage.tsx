
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import PageTransition from '@/components/PageTransition';
import { toast } from '@/hooks/use-toast';

const RegisterPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would handle registration here
    toast({
      title: "Account created",
      description: "You have successfully registered an account.",
    });
  };

  const benefits = [
    "No minimum balance requirements",
    "No monthly maintenance fees",
    "24/7 customer support",
    "Secure mobile and online banking"
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col">
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 my-16">
            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-10"
            >
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Create your account</h1>
                <p className="text-muted-foreground">
                  Enter your information to get started with Atlas Bank
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Create a password" required />
                  <p className="text-xs text-muted-foreground">
                    Password must be at least 8 characters long and include a number and special character.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm your password" required />
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I agree to the <Link to="/" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/" className="text-primary hover:underline">Privacy Policy</Link>.
                  </Label>
                </div>
                
                <Button type="submit" className="w-full">
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/profile" className="text-primary font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </motion.div>
            
            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-8">
                <div className="inline-block p-3 rounded-2xl bg-primary/10 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-bank"><rect x="4" y="9" width="16" height="10" rx="2"/><path d="m12 3 8 4.5V9H4V7.5L12 3Z"/><line x1="12" y1="9" x2="12" y2="19"/><line x1="8" y1="19" x2="8" y2="9"/><line x1="16" y1="19" x2="16" y2="9"/><line x1="4" y1="19" x2="20" y2="19"/></svg>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Banking with benefits</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join Atlas Bank and experience banking that puts you first, with features designed to make your financial life simpler.
                </p>
              </div>
              
              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-center"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="rounded-xl bg-blue-50 p-6 border border-blue-100">
                <div className="flex items-start">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">FDIC Insured</h3>
                    <p className="text-sm text-muted-foreground">
                      Your deposits are insured up to $250,000 by the Federal Deposit Insurance Corporation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default RegisterPage;
