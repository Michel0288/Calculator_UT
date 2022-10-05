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
  //DIVISION
  it('should return 1 for 8 / 8', function() {
    document.getElementById('btn8').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('1');
  });

  it('should return 3 for 9 / 3', function() {
    document.getElementById('btn9').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('3');
  });

  it('should return 0.3283582089552239 for 22 / 67', function() {
    document.getElementById('btn2').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0.3283582089552239');
  });

  it('should return 1.0584415584415585 for 163 / 154', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('1.0584415584415585');
  });

  it('should return 869.6718191565404 for 19466734 / 22384', function() {
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

  it('should return 0.00035298270384751147 for 1 / 2833', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0.00035298270384751147');
  });

  it('should return 2833 for 2833 / 1', function() {
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('2833');
  });

  it('should return 0 for 0 / 283434', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0');
  });

  it('should return Error for 283434 / 0', function() {
    document.getElementById('btn2').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('Error');
  });

  it('should return 1 for 2 / 2', function() {
    document.getElementById('btn2').click();  
    document.getElementById('btn/').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('1');
  });

  it('should return 1 for 245 / 245', function() {
    document.getElementById('btn2').click();  
    document.getElementById('btn4').click();  
    document.getElementById('btn5').click();  
    document.getElementById('btn/').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn4').click();  
    document.getElementById('btn5').click();  
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('1');
  });

  it('should return 0.01 for 2 / 200 ', function() {
    document.getElementById('btn2').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn0').click();  
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0.01');
  });

  it('should return 500 for 1000 / 2', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('500');
  });

  it('should return 10 for 10000 / 100', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn/').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('10');
  });

  it('should return Error for 10 / 100 / 0 / 120 / 4300', function() {
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn/').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn/').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn/').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn3').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('Error');
  });

  it('should return 7.124352908383494e-8 for 8 / 010 / 870 / 12907', function() {
    document.getElementById('btn8').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn8').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn7').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('7.124352908383494e-8');
  });

  it('should return 0.01918442858697511 for 1234 / 0000064323', function() {
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
    expect(document.querySelector('.display').value).toBe('0.01918442858697511');
  });

  it('should return 52.12560777957861 for 0000064323 / 1234', function() {
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
    document.getElementById('btn/').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn2').click();
    document.getElementById('btn3').click();
    document.getElementById('btn4').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('52.12560777957861');
  });

  it('should return 500 for 2000 / 4', function() {
    document.getElementById('btn2').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn/').click(); 
    document.getElementById('btn4').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('500');
  });

  it('should return 4.28386454183267 for 4301 / 1004', function() {
    document.getElementById('btn4').click();
    document.getElementById('btn3').click();
    document.getElementById('btn0').click();
    document.getElementById('btn1').click();
    document.getElementById('btn/').click(); 
    document.getElementById('btn1').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn0').click();
    document.getElementById('btn4').click();
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('4.28386454183267');
  });

  it('should return 2.869767441860465 for 0000123400 / 000043000', function() {
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
    document.getElementById('btn/').click(); 
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
    expect(document.querySelector('.display').value).toBe('2.869767441860465');
  });

  it('should return 0 for 000 / 3200 / 63', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn2').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click();
    document.getElementById('btn/').click(); 
    document.getElementById('btn6').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0');
  });

  it('should return 0.08528301886792454 for 090400 / 005300 / 200', function() {
    document.getElementById('btn0').click(); 
    document.getElementById('btn9').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn4').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn5').click(); 
    document.getElementById('btn3').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn/').click();
    document.getElementById('btn2').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn0').click(); 
    document.getElementById('btn=').click(); 
    expect(document.querySelector('.display').value).toBe('0.08528301886792454');
  });

  it('should return 1.702612038747126e-7 for 09034400 / 000012340000 / 00004300000', function() {
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
    document.getElementById('btn/').click(); 
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
    expect(document.querySelector('.display').value).toBe('1.702612038747126e-7');
  });


  it('should return 1.0110222284412226e-17 for 9909034400 / 99000012340000 / 9900004300000', function() {
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
    document.getElementById('btn/').click(); 
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
    document.getElementById('btn/').click(); 
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
    expect(document.querySelector('.display').value).toBe('1.0110222284412226e-17');
  });
});