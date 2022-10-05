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
  //MULTIPLICATION
  it('should return 64 for 8 * 8', function() {
    document.getElementById('btn8').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('64');
  });

  it('should return 27 for 9 * 3', function() {
    document.getElementById('btn9').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('27');
  });

  it('should return 1474 for 22 * 67', function() {
    document.getElementById('btn2').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('1474');
  });

  it('should return 25102 for 163 * 154', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('25102');
  });

  it('should return 435743373856 for 19466734 * 22384', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('435743373856');
  });

  it('should return 2833 for 1 * 2833', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('2833');
  });

  it('should return 0 for 0 * 283434', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0');
  });

  it('should return 400 for 200 * 2', function() {
    document.getElementById('btn2').click(); 
    document.getElementById('btn0').click();  
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('400');
  });


  it('should return 400 for 2 * 200 ', function() {
    document.getElementById('btn2').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn0').click();  
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('400');
  });

  it('should return 0 for 0 * 0', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0');
  });

  it('should return 1000 for 10 * 100', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('1000');
  });

  it('should return 1000 for 10 * 100 * 0 * 120 * 4300', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn3').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0');
  });

  it('should return 898327200 for 8 * 010 * 870 * 12907', function() {
    document.getElementById('btn8').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('898327200');
  });


  it('should return 79374582 for 1234 * 0000064323', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn4').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn6').click();
    document.getElementById('btn4').click();
    document.getElementById('btn3').click();
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('79374582');
  });

  it('should return 79374582 for 0000064323 * 1234', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn6').click();
    document.getElementById('btn4').click();
    document.getElementById('btn3').click();
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn4').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('79374582');
  });

  it('should return 8000 for 2000 * 4', function() {
    document.getElementById('btn2').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn4').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('8000');
  });

  it('should return 4318204 for 4301 * 1004', function() {
    document.getElementById('btn4').click();
    document.getElementById('btn3').click();
    document.getElementById('btn0').click();
    document.getElementById('btn1').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn4').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('4318204');
  });

  it('should return 5306200000 for 0000123400 * 000043000', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn4').click();
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn4').click(); 
    document.getElementById('btn3').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('5306200000');
  });

  it('should return 0 for 000 * 3200 * 63', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0');
  });

  it('should return 95824000000 for 090400 * 005300 * 200', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click();
    document.getElementById('btn2').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('95824000000');
  });

  it('should return 479383332800000000000 for 09034400 * 000012340000 * 00004300000', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn4').click();
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn4').click(); 
    document.getElementById('btn3').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('479383332800000000000');
  });

  it('should return 9.711850044263565e+36 for 9909034400 * 99000012340000 * 9900004300000', function() {
    document.getElementById('btn9').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn4').click();
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn9').click();     
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn4').click(); 
    document.getElementById('btn3').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('9.711850044263565e+36');
  });
});