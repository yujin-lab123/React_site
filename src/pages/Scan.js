import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import questions from '../data/questionData';
import './Scan.css';
import pinkBg from '../images/pink_bg.png';
import prevBtn from '../images/icon/prevBtn.png';
import nextBtn from '../images/icon/nextBtn.png';

function Scan() {

  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const currentQuestion = questions[step];

  const [mood, setMood] = useState('');
  const [use, setUse] = useState('');
  const [season, setSeason] = useState('');

  const handleSelect = (option) => {
    if(step === 0){setMood(option);}
    if(step === 1){setUse(option);}
    if(step === 2){setSeason(option);}
  };

  const prevStep = () => {
    if(step > 0){setStep(step - 1);}
  };
  const nextStep = () => {
    if(step < questions.length - 1){setStep(step + 1);}
  };

  const handleComplete = () => {
    navigate('/scan/result',{
      state: {
        mood: mood,
        use:use,
        season: season
      }
    });
  };

  const selected = (option) => {
    if(step === 0){
      return mood === option;
    }
    if(step === 1){
      return use === option;
    }
    if(step === 2){
      return season === option;
    }
  };

  return (

    <section className='scanPage'>

        <div className="bread_nav">
          <Link to="/"><span className="home">Home</span></Link>
          <span>&gt;</span>
          <span className="current">Scan</span>
        </div>

    {/* -----------step---------------- */}

        <div className="scan_container">

          <img className="pinkBg" src={pinkBg} alt="bg01" />

          <p className="step">
          STEP 0{step+1} / 03
          </p>
          <p className="scan_category">
            [ {currentQuestion.category} ]
          </p>
          <p className="scan_question">
            {currentQuestion.before}

            <span className="point_text">
              {currentQuestion.highlight}
            </span>

            {currentQuestion.after}
          </p>

          <div className="scan_options">
            {currentQuestion.options.map((option) => (
              <button
                name={option}
                className={selected(option) ? 'active' : ''}
                onClick={()=>handleSelect(option)}
              >{option}</button>
            ))}
          </div>

            <div className="scan_bottomBtn">
              {step !== 0 ? (
                <button onClick={prevStep}>
                  <img src={prevBtn} alt="이전버튼" />
                </button>
              ) : (
                <div className='btn_space'></div>
              )}

              {step === questions.length - 1 ? (
                <button className="scan_complete" onClick={handleComplete}>
                  완료
                </button>
              ) : (
                <div className="scanning">완료</div>
              )}

              {step !== questions.length -1 ? (
                <button onClick={nextStep}>
                  <img src={nextBtn} alt="다음버튼" />
                </button>
              ) : (
                <div className='btn_space'></div>
              )}
            </div>

        </div>


      </section>

  )
}

export default Scan;
