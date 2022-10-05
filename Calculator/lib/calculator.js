window.calculator = window.calculator || {};

(function() {
  window.calculator.init = function() {
    let memory = 0;
    let on_off=0;
    let m_clear=0;
    // select all the buttons
    const buttons = document.querySelectorAll('button');
    // select the <input type="text" class="display" disabled> element
    const display = document.querySelector('.display');
    // add eventListener to each button
    function startUpCalculator(){
      buttons.forEach(function(button) {
        button.addEventListener('click', calculate);
      });
    }

    function remove_leading_zeros(string_values){
      var expr = new RegExp("(?<=[-+*/])|(?=[-+*/])");  
      let newstring="";
      var lst=display.value.split(expr)
      for (let i = 0; i < lst.length; i++) {
        if(lst[i]==="+" || lst[i]==="/" || lst[i]==="-" || lst[i]==="*"){
            newstring+=lst[i]
            
        }else{
            newstring+=parseInt(lst[i])
        }
      }
      return newstring;
    }
    // calculate function
    function calculate(event) {
      // current clicked buttons value
      const clickedButtonValue = event.target.value;
      
      if (clickedButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (display.value !== '') {
          // calculate and show the answer to display
          
          display.value = eval(remove_leading_zeros(display.value));
          memory=display.value;
          console.log(display.value)
          if(display.value==='Infinity'){
            display.value = 'Error';
          }else if(display.value==='-Infinity'){
            display.value = 'Error';
          }else if(display.value==='NaN'){
            display.value = 'Error';
          }else{
            display.value = display.value;
          }
        }
      } else if (clickedButtonValue === 'C') {
        // clear everything on display
        on_off+=1;

        display.value = '';
      }
      else if(clickedButtonValue === 'sqrt'){
        if(display.value>=0){
          display.value=String(Math.sqrt(Number(display.value)))
        }else{
          display.value="Error"
        }

      }else if(clickedButtonValue === 'sign'){
        if(remove_leading_zeros(display.value)===Math.abs(display.value))
        {
          display.value=String(-1*Number(display.value)) 
        }else{
          remove_leading_zeros(display.value)
        }
      }
      else if(clickedButtonValue === 'MRC'){
        m_clear+=1;
        if(m_clear===2){
          memory=0;
        }else{
          display.value=memory;
        }
        
      }
      else if(clickedButtonValue==='M-'){
        let val = eval(Number(memory)-Number(display.value));
        console.log(memory,display.value)
        display.value = val;
        memory=display.value;
      }
      else if(clickedButtonValue==='M+'){
        let val = eval(Number(memory)+Number(display.value));
        display.value = val;
        memory=display.value;
      }
      else if(clickedButtonValue==='%'){
        display.value=display.value/100;
        if(display.value==='Infinity'){
          display.value = 'Error';
        }else if(display.value==='-Infinity'){
          display.value = 'Error';
        }else if(display.value==='NaN'){
          display.value = 'Error';
        }else{
          display.value = display.value;
        }
      }
      else{
        // otherwise concatenate it to the display
        display.value += clickedButtonValue;
      }
    }
    startUpCalculator();
  };
  	
})();