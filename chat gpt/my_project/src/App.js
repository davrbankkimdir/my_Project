

import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import {BsFillMicFill} from 'react-icons/bs'

const App = () => {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>You Browser doesn't support Speech to Text</span>
  }


  return (
    <div className='container'>
      <div className='row text-center my-5'><div className=''> <h2 className='text-center text-danger fs-5 fw-bold'>Micrafonga gapring: <BsFillMicFill/> {listening ? 'on' : 'off'}</h2></div></div>
      <div className='row my-5'>
        <div className='col-4'> <button className='btn btn-outline-success fs-5 fw-bolder  form-control' onClick={SpeechRecognition.startListening}>Start</button></div>
        <div className='col-4 '> <button className='btn btn-outline-warning fs-5 fw-bolder  form-control' onClick={SpeechRecognition.stopListening}>Stop</button></div>
        <div className='col-4 '> <button className='btn btn-outline-danger fs-5 fw-bolder form-control' onClick={resetTranscript}>Reset</button></div>
      </div>
      <div className='row my-5 bg-primary'> <p className='text-light fs-5 fw-bolder'>{transcript}</p></div>
    </div>
  )
}
export default App;
