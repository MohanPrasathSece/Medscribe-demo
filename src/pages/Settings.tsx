import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Box, Edit, CreditCard, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Settings = () => {
    const [activeTab, setActiveTab] = useState<"account" | "billing">("account");

    const handleSave = () => {
        toast.success("Settings saved successfully!");
    };

    return (
        <AppLayout>
            <div className="space-y-6">

                {/* Header with Title and Toggle */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground/90">Settings</h1>

                    <div className="bg-card rounded-lg p-1 border border-border inline-flex shadow-sm">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setActiveTab("account")}
                            className={`${activeTab === "account" ? "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary shadow-sm" : "text-muted-foreground hover:bg-transparent"}`}
                        >
                            Account
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setActiveTab("billing")}
                            className={`${activeTab === "billing" ? "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary shadow-sm" : "text-muted-foreground hover:bg-transparent"}`}
                        >
                            Billing
                        </Button>
                    </div>
                </div>

                {activeTab === "account" ? (
                    /* Account Tab Content */
                    <div className="bg-card rounded-lg border border-border p-6 shadow-sm mx-auto w-full">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-lg font-semibold">Organization Information</h2>
                                <p className="text-sm text-muted-foreground mt-1">Manage your organization details and contact information.</p>
                            </div>
                            <Button variant="outline" className="gap-2" onClick={() => toast.info("Edit mode enabled")}>
                                <Edit className="w-4 h-4" />
                                Edit
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Organization Name */}
                            <div className="bg-muted/30 p-4 rounded-lg flex items-start justify-between border border-border/50">
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1">Organization Name</div>
                                    <div className="font-medium text-foreground">Mmmm</div>
                                </div>
                                <span className="p-1 rounded-full bg-secondary text-muted-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                </span>
                            </div>

                            {/* Description */}
                            <div className="bg-muted/30 p-4 rounded-lg flex items-start justify-between border border-border/50">
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1">Description</div>
                                    <div className="font-medium text-foreground italic text-muted-foreground">No description</div>
                                </div>
                                <span className="p-1 rounded-full bg-secondary text-muted-foreground">
                                    <Box className="w-4 h-4" />
                                </span>
                            </div>

                            {/* Contact Person */}
                            <div className="bg-muted/30 p-4 rounded-lg flex items-start justify-between border border-border/50">
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1">Contact Person</div>
                                    <div className="font-medium text-muted-foreground italic">Not set</div>
                                </div>
                                <span className="p-1 rounded-full bg-secondary text-muted-foreground">
                                    <AlertCircle className="w-4 h-4 text-amber-500" />
                                </span>
                            </div>

                            {/* Contact Email */}
                            <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1">Contact Email</div>
                                    <div className="font-medium text-foreground">mohan@example.com</div>
                                </div>
                            </div>

                            {/* Contact Phone */}
                            <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1">Contact Phone</div>
                                    <div className="font-medium text-foreground">+61 412 *** ***</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Billing Tab Content */
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Current Plan</CardTitle>
                                <CardDescription>You are currently on the trial period of the Practice Clinic plan.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between bg-primary/5 p-4 rounded-lg border border-primary/10">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-primary/10 rounded-full">
                                            <CreditCard className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg">Practice Clinic (Trial)</div>
                                            <div className="text-sm text-muted-foreground">Expires in 14 days</div>
                                        </div>
                                    </div>
                                    <Button>Upgrade Plan</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Free Plan */}
                            <Card className="border-border shadow-sm hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <CardTitle>Starter</CardTitle>
                                    <CardDescription>For individuals just getting started.</CardDescription>
                                    <div className="mt-4 text-3xl font-bold">$0 <span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 5 Consults/month</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Basic Templates</li>
                                        <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-muted-foreground" /> No Custom Branding</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full">Downgrade</Button>
                                </CardFooter>
                            </Card>

                            {/* Pro Plan */}
                            <Card className="border-primary shadow-md relative overflow-hidden bg-primary/5">
                                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-bl-lg">Popular</div>
                                <CardHeader>
                                    <CardTitle className="text-primary">Practice Clinic</CardTitle>
                                    <CardDescription>For growing clinics.</CardDescription>
                                    <div className="mt-4 text-3xl font-bold">$29 <span className="text-sm font-normal text-muted-foreground">/mo per user</span></div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Unlimited Consults</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Advanced Templates</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Custom Branding</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Priority Support</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Current Plan</Button>
                                </CardFooter>
                            </Card>

                            {/* Enterprise Plan */}
                            <Card className="border-border shadow-sm hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <CardTitle>Enterprise</CardTitle>
                                    <CardDescription>For large healthcare organizations.</CardDescription>
                                    <div className="mt-4 text-3xl font-bold">Custom</div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> All Pro features</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> SSO & Audit Logs</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Dedicated Account Manager</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full">Contact Sales</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
};

export default Settings;
