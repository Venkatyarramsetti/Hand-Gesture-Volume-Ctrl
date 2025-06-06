
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Zap, Shield, Cpu, Hand, Volume2, Wifi, Camera, Settings, Code } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Eye className="h-8 w-8 text-purple-600" />,
      title: "Advanced Hand Tracking",
      description: "Powered by Google's MediaPipe technology for precise hand landmark detection with sub-pixel accuracy.",
      details: ["21 hand landmarks detection", "Real-time processing at 30+ FPS", "Robust lighting conditions", "Multiple hand orientations"]
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Real-time Response",
      description: "Ultra-low latency gesture recognition with immediate volume adjustments for natural interaction.",
      details: ["< 50ms response time", "Smooth volume transitions", "No input lag", "Instant feedback"]
    },
    {
      icon: <Volume2 className="h-8 w-8 text-indigo-600" />,
      title: "Precise Volume Control",
      description: "Granular volume control based on thumb-index finger distance with intelligent scaling algorithms.",
      details: ["0-100% volume range", "Adaptive sensitivity", "Gesture calibration", "Smooth interpolation"]
    },
    {
      icon: <Wifi className="h-8 w-8 text-green-600" />,
      title: "WebSocket Integration",
      description: "Seamless communication between Python backend and web interface using real-time WebSocket protocol.",
      details: ["Real-time data streaming", "Automatic reconnection", "Error handling", "Cross-platform support"]
    },
    {
      icon: <Camera className="h-8 w-8 text-red-600" />,
      title: "Computer Vision",
      description: "State-of-the-art computer vision algorithms for robust gesture recognition in various conditions.",
      details: ["OpenCV integration", "Noise reduction", "Background subtraction", "Adaptive thresholding"]
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Privacy Focused",
      description: "All processing happens locally on your device. No data is sent to external servers.",
      details: ["Local processing only", "No cloud dependencies", "Privacy by design", "Secure connections"]
    },
    {
      icon: <Cpu className="h-8 w-8 text-teal-600" />,
      title: "Optimized Performance",
      description: "Efficient algorithms designed for minimal CPU usage while maintaining high accuracy.",
      details: ["Low CPU overhead", "Memory efficient", "Optimized algorithms", "Battery friendly"]
    },
    {
      icon: <Settings className="h-8 w-8 text-pink-600" />,
      title: "Customizable",
      description: "Adjustable sensitivity settings and gesture thresholds to match your preferences.",
      details: ["Sensitivity adjustment", "Custom gestures", "Calibration modes", "User preferences"]
    },
    {
      icon: <Code className="h-8 w-8 text-violet-600" />,
      title: "Open Source",
      description: "Built with modern technologies and available for educational purposes and customization.",
      details: ["Python + OpenCV", "MediaPipe integration", "WebSocket API", "Modern web stack"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advanced capabilities that make our hand gesture volume control system 
            the most intuitive and responsive solution for natural computer interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technical Specifications
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hand className="h-6 w-6 text-purple-600" />
                  Computer Vision Engine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Framework:</span>
                    <span className="font-medium">MediaPipe Hands</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Detection Model:</span>
                    <span className="font-medium">BlazePalm + HandLandmark</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Landmarks:</span>
                    <span className="font-medium">21 Hand Points</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Speed:</span>
                    <span className="font-medium">30+ FPS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accuracy:</span>
                    <span className="font-medium">95%+ Detection Rate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-blue-600" />
                  System Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Python Version:</span>
                    <span className="font-medium">3.7+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">RAM Usage:</span>
                    <span className="font-medium">< 200MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CPU Usage:</span>
                    <span className="font-medium">< 15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Camera:</span>
                    <span className="font-medium">Any USB/Webcam</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">OS Support:</span>
                    <span className="font-medium">Windows, macOS, Linux</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Features;
