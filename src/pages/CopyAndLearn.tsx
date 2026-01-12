import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

const CopyAndLearn = () => {
    return (
        <AppLayout>
            <div className="space-y-6 max-w-4xl">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold tracking-tight">Teach Composer AI Your Writing Style</h1>
                    <p className="text-muted-foreground">Provide examples to train the AI to match your writing style</p>
                </div>

                <div className="grid gap-6">
                    <Card className="bg-primary/5 border-primary/10">
                        <CardContent className="pt-6">
                            <div className="flex gap-4">
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-start gap-2 text-sm text-foreground">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                        <p>Paste an example letter or report, select a corresponding template, and save it to help Composer AI learn your unique writing style.</p>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-foreground">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                        <p>Composer AI needs only 3–5 samples to learn your style; older ones are replaced automatically.</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <span>Add New Sample</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="template-type">Template Type <span className="text-destructive">*</span></Label>
                                <Select>
                                    <SelectTrigger id="template-type">
                                        <SelectValue placeholder="Select a template..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="referral">Referral Letter</SelectItem>
                                        <SelectItem value="discharge">Discharge Summary</SelectItem>
                                        <SelectItem value="specialist">Specialist Report</SelectItem>
                                    </SelectContent>
                                </Select>
                                <p className="text-xs text-muted-foreground">Choose the template category for this letter</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="letter-content">Letter Content <span className="text-destructive">*</span></Label>
                                <Textarea
                                    id="letter-content"
                                    placeholder="Paste or write your letter here..."
                                    className="min-h-[200px] resize-y"
                                />
                                <div className="flex justify-between items-center text-xs text-muted-foreground">
                                    <span>Write or paste your letter content</span>
                                    <span>0 characters</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4">
                                <Button variant="outline" className="text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20">
                                    Clear
                                </Button>
                                <Button className="bg-primary hover:bg-primary/90">
                                    Save Sample
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </AppLayout>
    );
};

export default CopyAndLearn;
