import React, { useRef } from 'react'

function Operators() {
    let arithmeticOperatorResultParaRef = useRef();
    let precedenceResultParaRef = useRef();
    let assignmentResultParaRef = useRef();
    let comparisonResultParaRef = useRef();
  return (
    <div className='operatorsDiv'>
        <h1>Operators</h1>
     <fieldset className='arithmetic'>
        <legend>Arithmetic Operators</legend>
        <div>
            <button type='button'
                onClick={ () => {
                    let a=10+10+45;
                    arithmeticOperatorResultParaRef.current.innerHTML = `Addition : ${a}`;
                }}
            
            >Addition</button>
            <button type='button'
                onClick={ () => {
                    let a=10-10-45;
                    arithmeticOperatorResultParaRef.current.innerHTML = `Subtraction : ${a}`;
                }}
            
            >Subtraction</button>
            <button type='button'
                onClick={ () => {
                    let a=45*20;
                    arithmeticOperatorResultParaRef.current.innerHTML = `Multiplication is ${a}`;
                }}
            
            >Multiplication</button>
            <button type='button'
                onClick={ () => {
                    let a=100%3;
                    arithmeticOperatorResultParaRef.current.innerHTML = `Modulus : ${a}`;
                }}
            
            >Modulus</button>
            <button type='button'
                onClick={ () => {
                    let g = 0;
                    g++;
                    arithmeticOperatorResultParaRef.current.innerHTML = `${g}`;
                }}
            
            >Increment</button>
            <button type='button'
                onClick={ () => {
                    let f= 1;
                    f--;
                    arithmeticOperatorResultParaRef.current.innerHTML = `${f}`;
                }}
            
            >Decrement</button>
            <p ref={arithmeticOperatorResultParaRef}></p>
        </div>
     </fieldset>
     <fieldset className='precedence'>
        <legend>Precedence</legend>
        <div>
        <button type='button'
                onClick={ () => {
                    let x = (100 + 50) * 3;
                    precedenceResultParaRef.current.innerHTML = `Precedence : ${x}`;
                }}
            
            >Precedence</button>
        </div>
        <p ref={precedenceResultParaRef}></p>
     </fieldset>
     <fieldset className='assignment'>
        <legend>Assignment Operators</legend>
        <div>
        <button type='button'
                onClick={ () => {

                    let c =10;
                    c+=15;
                    c*=15;
                    c-=17;
                   
                    assignmentResultParaRef.current.innerHTML = `Assignment Operator : ${c}` ;
                }}
            
            >Assignment Operators</button>
        </div>
        <p ref={assignmentResultParaRef}></p>
     </fieldset>
     <fieldset className='Comparison'>
        <legend>Comparison Operators</legend>
        <div>
        {/* <button type='button'
                onClick={ () => {

                   let d = 10;

                   if(d==10) {
                    comparisonResultParaRef.current.innerHTML = `Comparison Operator : Correct value` ;
                   }else {
                    comparisonResultParaRef.current.innerHTML = `Comparison Operator : Wrong Value` ;
                   }
                    
                }}
            
            >Comparison Operators</button> */}
             

                  <button type='button'
                onClick={ () => {
                    let teluguMarks = 35;
                    let hindiMarks = 80;
                    let englishMarks = 56;
                    let mathsMarks = 88;
                    let scienceMarks = 95;
                    let socialMarks = 45;

                    let telugu = teluguMarks == 35; <br/>  //TRUE
                    let hindi = hindiMarks != 55;     //TRUE
                    let english = englishMarks < 45;  //FALSE
                    let maths = mathsMarks > 88;      //FALSE
                    let science = scienceMarks <= 95; //TRUE
                    let social = socialMarks >= 100;  //FALSE

                    
                    comparisonResultParaRef.current.innerHTML = `Telugu Marks : ${telugu} Hindi Marks: ${hindi}
                                                                English Marks : ${english} Maths Marks : ${maths}
                                                                Science Marks : ${science} Social Marks : ${social}`; 
                    
                }}
            
            >Comparison Operators</button>
            
           
             
        </div>
        <p ref={comparisonResultParaRef}></p>
     </fieldset>
    </div>
  )
}

export default Operators
