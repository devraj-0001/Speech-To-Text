import React, { useState } from 'react';
import useClipboard from 'react-use-clipboard';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './main.css'

const Converter = () => {
    const [copytext, setCopytext] = useState('');
    const [isCopied, setCopied] = useClipboard(copytext);
    const [language, setLanguage] = useState('en-IN');

    const LanguagesData = [
        // ... (same as in your code)
    ];
    import React, { useState } from 'react';
    import useClipboard from 'react-use-clipboard';
    import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
    
    export default function App() {
      const [copytext, setCopytext] = useState('');
      const [isCopied, setCopied] = useClipboard(copytext);
      const [language, setLanguage] = useState('en-IN');
    
      const LanguagesData = [
        // ... (same as in your code)
      ];
    
      const startListening = () => SpeechRecognition.startListening({ continuous: true, language });
    
      const { transcript, browserSupportsSpeechRecognition, listening, resetTranscript } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return null;
      }
    
    
      return (
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.heading}>Speak & Convert</h1>
            <p style={styles.description}>Your words become text!</p>
          </div>
          <div style={styles.language}>
            <select style={styles.select} onChange={(e) => setLanguage(e.target.value)}>
              {LanguagesData.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div style={styles.conversionArea} onClick={() => setCopytext(transcript)}>
            <div style={styles.text}>{transcript || 'Start speaking...'}</div>
          </div>
          <div style={styles.buttons}>
            <button style={styles.listenButton} onClick={listening ? SpeechRecognition.stopListening : startListening}>
              {listening ? 'Stop Listening' : 'Start Listening'}
            </button>
            <button style={styles.copyButton} onClick={setCopied}>
              {isCopied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
            <button style={styles.resetButton} onClick={resetTranscript}>
              Reset
            </button>
          </div>
        </div>
      );
    }
    
    const styles = {
     
    };
    
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language });

    const { transcript, browserSupportsSpeechRecognition, listening, resetTranscript } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    return (
        <div className="container">
            <div className="header">
                <h1 className="heading">Speak & Convert</h1>
                <p className="description">Your words become text!
                </p>
            </div>
            <div className="language">
                <select className="select" onChange={(e) => setLanguage(e.target.value)}>
                    {LanguagesData?.map((lang) => (
                        <option key={lang.value} value={lang.value}>
                            {lang.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="conversionArea" onClick={() => setCopytext(transcript)}>
                <div className="text">{transcript || 'Start speaking...'}</div>
            </div>
            <div className="buttons">
                <button className="listenButton" onClick={listening ? SpeechRecognition.stopListening : startListening}>
                    {listening ? 'Stop Listening' : 'Start Listening'}
                </button>
                <button className="copyButton" onClick={setCopied}>
                    {isCopied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
                <button className="resetButton" onClick={resetTranscript}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Converter




