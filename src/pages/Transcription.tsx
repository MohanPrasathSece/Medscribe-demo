import { useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mic, Pause, Square, FileText, Clock, Volume2, Upload, X, Play, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type RecordingStatus = "idle" | "recording" | "paused" | "stopped";

const mockTranscription = {
  chiefComplaint: "Patient presents with persistent headache for the past 3 days, described as throbbing pain localized to the right temporal region. Pain intensity rated as 7/10.",
  medicalHistory: "History of migraine headaches since age 25. Previous treatment with sumatriptan was effective. No history of hypertension, diabetes, or cardiovascular disease.",
  diagnosis: "Migraine headache without aura (ICD-10: G43.009). Rule out tension-type headache. Consider medication adjustment if symptoms persist.",
  notes: "Recommended to continue current medication regimen. Follow-up in 2 weeks if symptoms do not improve. Patient advised to maintain headache diary.",
};

const Transcription = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState<RecordingStatus>("idle");
  const [timer, setTimer] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessingUpload, setIsProcessingUpload] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setStatus("recording");
    setUploadedFile(null);
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    (window as any).timerInterval = interval;
  };

  const handlePause = () => {
    setStatus("paused");
    clearInterval((window as any).timerInterval);
  };

  const handleResume = () => {
    setStatus("recording");
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    (window as any).timerInterval = interval;
  };

  const handleStop = () => {
    setStatus("stopped");
    clearInterval((window as any).timerInterval);
  };

  const handleReset = () => {
    setStatus("idle");
    setTimer(0);
    setUploadedFile(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['audio/mpeg', 'audio/wav', 'audio/mp3', 'audio/m4a', 'audio/ogg', 'audio/webm'];
      if (!validTypes.includes(file.type) && !file.name.match(/\.(mp3|wav|m4a|ogg|webm)$/i)) {
        toast({
          title: "Invalid file type",
          description: "Please upload an audio file (MP3, WAV, M4A, OGG, or WebM)",
          variant: "destructive",
        });
        return;
      }
      setUploadedFile(file);
      setIsProcessingUpload(true);
      
      // Simulate processing
      setTimeout(() => {
        setIsProcessingUpload(false);
        setStatus("stopped");
        setTimer(Math.floor(Math.random() * 180) + 60); // Random duration 1-4 mins
        toast({
          title: "Audio processed",
          description: "Your audio file has been transcribed successfully.",
        });
      }, 2000);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeUploadedFile = () => {
    setUploadedFile(null);
    setStatus("idle");
    setTimer(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Layout hideFooter>
      <div className="min-h-[calc(100vh-73px)] bg-background">
        <div className="container-medical py-10">
          <div className="mb-10 text-center opacity-0 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Live <span className="text-primary">Transcription</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Record directly or upload audio files to transform speech into structured medical documentation.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Panel - Recording Controls */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recording Card */}
              <div className="glass-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {/* Microphone Button */}
                <div className="flex flex-col items-center mb-8">
                  <div className="relative mb-6">
                    <button
                      onClick={status === "idle" && !isProcessingUpload ? handleStart : status === "paused" ? handleResume : undefined}
                      disabled={status === "recording" || status === "stopped" || isProcessingUpload}
                      className={`w-36 h-36 rounded-full flex items-center justify-center transition-all duration-500 ${
                        status === "recording"
                          ? "bg-red-500 shadow-[0_0_40px_rgba(239,68,68,0.4)]"
                          : status === "paused"
                          ? "bg-amber-500"
                          : status === "stopped"
                          ? "bg-muted"
                          : "bg-gradient-to-br from-primary to-emerald-dark hover:shadow-glow"
                      } ${status === "idle" || status === "paused" ? "cursor-pointer active:scale-95 hover:scale-105" : ""}`}
                    >
                      <Mic className={`w-14 h-14 text-primary-foreground ${status === "recording" ? "animate-pulse" : ""}`} />
                    </button>
                    {status === "recording" && (
                      <>
                        <div className="pulse-ring inset-0 bg-red-500/30"></div>
                        <div className="pulse-ring inset-0 bg-red-500/20" style={{ animationDelay: "0.5s" }}></div>
                      </>
                    )}
                  </div>

                  {/* Timer */}
                  <div className="flex items-center gap-2 text-3xl font-mono mb-3">
                    <Clock className="w-6 h-6 text-muted-foreground" />
                    <span className="text-foreground font-bold">{formatTime(timer)}</span>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        status === "recording"
                          ? "bg-red-500 animate-pulse"
                          : status === "paused"
                          ? "bg-amber-500"
                          : status === "stopped"
                          ? "bg-primary"
                          : "bg-muted-foreground"
                      }`}
                    ></div>
                    <span className="text-sm font-medium text-foreground">
                      {isProcessingUpload ? "Processing..." : status === "idle" ? "Ready to record" : status === "recording" ? "Recording..." : status === "paused" ? "Paused" : "Complete"}
                    </span>
                  </div>
                </div>

                {/* Waveform */}
                {(status === "recording" || status === "paused") && (
                  <div className="bg-secondary/50 rounded-2xl p-5 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Volume2 className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Audio Level</span>
                    </div>
                    <div className="h-16 flex items-center justify-center gap-1">
                      {[...Array(28)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 rounded-full transition-all duration-150 ${
                            status === "recording" ? "bg-primary" : "bg-muted-foreground/50"
                          }`}
                          style={{
                            height: status === "recording" ? `${Math.random() * 48 + 8}px` : "8px",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Controls */}
                <div className="flex gap-3 justify-center">
                  {status === "idle" && !isProcessingUpload && (
                    <Button variant="premium" size="lg" onClick={handleStart} className="flex-1">
                      <Mic className="w-5 h-5" />
                      Start Recording
                    </Button>
                  )}
                  {status === "recording" && (
                    <>
                      <Button variant="outline" size="lg" onClick={handlePause} className="flex-1">
                        <Pause className="w-5 h-5" />
                        Pause
                      </Button>
                      <Button variant="destructive" size="lg" onClick={handleStop} className="flex-1">
                        <Square className="w-5 h-5" />
                        Stop
                      </Button>
                    </>
                  )}
                  {status === "paused" && (
                    <>
                      <Button variant="premium" size="lg" onClick={handleResume} className="flex-1">
                        <Play className="w-5 h-5" />
                        Resume
                      </Button>
                      <Button variant="destructive" size="lg" onClick={handleStop} className="flex-1">
                        <Square className="w-5 h-5" />
                        Stop
                      </Button>
                    </>
                  )}
                  {status === "stopped" && (
                    <Button variant="premium" size="lg" onClick={handleReset} className="flex-1">
                      <Mic className="w-5 h-5" />
                      New Recording
                    </Button>
                  )}
                </div>
              </div>

              {/* Upload Card */}
              <div className="glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Upload className="w-5 h-5 text-primary" />
                  Upload Audio File
                </h3>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="audio/*,.mp3,.wav,.m4a,.ogg,.webm"
                  onChange={handleFileUpload}
                  className="hidden"
                />

                {uploadedFile ? (
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Volume2 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{uploadedFile.name}</p>
                      <p className="text-xs text-muted-foreground">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <button
                      onClick={removeUploadedFile}
                      className="p-2 hover:bg-destructive/10 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4 text-destructive" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={triggerFileInput}
                    disabled={status !== "idle" || isProcessingUpload}
                    className="w-full p-6 border-2 border-dashed border-border rounded-xl hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3 transition-transform group-hover:scale-110" />
                    <p className="text-sm font-medium text-foreground mb-1">Drop audio file or click to browse</p>
                    <p className="text-xs text-muted-foreground">MP3, WAV, M4A, OGG, WebM supported</p>
                  </button>
                )}
              </div>
            </div>

            {/* Right Panel - Transcription Output */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold">AI Output</h2>
                  </div>
                  {status === "stopped" && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                      Export
                    </Button>
                  )}
                </div>

                {status === "idle" && !isProcessingUpload ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mic className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <p className="text-xl font-medium text-foreground mb-2">No transcription yet</p>
                    <p className="text-muted-foreground">Start recording or upload an audio file to see results</p>
                  </div>
                ) : isProcessingUpload ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <Volume2 className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-xl font-medium text-foreground mb-2">Processing audio...</p>
                    <p className="text-muted-foreground">AI is transcribing your file</p>
                    <div className="mt-6 w-48 h-2 bg-secondary rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-primary shimmer rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {[
                      { label: "Chief Complaint", content: status === "stopped" ? mockTranscription.chiefComplaint : "Patient presents with persistent headache..." },
                      { label: "Medical History", content: status === "stopped" ? mockTranscription.medicalHistory : "History of migraine headaches..." },
                      { label: "Diagnosis", content: status === "stopped" ? mockTranscription.diagnosis : "Analyzing symptoms..." },
                      { label: "Notes", content: status === "stopped" ? mockTranscription.notes : "Generating recommendations..." },
                    ].map((section, i) => (
                      <div 
                        key={section.label} 
                        className={`p-5 bg-secondary/30 rounded-xl border-l-4 border-primary transition-all duration-300 hover:bg-secondary/50 ${status === "recording" ? "animate-pulse" : ""}`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{section.label}</h3>
                        <p className="text-foreground leading-relaxed">{section.content}</p>
                      </div>
                    ))}

                    {status === "stopped" && (
                      <div className="pt-6 border-t border-border flex gap-3">
                        <Button variant="premium" className="flex-1">
                          <Download className="w-5 h-5" />
                          Export Documentation
                        </Button>
                        <Button variant="outline">
                          Edit
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transcription;
