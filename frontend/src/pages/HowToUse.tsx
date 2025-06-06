
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Play, Hand, Volume2, Settings, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HowToUse = () => {
  const installationSteps = [
    {
      step: 1,
      title: "Install Python Dependencies",
      description: "Install the required Python packages using pip",
      code: "pip install opencv-python mediapipe numpy websockets pycaw comtypes",
      icon: <Download className="h-6 w-6 text-purple-600" />
    },
    {
      step: 2,
      title: "Download the Python Script",
      description: "Save the gesture control Python code to your computer",
      code: "# Save as gesture_volume_control.py\n# Copy the provided Python code",
      icon: <Settings className="h-6 w-6 text-blue-600" />
    },
    {
      step: 3,
      title: "Run the Backend Server",
      description: "Execute the Python script to start the WebSocket server",
      code: "python gesture_volume_control.py",
      icon: <Play className="h-6 w-6 text-green-600" />
    }
  ];

  const usageSteps = [
    {
      step: 1,
      title: "Position Your Hand",
      description: "Place your hand 1-2 feet away from your webcam with palm facing the camera",
      tip: "Ensure good lighting and avoid busy backgrounds for better detection"
    },
    {
      step: 2,
      title: "Make the Gesture",
      description: "Use your thumb and index finger to create a pinching gesture",
      tip: "Start with fingers close together for minimum volume"
    },
    {
      step: 3,
      title: "Control Volume",
      description: "Move your thumb and index finger apart to increase volume, closer to decrease",
      tip: "Smooth, steady movements work better than quick jerky motions"
    },
    {
      step: 4,
      title: "Fine-tune Control",
      description: "Small movements provide precise volume control for your comfort",
      tip: "The system automatically scales based on your hand size"
    }
  ];

  const troubleshooting = [
    {
      issue: "Hand not detected",
      solution: "Ensure good lighting and remove background clutter. Make sure your hand is fully visible.",
      icon: <Hand className="h-5 w-5 text-red-500" />
    },
    {
      issue: "Volume not changing",
      solution: "Check that the Python backend is running and WebSocket connection is established.",
      icon: <Volume2 className="h-5 w-5 text-orange-500" />
    },
    {
      issue: "Laggy response",
      solution: "Close other camera applications and ensure good system performance.",
      icon: <Settings className="h-5 w-5 text-yellow-500" />
    },
    {
      issue: "Connection failed",
      solution: "Verify the Python script is running on localhost:8765 and no firewall is blocking it.",
      icon: <AlertTriangle className="h-5 w-5 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How to Use
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow this comprehensive guide to set up and use the hand gesture volume control system. 
            From installation to advanced usage tips.
          </p>
        </div>

        {/* Installation Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Installation & Setup
          </h2>
          
          <div className="space-y-6">
            {installationSteps.map((step, index) => (
              <Card key={index} className="border-2 hover:border-purple-200 transition-colors duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        {step.icon}
                        {step.title}
                      </CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{step.code}</pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Usage Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Using Gesture Control
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {usageSteps.map((step, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{step.step}</span>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> {step.tip}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hand Positioning Guide */}
        <div className="mb-16">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-center justify-center">
                <Hand className="h-6 w-6 text-purple-600" />
                Optimal Hand Positioning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">👍</span>
                  </div>
                  <h4 className="font-semibold text-green-700">Good Distance</h4>
                  <p className="text-sm text-gray-600">1-2 feet from camera</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="font-semibold text-green-700">Good Lighting</h4>
                  <p className="text-sm text-gray-600">Bright, even lighting</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🖐️</span>
                  </div>
                  <h4 className="font-semibold text-green-700">Clear View</h4>
                  <p className="text-sm text-gray-600">Palm facing camera</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Troubleshooting */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Troubleshooting
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {troubleshooting.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    {item.icon}
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.issue}</h4>
                      <p className="text-sm text-gray-600">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="border-2 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Follow the setup instructions above, then try the live demo to experience 
                gesture-based volume control in action.
              </p>
              <Link to="/gesture-control">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Play className="h-4 w-4 mr-2" />
                  Try Live Demo
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowToUse;
