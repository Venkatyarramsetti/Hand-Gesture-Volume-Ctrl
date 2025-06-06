
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Volume2, VolumeX, Wifi, WifiOff, Hand, AlertCircle, Play, Square } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GestureControl = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isRunning, setIsRunning] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("Disconnected");
  const wsRef = useRef<WebSocket | null>(null);
  const { toast } = useToast();

  const connectWebSocket = () => {
    try {
      const ws = new WebSocket('ws://localhost:8765');
      wsRef.current = ws;

      ws.onopen = () => {
        setIsConnected(true);
        setConnectionStatus("Connected");
        setIsRunning(true);
        toast({
          title: "Connected!",
          description: "Successfully connected to gesture control backend.",
        });
        console.log("WebSocket connected successfully");
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.volume !== undefined) {
            setVolume(data.volume);
            console.log("Volume updated:", data.volume);
          }
        } catch (error) {
          console.error("Error parsing WebSocket data:", error);
        }
      };

      ws.onclose = () => {
        setIsConnected(false);
        setConnectionStatus("Disconnected");
        setIsRunning(false);
        console.log("WebSocket connection closed");
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        setConnectionStatus("Connection Error");
        toast({
          title: "Connection Error",
          description: "Failed to connect to the Python backend. Make sure the server is running.",
          variant: "destructive",
        });
      };

    } catch (error) {
      console.error("Failed to create WebSocket connection:", error);
      toast({
        title: "Connection Failed",
        description: "Unable to establish WebSocket connection.",
        variant: "destructive",
      });
    }
  };

  const disconnect = () => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
    setIsConnected(false);
    setIsRunning(false);
    setConnectionStatus("Disconnected");
  };

  useEffect(() => {
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX className="h-6 w-6" />;
    return <Volume2 className="h-6 w-6" />;
  };

  const getConnectionIcon = () => {
    return isConnected ? (
      <Wifi className="h-5 w-5 text-green-500" />
    ) : (
      <WifiOff className="h-5 w-5 text-red-500" />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Live Gesture Control
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Control your system volume in real-time using hand gestures. Make sure the Python backend is running.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Control Panel */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hand className="h-6 w-6" />
                  Gesture Control Panel
                </CardTitle>
                <div className="flex items-center gap-2">
                  {getConnectionIcon()}
                  <span className={`text-sm font-medium ${
                    isConnected ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {connectionStatus}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Volume Display */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Current Volume</span>
                  <div className="flex items-center gap-2">
                    {getVolumeIcon()}
                    <span className="text-2xl font-bold text-gray-900">{volume}%</span>
                  </div>
                </div>
                <Progress value={volume} className="h-3" />
              </div>

              {/* Connection Controls */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  {!isConnected ? (
                    <Button 
                      onClick={connectWebSocket}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Connect & Start
                    </Button>
                  ) : (
                    <Button 
                      onClick={disconnect}
                      variant="destructive"
                      className="flex-1"
                    >
                      <Square className="h-4 w-4 mr-2" />
                      Stop & Disconnect
                    </Button>
                  )}
                </div>

                {isRunning && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Gesture recognition active</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Setup Instructions</CardTitle>
              <CardDescription>
                Follow these steps to start using gesture control
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-purple-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Install Dependencies</h4>
                    <p className="text-sm text-gray-600">Make sure you have Python with opencv-python, mediapipe, numpy, websockets, and pycaw installed.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Run Python Backend</h4>
                    <p className="text-sm text-gray-600">Execute the Python script to start the WebSocket server on localhost:8765.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-indigo-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-indigo-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Connect & Control</h4>
                    <p className="text-sm text-gray-600">Click "Connect & Start" and use thumb-index finger distance to control volume.</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-800">Important Note</h4>
                    <p className="text-sm text-amber-700">
                      This web interface connects to your local Python backend. The gesture recognition happens on your computer for privacy and performance.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Status */}
        <Card className="mt-8 border-2">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-2 ${
                  isConnected ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {getConnectionIcon()}
                </div>
                <h4 className="font-medium">Connection</h4>
                <p className={`text-sm ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
                  {connectionStatus}
                </p>
              </div>

              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-2 ${
                  isRunning ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <Hand className={`h-6 w-6 ${isRunning ? 'text-blue-600' : 'text-gray-400'}`} />
                </div>
                <h4 className="font-medium">Gesture Detection</h4>
                <p className={`text-sm ${isRunning ? 'text-blue-600' : 'text-gray-500'}`}>
                  {isRunning ? 'Active' : 'Inactive'}
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-2 bg-purple-100">
                  {getVolumeIcon()}
                </div>
                <h4 className="font-medium">Volume Level</h4>
                <p className="text-sm text-purple-600">{volume}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default GestureControl;
