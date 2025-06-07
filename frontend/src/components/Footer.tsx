import { useState } from "react";
import { Hand, Github, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "info" | "">("");

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Existing Brand and Info */}
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

          {/* Existing Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/gesture-control" className="text-gray-400 hover:text-white transition-colors">Live Control</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/how-to-use" className="text-gray-400 hover:text-white transition-colors">How to Use</Link></li>
            </ul>
          </div>

          {/* Existing Tech Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technology</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Python & OpenCV</li>
              <li>MediaPipe Hands</li>
              <li>WebSocket API</li>
              <li>Real-time Processing</li>
            </ul>
          </div>

          {/* Personal Info & Query Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Developer Info</h3>
            <p className="text-gray-400 mb-2">SATYA SAI VENKAT YARRAMSETTI</p>
            <p className="text-gray-400 mb-2">Full Stack Developer | B.Tech Student</p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/Venkatyarramsetti?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin-id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.3h.05c.5-.9 1.75-1.8 3.6-1.8 3.85 0 4.55 2.5 4.55 5.75V24h-4v-7.5c0-1.8-.05-4.1-2.5-4.1-2.5 0-2.9 1.95-2.9 4v7.6h-4V8z"/>
                </svg>
              </a>
            </div>

            {/* Query Form */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);

                const payload = {
                  email: formData.get("email"),
                  message: formData.get("message"),
                };

                setStatusMessage("Sending query...");
                setStatusType("info");

                try {
                  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/send-query`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  });


                  if (res.ok) {
                    setStatusMessage("✅ Query sent successfully!");
                    setStatusType("success");
                    form.reset();
                  } else {
                    setStatusMessage("⚠️ Failed to send query. Please try again later.");
                    setStatusType("error");
                  }
                } catch (err) {
                  setStatusMessage("❌ Network error: Unable to send query.");
                  setStatusType("error");
                }
              }}
              className="space-y-2 text-sm"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-md placeholder-gray-500 focus:outline-none"
              />
              <textarea
                name="message"
                required
                rows={3}
                placeholder="Your query"
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-md placeholder-gray-500 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-md"
              >
                Send Query
              </button>

              {/* Status message below button */}
              {statusMessage && (
                <p
                  className={`mt-2 text-sm ${
                    statusType === "success"
                      ? "text-green-400"
                      : statusType === "error"
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                  role="alert"
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              )}
            </form>
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
