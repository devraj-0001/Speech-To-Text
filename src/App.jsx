import React, { useState } from 'react'
import './App.css'
import './index.js'
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Button from 'react-bootstrap/Button';

export default function App() {


  const [copytext, setcopytext] = useState()

  const [isCopied, setCopied] = useClipboard(copytext);

  const [language, setlanguage] = useState("en-IN")


  const LanguagesData = [
    { "name": "Afrikaans", "value": "af" },
    { "name": "Basque", "value": "eu" },
    { "name": "Bulgarian", "value": "bg" },
    { "name": "Catalan", "value": "ca" },
    { "name": "Arabic (Egypt)", "value": "ar-EG" },
    { "name": "Arabic (Jordan)", "value": "ar-JO" },
    { "name": "Arabic (Kuwait)", "value": "ar-KW" },
    { "name": "Arabic (Lebanon)", "value": "ar-LB" },
    { "name": "Arabic (Qatar)", "value": "ar-QA" },
    { "name": "Arabic (UAE)", "value": "ar-AE" },
    { "name": "Arabic (Morocco)", "value": "ar-MA" },
    { "name": "Arabic (Iraq)", "value": "ar-IQ" },
    { "name": "Arabic (Algeria)", "value": "ar-DZ" },
    { "name": "Arabic (Bahrain)", "value": "ar-BH" },
    { "name": "Arabic (Lybia)", "value": "ar-LY" },
    { "name": "Arabic (Oman)", "value": "ar-OM" },
    { "name": "Arabic (Saudi Arabia)", "value": "ar-SA" },
    { "name": "Arabic (Tunisia)", "value": "ar-TN" },
    { "name": "Arabic (Yemen)", "value": "ar-YE" },
    { "name": "Czech", "value": "cs" },
    { "name": "Dutch", "value": "nl-NL" },
    { "name": "English (Australia)", "value": "en-AU" },
    { "name": "English (Canada)", "value": "en-CA" },
    { "name": "English (India)", "value": "en-IN" },
    { "name": "English (New Zealand)", "value": "en-NZ" },
    { "name": "English (South Africa)", "value": "en-ZA" },
    { "name": "English (UK)", "value": "en-GB" },
    { "name": "English (US)", "value": "en-US" },
    { "name": "Finnish", "value": "fi" },
    { "name": "French", "value": "fr-FR" },
    { "name": "Galician", "value": "gl" },
    { "name": "German", "value": "de-DE" },
    { "name": "Greek", "value": "el-GR" },
    { "name": "Hebrew", "value": "he" },
    { "name": "Hungarian", "value": "hu" },
    { "name": "Icelandic", "value": "is" },
    { "name": "Italian", "value": "it-IT" },
    { "name": "Indonesian", "value": "id" },
    { "name": "Japanese", "value": "ja" },
    { "name": "Korean", "value": "ko" },
    { "name": "Latin", "value": "la" },
    { "name": "Mandarin Chinese", "value": "zh-CN" },
    { "name": "Taiwanese", "value": "zh-TW" },
    { "name": "Cantonese", "value": "zh-HK" },
    { "name": "Malaysian", "value": "ms-MY" },
    { "name": "Norwegian", "value": "no-NO" },
    { "name": "Polish", "value": "pl" },
    { "name": "Pig Latin", "value": "xx-piglatin" },
    { "name": "Portuguese", "value": "pt-PT" },
    { "name": "Portuguese (Brasil)", "value": "pt-br" },
    { "name": "Romanian", "value": "ro-RO" },
    { "name": "Russian", "value": "ru" },
    { "name": "Serbian", "value": "sr-SP" },
    { "name": "Slovak", "value": "sk" },
    { "name": "Spanish (Argentina)", "value": "es-AR" },
    { "name": "Spanish (Bolivia)", "value": "es-BO" },
    { "name": "Spanish (Chile)", "value": "es-CL" },
    { "name": "Spanish (Colombia)", "value": "es-CO" },
    { "name": "Spanish (Costa Rica)", "value": "es-CR" },
    { "name": "Spanish (Dominican Republic)", "value": "es-DO" },
    { "name": "Spanish (Ecuador)", "value": "es-EC" },
    { "name": "Spanish (El Salvador)", "value": "es-SV" },
    { "name": "Spanish (Guatemala)", "value": "es-GT" },
    { "name": "Spanish (Honduras)", "value": "es-HN" },
    { "name": "Spanish (Mexico)", "value": "es-MX" },
    { "name": "Spanish (Nicaragua)", "value": "es-NI" },
    { "name": "Spanish (Panama)", "value": "es-PA" },
    { "name": "Spanish (Paraguay)", "value": "es-PY" },
    { "name": "Spanish (Peru)", "value": "es-PE" },
    { "name": "Spanish (Puerto Rico)", "value": "es-PR" },
    { "name": "Spanish (Spain)", "value": "es-ES" },
    { "name": "Spanish (US)", "value": "es-US" },
    { "name": "Spanish (Uruguay)", "value": "es-UY" },
    { "name": "Spanish (Venezuela)", "value": "es-VE" },
    { "name": "Swedish", "value": "sv-SE" },
    { "name": "Turkish", "value": "tr" },
    { "name": "Zulu", "value": "zu" }
  ]


  const startlistening = () => SpeechRecognition.startListening({ continuous: true, language })

  const { transcript, browserSupportsSpeechRecognition, listening, resetTranscript } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return null
  }
  console.log(language)
  return (
    <>

      <div className="Conatianer">
        <div className='text'>
          <div>
            <div><h1>Speech To <span className='span'> Text </span>Converter</h1></div>
            <p>This innovative tool not only bridges the gap between oral and written communication </p>
            {/* <p>Embrace the future of spoken expression as it converges with the written word, ushering in a new era of communication unlike anything we've experienced before.</p> */}
          </div>

          <select className='language' onChange={(e) => setlanguage(e.target.value)}>

            {
              LanguagesData.map((lang) => {
                return <option value={lang.value}>{lang.name}</option>
              })
            }
            
          </select>
        </div>

        <div className='Screen flex justify-center items-center'>
          <div className='text2' onClick={() => setcopytext(transcript)}>{transcript}</div>
        </div>

        <div className='btns'>
          {
            !listening ?

              <button onClick={startlistening} className='b1'>Start Listening</button>
              :
              <button onClick={SpeechRecognition.stopListening} className='b2'>Stop Listening</button>
          }
          <button onClick={setCopied} className='b3'>
            copied? {isCopied ? "Yes!" : "No"}
          </button>
          <button className='b4' onClick={resetTranscript}>reset</button>
        </div>


      </div>

    </>
  )
}