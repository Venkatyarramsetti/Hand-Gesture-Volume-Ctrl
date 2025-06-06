
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Eye, Cpu, Zap, Code, Heart, Users, Lightbulb } from "lucide-react";

const About = () => {
  const technologies = [
    {
      name: "MediaPipe",
      description: "Google's framework for building perception pipelines",
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      details: "Advanced machine learning models for hand tracking and gesture recognition with real-time performance."
    },
    {
      name: "OpenCV",
      description: "Computer vision library for image processing",
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      details: "Robust computer vision algorithms for camera input handling, image processing, and visual feedback."
    },
    {
      name: "Python",
      description: "High-level programming language for rapid development",
      icon: <Code className="h-8 w-8 text-green-600" />,
      details: "Powerful scripting capabilities with extensive libraries for computer vision and system control."
    },
    {
      name: "WebSocket",
      description: "Real-time communication protocol",
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      details: "Low-latency, bidirectional communication between the Python backend and web interface."
    }
  ];

  const features = [
    {
      title: "Privacy-First Design",
      description: "All processing happens locally on your device. No data leaves your computer.",
      icon: <Users className="h-6 w-6 text-green-600" />
    },
    {
      title: "Real-time Performance",
      description: "Sub-50ms latency for immediate response to your gestures.",
      icon: <Cpu className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Accessibility Focus",
      description: "Designed for users who want hands-free computer interaction.",
      icon: <Heart className="h-6 w-6 text-red-600" />
    },
    {
      title: "Educational Purpose",
      description: "Open source project demonstrating modern computer vision techniques.",
      icon: <Lightbulb className="h-6 w-6 text-yellow-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About GestureVolume
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An innovative computer vision project that bridges the gap between human gestures 
            and digital interaction through advanced machine learning and real-time processing.
          </p>
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                GestureVolume is a cutting-edge hand gesture recognition system that allows users to control 
                their computer's volume through natural hand movements. By leveraging Google's MediaPipe 
                technology and advanced computer vision algorithms, the system provides an intuitive and 
                accessible way to interact with digital devices.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The project demonstrates the practical application of machine learning in human-computer 
                interaction, showcasing how complex computer vision models can be made accessible through 
                modern web technologies. Built with privacy and performance in mind, all processing happens 
                locally on the user's device, ensuring data security while maintaining real-time responsiveness.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Capabilities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Real-time hand tracking</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Gesture-based volume control</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">WebSocket communication</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Cross-platform compatibility</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Use Cases</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Hands-free media control</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Accessibility assistance</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Educational demonstrations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Touchless interaction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technology Stack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-2 hover:border-purple-200 transition-colors duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {tech.icon}
                    <div>
                      <CardTitle className="text-xl">{tech.name}</CardTitle>
                      <CardDescription>{tech.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{tech.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Design Principles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-700">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How It Works
          </h2>
          
          <Card className="border-2">
            <CardContent className="pt-8">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Computer Vision</h3>
                    <p className="text-gray-600 text-sm">
                      OpenCV captures video from your webcam and preprocesses frames for optimal detection conditions.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Hand Detection</h3>
                    <p className="text-gray-600 text-sm">
                      MediaPipe's machine learning models detect and track 21 hand landmarks in real-time with high accuracy.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Volume Control</h3>
                    <p className="text-gray-600 text-sm">
                      Distance calculations between thumb and index finger are mapped to volume levels and applied instantly.
                    </p>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Algorithm Pipeline</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ol className="space-y-3">
                      <li className="flex items-center">
                        <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                        <span className="text-gray-700">Frame capture and preprocessing using OpenCV</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                        <span className="text-gray-700">Hand detection and landmark extraction via MediaPipe</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                        <span className="text-gray-700">Distance calculation between thumb tip and index finger tip</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">4</span>
                        <span className="text-gray-700">Linear interpolation mapping to volume range (0-100%)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">5</span>
                        <span className="text-gray-700">System volume adjustment via Windows Audio API</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">6</span>
                        <span className="text-gray-700">Real-time data transmission to web interface via WebSocket</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Goals */}
        <div>
          <Card className="border-2 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Project Goals & Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Educational Value</h3>
                  <p className="text-gray-700 mb-4">
                    This project serves as a comprehensive demonstration of modern computer vision techniques, 
                    showing how machine learning models can be integrated into practical applications.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Computer vision fundamentals</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Machine learning integration</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Real-time system development</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Future Applications</h3>
                  <p className="text-gray-700 mb-4">
                    The techniques demonstrated here can be extended to create more sophisticated 
                    gesture-based interfaces for various applications and accessibility tools.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Smart home control</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Accessibility interfaces</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Interactive presentations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
