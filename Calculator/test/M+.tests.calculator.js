/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function() {

  // inject the HTML fixture for the tests
  beforeEach(function() {
    var fixture =`<div class="calculator">
                  <!-- display -->
                  <input type="text" class="display" disabled>
                  <!-- keys -->
                  <div class="keys">
                    <!-- 4 rows of keys -->
                    <div class="row">
                      <button id="sign">+/-</button>
                      <button id="sqrt" value="sqrt" >&radic;</button>
                      <button id="percent" value="%">%</button>
                      <button id="btn/" value="/" class="operator">/</button>
                    </div>
                    <div class="row">
                      <button id="MRC" value="MRC">MRC</button>
                      <button id="M-" value="M-">M-</button>
                      <button id="M+" value="M+">M+</button>
                      <button id="btn*" value="*" class="operator">*</button>
                    </div>
                    <div class="row">
                      <button id="btn7" value="7">7</button>
                      <button id="btn8" value="8">8</button>
                      <button id="btn9" value="9">9</button>
                      <button id="btn-" value="-" class="operator">-</button>
                    </div>
                    <div class="row">
                      <button id="btn4" value="4">4</button>
                      <button id="btn5" value="5">5</button>
                      <button id="btn6" value="6">6</button>
                      <button id="btn+" value="+" class="operator">+</button>
                    </div>
                    <div class="row">
                      <button id="btn1" value="1">1</button>
                      <button id="btn2" value="2">2</button>
                      <button id="btn3" value="3">3</button>
                      <button id="btn=" value="=" class="operator">=</button>
                    </div>
                    <div class="row">
                      <button id="btnC" value="C" class="operator">C</button>
                      <button id="btn0" value="0">0</button>
                      <button disabled class="operator">&#8718;</button>
                      <button disabled ></button>
                    </div>
                  </div>
                </div>`;

    document.body.insertAdjacentHTML(
      'afterbegin', 
      fixture);
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    document.body.removeChild(document.getElementsByClassName('calculator')[0]);
  });

  // call the init function of calculator to register DOM elements
  beforeEach(function() {
    window.calculator.init();
  });

  //Arithmetic Calculations 
  //M+
  it('should return 15 for 7 + 8', function() {
    document.getElementById('btn7').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn=').click(); 
    document.getElementById('M+').click(); 
    expect(document.querySelector('.display').value).toBe('30');
  });

  it('should return 5 for 2 + 3', function() {
    document.getElementById('btn2').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click();  
    document.getElementById('M+').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    document.getElementById('M+').click(); 
    document.getElementById('M+').click(); 
    expect(document.querySelector('.display').value).toBe('60');
  });

  it('should return 27 for 12 + 15', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('M+').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('27');
  });

});