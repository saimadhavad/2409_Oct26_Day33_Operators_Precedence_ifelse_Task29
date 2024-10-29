import React, { useRef } from 'react'

function StudentTenthMarkSheet() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();

    let teluguMarksInputRef = useRef();
    let hindiMarksInputRef = useRef();
    let englishMarksInputRef = useRef();
    let mathsMarksInputRef = useRef();
    let scienceMarksInputRef = useRef();
    let socialMarksInputRef = useRef();

    let resultLabelRef = useRef();
    let firstNameResultSpanRef = useRef();
    let lastNameResultSpanRef = useRef();
    let teluguResultSpanRef = useRef();
    let hindiResultSpanRef = useRef();
    let englishResultSpanRef = useRef();
    let mathsResultSpanRef = useRef();
    let scienceResultSpanRef = useRef();
    let socialResultSpanRef = useRef();

   
  return (
    <div className='studentTenthMarkSheet'>
        <div><h1>Student Secondary Education Personal & Marks Details</h1></div>
        <form className='formStyle'>
            <fieldset>
                <legend>Personal Details</legend>
            <div>
                <label>First name</label>
                <input ref={firstNameInputRef}></input>
                <span ref={firstNameResultSpanRef}></span>
            </div>
            <div>
                <label>Last name</label>
                <input ref={lastNameInputRef}></input>
                <span ref={lastNameResultSpanRef}></span>
            </div>
            </fieldset>
            <fieldset>
                <legend>Marks Details</legend>
            <div>
                <label>Telugu</label>
                <input type='number' ref={teluguMarksInputRef}

                    onFocus={ () => {
                        teluguMarksInputRef.current.style.backgroundColor ="darkkhaki";
                        teluguMarksInputRef.current.style.color ="white";
                    }}
                    onChange={ () => {
                        if(teluguMarksInputRef.current.value>=35) {
                            teluguResultSpanRef.current.innerHTML = "✔️ Pass";
                            // teluguResultSpanRef.current.style.backgroundColor ="green";
                        }else {
                            teluguResultSpanRef.current.innerHTML="❌ Fail";
                            // teluguResultSpanRef.current.style.backgroundColor ="grey";
                        }

                        // teluguResultSpanRef.current.innerHTML = teluguMarksInputRef.current.value>=35?"Pass":"Fail";
                       
                    }}
                    onBlur={ () => {
                        teluguMarksInputRef.current.style.backgroundColor ="";
                        teluguMarksInputRef.current.style.color ="";
                    }}
                
                
                ></input>
                <span ref={teluguResultSpanRef}></span>
            </div>
            <div>
                <label>Hindi</label>
                <input type='number' ref={hindiMarksInputRef}
                
                    onFocus={ () => {
                        hindiMarksInputRef.current.style.backgroundColor ="darkkhaki";
                        hindiMarksInputRef.current.style.color ="white";
                    }}
                    onChange={ () => {
                        if (hindiMarksInputRef.current.value>=35) {
                            hindiResultSpanRef.current.innerHTML = "✔️ Pass"
                        }else {
                            hindiResultSpanRef.current.innerHTML = "❌ Fail"
                        }
                    }}

                    onBlur={ () => {
                        hindiMarksInputRef.current.style.backgroundColor ="";
                        hindiMarksInputRef.current.style.color ="";
                    }}
                
                ></input>
                <span ref={hindiResultSpanRef}></span>
            </div>
            <div>
                <label>English</label>
                <input type='number' ref={englishMarksInputRef}
                
                    onFocus={ () => {
                        englishMarksInputRef.current.style.backgroundColor ="darkkhaki";
                        englishMarksInputRef.current.style.color = "white";
                    }}
                
                    onChange={ () => {
                        if(englishMarksInputRef.current.value>=35) {
                            englishResultSpanRef.current.innerHTML = "✔️ Pass";
                        }else {
                            englishResultSpanRef.current.innerHTML = "❌ Fail";
                        }

                    }} 
                    onBlur={ () => {
                        englishMarksInputRef.current.style.backgroundColor ="";
                        englishMarksInputRef.current.style.color = "";
                    }}
                
                ></input>
                <span ref={englishResultSpanRef}></span>
            </div>
            <div>
                <label>Maths</label>
                <input type='number' ref={mathsMarksInputRef}
                        onFocus={ () => {
                            mathsMarksInputRef.current.style.backgroundColor ="darkkhaki";
                            mathsMarksInputRef.current.style.color ="white";
                        }}
                        onChange= { () => {
                            if(mathsMarksInputRef.current.value>=35) {
                                mathsResultSpanRef.current.innerHTML ="✔️ Pass";
                            }else {
                                mathsResultSpanRef.current.innerHTML ="❌ Fail";
                            }
                        }}
                        onBlur={ () => {
                            mathsMarksInputRef.current.style.backgroundColor ="";
                            mathsMarksInputRef.current.style.color="";
                        }}
                    
                ></input>
                <span ref={mathsResultSpanRef}></span>
            </div>
            <div>
                <label>Science</label>
                <input type='number' ref={scienceMarksInputRef}
                        onFocus={ () => {
                            scienceMarksInputRef.current.style.backgroundColor = "darkkhaki";
                            scienceMarksInputRef.current.style.color = "white";
                        }}
                        onChange={ () => {
                            if(scienceMarksInputRef.current.value>=35) {
                                scienceResultSpanRef.current.innerHTML = "✔️ Pass";
                            }else {
                                scienceResultSpanRef.current.innerHTML = "❌ Fail";
                            }
                        }} 
                        onBlur={ () => {
                            scienceMarksInputRef.current.style.backgroundColor = "";
                            scienceMarksInputRef.current.style.color = "";
                        }} 

                ></input>
                <span ref={scienceResultSpanRef}></span>
            </div>
            <div>
                <label>Social</label>
                <input type='number' ref={socialMarksInputRef}
                    onFocus={ () => {
                        socialMarksInputRef.current.style.backgroundColor = "darkkhaki";
                        socialMarksInputRef.current.style.color = "white";
                    }}
                    onChange={ () => {
                        if(socialMarksInputRef.current.value>=35) {
                            socialResultSpanRef.current.innerHTML = "✔️ Pass";
                        }else {
                            socialResultSpanRef.current.innerHTML = "❌ Fail";
                        }
                    }}
                     onBlur={ () => {
                        socialMarksInputRef.current.style.backgroundColor = "";
                        socialMarksInputRef.current.style.color = "";
                     }}   
                ></input>
                <span ref={socialResultSpanRef}></span>
            </div>
            </fieldset>
            <div>
                <button type='button'
                    onClick={ () => {

                        let firstName = firstNameInputRef.current.value;
                        let lastName = lastNameInputRef.current.value;

                            
                        let teluguMarks = Number(teluguMarksInputRef.current.value);
                        let hindiMarks = Number(hindiMarksInputRef.current.value);
                        let englishMarks = Number(englishMarksInputRef.current.value);
                        let mathsMarks = Number(mathsMarksInputRef.current.value);
                        let scienceMarks = Number(scienceMarksInputRef.current.value);
                        let socialMarks = Number(socialMarksInputRef.current.value);

                        let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;
                        let percentage = (totalMarks/600)*100;

                        alert(`${firstName} ${lastName}'s Total Marks is ${totalMarks} with ${percentage.toFixed(2)}%`);

                        resultLabelRef.current.innerHTML = `${firstName} ${lastName}'s Total Marks is 
                        ${totalMarks} with ${percentage.toFixed(2)}%`;
                        
                    }}
                
                
                >Calculate result</button>
            </div>
        </form>
        <div className='labelDiv'><label ref={resultLabelRef}></label></div>
      
    </div>
  )
}


export default StudentTenthMarkSheet
