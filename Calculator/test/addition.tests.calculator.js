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
  //ADDITION
  it('should return 15 for 7 + 8', function() {
    document.getElementById('btn7').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('15');
  });

  it('should return 5 for 2 + 3', function() {
    document.getElementById('btn2').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('5');
  });

  it('should return 27 for 12 + 15', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('27');
  });

  it('should return 89 for 22 + 67', function() {
    document.getElementById('btn2').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('89');
  });

  it('should return 266 for 112 + 154', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('266');
  });

  it('should return 288 for 194 + 284', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('478');
  });

  it('should return 19489118 for 19466734 + 22384', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('19489118');
  });

  it('should return 46178 for 43344 + 2834', function() {
    document.getElementById('btn4').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('46178');
  });

  it('should return 283478 for 44 + 283434', function() {
    document.getElementById('btn4').click(); 
    document.getElementById('btn4').click();  
    document.getElementById('btn+').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('283478');
  });

  it('should return 109911 for 9999 + 99912', function() {
    document.getElementById('btn9').click(); 
    document.getElementById('btn9').click();  
    document.getElementById('btn9').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('109911');
  });

  it('should return 0 for 0 + 0', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0');
  });

  it('should return 13795 for 8 + 010 + 870 + 12907', function() {
    document.getElementById('btn8').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn+').click(); 
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
    expect(document.querySelector('.display').value).toBe('13795');
  });

  it('should return 65557 for 1234 + 0000064323', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn4').click();
    document.getElementById('btn+').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn6').click();
    document.getElementById('btn4').click();
    document.getElementById('btn3').click();
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('65557');
  });

  it('should return 5534 for 1234 + 4300', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn4').click();
    document.getElementById('btn+').click(); 
    document.getElementById('btn4').click();
    document.getElementById('btn3').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('5534');
  });

  it('should return 5534 for 1004 + 4301', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn4').click();
    document.getElementById('btn+').click(); 
    document.getElementById('btn4').click();
    document.getElementById('btn3').click();
    document.getElementById('btn0').click();
    document.getElementById('btn1').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('5305');
  });

  it('should return 16640000 for 000012340000 + 00004300000', function() {
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
    document.getElementById('btn+').click(); 
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
    expect(document.querySelector('.display').value).toBe('16640000');
  });

  it('should return 3263 for 000 + 3200 + 63', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn+').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('3263');
  });

  it('should return 1009900 for 200 + 00034400 + 00975300 ', function() {
    document.getElementById('btn2').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn+').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('1009900');
  });
});