#!/bin/bash

# Quick Test Server for Offline Mode
# This script starts a local server to test the offline functionality

echo "🚀 Starting Kriptic Edition 3.0 Test Server..."
echo ""
echo "📍 Server will be available at: http://localhost:8000"
echo ""
echo "🧪 To test offline mode:"
echo "   1. Open the site in your browser"
echo "   2. Wait 5 seconds for service worker to cache resources"
echo "   3. Open DevTools → Network tab → Set to 'Offline'"
echo "   4. Refresh the page - it should still work!"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
# Check if Python 2 is available
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
# Check if Node.js is available
elif command -v npx &> /dev/null; then
    npx http-server -p 8000
else
    echo "❌ Error: No suitable HTTP server found!"
    echo "Please install Python or Node.js to run the test server."
    exit 1
fi
