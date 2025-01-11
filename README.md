# text-to-speech
a project i did purely just for fun to work with the speech synthesis api : )

---

## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/noneofurbuzz/text-to-speech-converter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd text-to-speech-converter
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the project
   ```bash
   npm run dev
   ```
---

## Bugs
- Most of the voices sound robotic and not human.
- Speech synthesis behaves inconsistently on mobile devices - I assume that this is due to incompatibility issues with the speech synthesis API on mobile
- Firefox compatibility issues - still trying to figure this out
- Large PDF/TXT files handling needs optimization (thinking of reading the file in chunks)
---
## Future Improvements
- Actually use a good text-to-speech API cause the native one isn't very good
- Stream large files in chunks to improve performance
- Add server-side file validation and storage
- Figure out why it does not work properly on firefox and mobile

