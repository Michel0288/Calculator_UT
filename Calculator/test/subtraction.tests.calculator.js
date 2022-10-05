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
  //SUBTRACTION
  it('should return 0 for 8 - 8', function() {
    document.getElementById('btn8').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0');
  });

  it('should return 6 for 9 - 3', function() {
    document.getElementById('btn9').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('6');
  });

  it('should return 18 for 33 - 15', function() {
    document.getElementById('btn3').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('18');
  });

  it('should return -45 for 22 - 67', function() {
    document.getElementById('btn2').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('-45');
  });

  it('should return 9 for 163 - 154', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('9');
  });

  it('should return -90 for 194 - 284', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('-90');
  });

  it('should return 19444350 for 19466734 - 22384', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('19444350');
  });

  it('should return 40511 for 43344 - 2833', function() {
    document.getElementById('btn4').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('40511');
  });

  it('should return -283390 for 44 - 283434', function() {
    document.getElementById('btn4').click(); 
    document.getElementById('btn4').click();  
    document.getElementById('btn-').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('-283390');
  });

  it('should return −89913 for 9999 - 99912', function() {
    document.getElementById('btn9').click(); 
    document.getElementById('btn9').click();  
    document.getElementById('btn9').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('-89913');
  });

  it('should return 0 for 0 - 0', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0');
  });

  it('should return 00 for 00 - 00', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn-').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0');
  });

  it('should return −13779 for 8 - 010 - 870 - 12907', function() {
    document.getElementById('btn8').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('-13779');
  });

  it('should return 12019 for 12907 - 8 - 010 - 870 ', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('12019');
  });

  it('should return -63089 for 1234 - 0000064323', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn4').click();
    document.getElementById('btn-').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn6').click();
    document.getElementById('btn4').click();
    document.getElementById('btn3').click();
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('-63089');
  });

  it('should return 63089 for 0000064323 - 1234', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn6').click();
    document.getElementById('btn4').click();
    document.getElementById('btn3').click();
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn-').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn4').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('63089');
  });

  it('should return 3066 for 4300 - 1234', function() {
    document.getElementById('btn4').click();
    document.getElementById('btn3').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn-').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn4').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('3066');
  });

  it('should return 3297 for 4301-1004', function() {
    document.getElementById('btn4').click();
    document.getElementById('btn3').click();
    document.getElementById('btn0').click();
    document.getElementById('btn1').click();
    document.getElementById('btn-').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn4').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('3297');
  });

  it('should return 8040000 for 000012340000 - 00004300000', function() {
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
    document.getElementById('btn-').click(); 
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
    expect(document.querySelector('.display').value).toBe('8040000');
  });

  it('should return -3263 for 000 - 3200 - 63', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn-').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('-3263');
  });

  it('should return 8058900 for 09034400 - 00975300 - 200', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn-').click();
    document.getElementById('btn2').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('8058900');
  });
});