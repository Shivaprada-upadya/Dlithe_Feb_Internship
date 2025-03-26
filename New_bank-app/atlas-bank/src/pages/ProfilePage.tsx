
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Bell, ShieldCheck, CreditCard, LogOut, Edit, Camera } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { toast } from '@/hooks/use-toast';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Profile sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <button className="absolute bottom-0 right-0 p-1 rounded-full bg-primary text-white">
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                    <h2 className="text-xl font-bold">John Doe</h2>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                    
                    <div className="w-full border-t border-border my-6"></div>
                    
                    <nav className="w-full">
                      <ul className="space-y-1 w-full">
                        <li>
                          <Button variant="ghost" className="w-full justify-start">
                            <User className="mr-2 h-4 w-4" />
                            Personal Information
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start">
                            <Bell className="mr-2 h-4 w-4" />
                            Notifications
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start">
                            <ShieldCheck className="mr-2 h-4 w-4" />
                            Security
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Payment Methods
                          </Button>
                        </li>
                      </ul>
                    </nav>
                    
                    <div className="w-full border-t border-border my-6"></div>
                    
                    <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Main content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-9"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-1">Profile Settings</h1>
                  <p className="text-muted-foreground">
                    Manage your account information and preferences
                  </p>
                </div>
                {!isEditing && (
                  <Button 
                    onClick={() => setIsEditing(true)}
                    variant="outline" 
                    className="flex items-center"
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                )}
              </div>
              
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                </TabsList>
                
                <TabsContent value="personal">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>
                        Manage your personal details and contact information
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSaveProfile}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input 
                              id="firstName" 
                              defaultValue="John" 
                              readOnly={!isEditing}
                              className={!isEditing ? "bg-muted" : ""}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input 
                              id="lastName" 
                              defaultValue="Doe" 
                              readOnly={!isEditing}
                              className={!isEditing ? "bg-muted" : ""}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input 
                              id="email" 
                              defaultValue="john.doe@example.com" 
                              readOnly={!isEditing}
                              className={!isEditing ? "bg-muted" : ""}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input 
                              id="phone" 
                              defaultValue="+1 (555) 123-4567" 
                              readOnly={!isEditing}
                              className={!isEditing ? "bg-muted" : ""}
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="address">Address</Label>
                            <Input 
                              id="address" 
                              defaultValue="123 Main St, Anytown, USA" 
                              readOnly={!isEditing}
                              className={!isEditing ? "bg-muted" : ""}
                            />
                          </div>
                        </div>
                        
                        {isEditing && (
                          <div className="flex justify-end mt-6 space-x-3">
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={() => setIsEditing(false)}
                            >
                              Cancel
                            </Button>
                            <Button type="submit">
                              Save Changes
                            </Button>
                          </div>
                        )}
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="security">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                      <CardDescription>
                        Manage your password and account security preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Password</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Your password was last changed 3 months ago
                          </p>
                          <Button variant="outline">Change Password</Button>
                        </div>
                        
                        <div className="border-t border-border pt-6">
                          <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Enable two-factor authentication</p>
                              <p className="text-sm text-muted-foreground">
                                Add an extra layer of security to your account
                              </p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                        
                        <div className="border-t border-border pt-6">
                          <h3 className="text-lg font-medium mb-4">Login Sessions</h3>
                          <div className="space-y-4">
                            <div className="bg-muted/40 p-4 rounded-lg">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium">Current Session</p>
                                  <p className="text-sm text-muted-foreground">
                                    MacBook Pro • San Francisco, CA • Started 2 hours ago
                                  </p>
                                </div>
                                <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                  Active
                                </div>
                              </div>
                            </div>
                            
                            <Button variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                              Sign Out of All Devices
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="preferences">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                      <CardDescription>
                        Choose how and when you receive notifications
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Transaction Alerts</p>
                              <p className="text-sm text-muted-foreground">
                                Receive notifications for all account transactions
                              </p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Security Alerts</p>
                              <p className="text-sm text-muted-foreground">
                                Notify about suspicious activity and security events
                              </p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Marketing Communications</p>
                              <p className="text-sm text-muted-foreground">
                                Receive updates about new features and promotions
                              </p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                        
                        <div className="border-t border-border pt-6">
                          <h3 className="text-lg font-medium mb-4">Communication Channels</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Email Notifications</p>
                              </div>
                              <Switch defaultChecked />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">SMS Notifications</p>
                              </div>
                              <Switch defaultChecked />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Push Notifications</p>
                              </div>
                              <Switch defaultChecked />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-border pt-6 flex justify-end">
                      <Button>Save Preferences</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProfilePage;
