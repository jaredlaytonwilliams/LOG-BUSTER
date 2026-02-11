LOG BUSTER

LOG BUSTER is a Chrome Extension designed to clean, detect, prettify, and search structured log data (JSON or XML) directly from selected text in the browser.

It is especially useful for working with noisy enterprise logs (e.g., DataPower headers, log prefixes, or mixed content) where structured payloads are embedded inside additional text.

🚀 Features
🔎 Smart Detection

Automatically detects whether selected content is:

JSON

XML

Or plain text

JSON detection is prioritized before XML.

Extracts balanced JSON/XML fragments even if surrounded by log headers or noise.

Displays detected type in the UI.

✨ Prettification

Formats JSON with proper indentation.

Formats XML with readable indentation.

Strips log headers / surrounding noise to isolate structured payloads.

Tolerates:

Mixed log lines

Embedded JSON objects or arrays

XML fragments inside larger text blocks

🎨 Syntax Highlighting

JSON:

Keys

Strings

Numbers

Booleans

Null

Punctuation

XML:

Tags

Attributes

Values

Comments

🔍 Powerful Search

Live search inside formatted logs

Case-insensitive matching

Highlighted results

Navigation with:

▲ Previous (Shift + Enter)

▼ Next (Enter)

Scrollbar tick marks showing match locations

Active match tracking with position counter (e.g., 3 / 17)

🖱 Context Menu Support

Right-click selected text → Prettify Logs

⌨ Keyboard Shortcuts

Configurable via:
chrome://extensions/shortcuts

Default:

Action	Windows	Mac
Open popup	Ctrl + Shift + Y	Command + Shift + Y
Prettify selection + open	Ctrl + Shift + P	Command + Shift + P
🛠 How It Works

Select log text on any webpage.

Trigger:

Right-click → Prettify Logs

Or use keyboard shortcut.

Extension:

Extracts structured payload (JSON or XML)

Removes log header noise

Detects format

Pretty prints

Opens popup with searchable, syntax-highlighted output

🧠 Detection Strategy

Order of detection:

Exact JSON (object or array)

Balanced JSON inside noisy text

Balanced XML fragment inside noisy text

XML parse fallback

Plain text fallback

This makes it resilient for real-world enterprise logs.

📦 Installation (Developer Mode)

Clone this repository.

Open Chrome.

Navigate to:

chrome://extensions/


Enable Developer Mode (top right).

Click Load unpacked.

Select the project directory.

📂 Project Structure
manifest.json        → Extension configuration (MV3)
background.js        → Context menu + detection + formatting logic
popup.html           → UI layout
popup.js             → Rendering, syntax highlighting, search, hit-map
icons/               → Extension icons

🎯 Use Cases

Cleaning DataPower logs

Debugging API responses embedded in logs

Investigating Kibana log exports

Quickly inspecting JSON/XML payloads from:

Browser dev tools

Monitoring dashboards

Internal log viewers

🔒 Permissions Used

storage – Persist last formatted logs

scripting – Inject formatting logic into active tab

contextMenus – Add right-click menu option

activeTab – Access selected text

🧩 Built With

Chrome Extension Manifest V3

Vanilla JavaScript (no frameworks)

DOMParser (XML parsing)

Custom JSON tokenizer

Custom search + highlight engine
