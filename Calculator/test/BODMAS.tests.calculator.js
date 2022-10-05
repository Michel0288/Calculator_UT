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
  //BODMAS
  it('should return 16 for 8 / 8 * 8 + 8', function() {
    document.getElementById('btn8').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('16');
  });

  it('should return 51 for 6 * 9 - 3', function() {
    document.getElementById('btn6').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('51');
  });

  it('should return -15 for 0 * 33 - 15', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('-15');
  });

  it('should return -67 for 0 / 22 - 67', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('-67');
  });

  it('should return Error for 163 / 0 * 154', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('Error');
  });

  it('should return Error for 0 / 0 * 194 + 284', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('Error');
  });

  it('should return 869.6718191565404 for 1 * 19466734 / 22384', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('869.6718191565404');
  });

  it('should return -2835 for 0 - 2 + 0 / 34 * 43344 - 2833', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn*').click(); 
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
    expect(document.querySelector('.display').value).toBe('-2835');
  });

  it('should return Error for 0 - 2 / 0 * 34 / 0 + 43344 + 2833', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn-').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('Error');
  });

  it('should return Error for 0 / 00 * 00', function() {
    document.getElementById('btn0').click();
    document.getElementById('btn/').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('Error');
  });

  it('should return 13603 for 8 / 010 * 870 + 12907', function() {
    document.getElementById('btn8').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn*').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('13603');
  });

  it('should return 1.2469878581533822 for 65 * 1234 / 0000064323', function() {
    document.getElementById('btn6').click();
    document.getElementById('btn5').click();
    document.getElementById('btn*').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn4').click();
    document.getElementById('btn/').click(); 
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
    expect(document.querySelector('.display').value).toBe('1.2469878581533822');
  });

  it('should return 8040000 for 09034400 / 000012340000 - 00004300000', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click(); 
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
    expect(document.querySelector('.display').value).toBe('-4299999.267876823');
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

  it('should return 44056251600 for 09034400 * 00975300 / 200', function() {
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
    document.getElementById('btn9').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click();
    document.getElementById('btn2').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('44056251600');
  });

});