# BurpSuite Proxy Manager

A simple browser extension that lets you control your browser's proxy settings with a single click. Perfect for security professionals and developers who use BurpSuite or other proxy tools for web testing.

## Features

- **Simple Interface**: Enable or disable proxy with just one click
- **Multi-step Setup**: Easy first-time configuration wizard
- **Custom Configuration**: Set your own proxy host and port
- **Persistent Settings**: Your configuration is saved between browser sessions
- **Seamless Integration**: Works perfectly with BurpSuite for web security testing

## Installation

1. Download the extension files or clone this repository
2. Open FireFox and go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on" 
4. In the chosen folder select the manifest.json. 
5. The extension icon will appear in your browser toolbar

## How to Use

### First Time Setup

When you first use the extension, you'll see a setup wizard:

1. **Welcome Screen**: You'll be shown default BurpSuite settings (127.0.0.1:8080)

   - Click "Accept Default" to use these settings
   - Click "Configure" to customize the settings

2. **Configuration** (if you chose "Configure"):

   - Enter your preferred proxy host (IP address)
   - Enter the port number
   - Click "Save Config" to store your settings

3. **Control Panel**:
   - After setup, you'll see buttons to:
     - Enable Proxy
     - Disable Proxy
     - Reconfigure Settings

### Daily Usage

After setup, clicking the extension icon shows the Control Panel where you can:

- Turn proxy on/off with a single click
- Reconfigure your proxy settings when needed

## Technical Details

- Uses Chrome's proxy API for managing connections
- Stores settings in browser's local storage
- Implements a background service for handling proxy requests
- Simple and intuitive user interface

## Common Use Cases

- Web security testing
- Intercepting HTTP/HTTPS requests
- API testing through a proxy
- Web application penetration testing
- Debugging web applications

## Requirements

- Chrome browser (version 88+)
- BurpSuite or compatible proxy tool running on specified host/port

## Troubleshooting

If you have connection issues:

1. Check if your proxy tool (BurpSuite) is running
2. Verify that the host and port settings are correct
3. Make sure your browser allows proxy connections
4. Check browser console for error messages

## License

MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

_This extension is designed for legitimate security testing only. Always ensure you have proper authorization before testing any system or application._
