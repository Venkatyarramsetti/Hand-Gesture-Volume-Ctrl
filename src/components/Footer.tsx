
import { Hand, Github, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Hand className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">GestureVolume</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Control your computer's volume with simple hand gestures using advanced computer vision and MediaPipe technology.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using Python, OpenCV & MediaPipe</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/gesture-control" className="text-gray-400 hover:text-white transition-colors">Live Control</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/how-to-use" className="text-gray-400 hover:text-white transition-colors">How to Use</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Technology</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Python & OpenCV</li>
              <li>MediaPipe Hands</li>
              <li>WebSocket API</li>
              <li>Real-time Processing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GestureVolume. Open source project for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
