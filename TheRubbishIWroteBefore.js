function convertToRoman(num) {
  var emp = [];
  function three(n) {
    emp.push('I');
    n < 2 ? false : three(n - 1);
  }
  function Ten(num) {
    num >= 4 /*>=4(five and above)*/
      ? num > 4 /*>4*/
        ? num == 5 /*5 code*/
          ? emp.push('V') /*greater than 5*/
          : num >= 9
          ? num == 10
            ? emp.push('X')
            : emp.push('IX') /*end of 9&10*/
          : /*>5&&<9*/ emp.push('V') + three(num - 5)
        : emp.push('IV')
      : /*end of first ? ie num>=4(true)*/
      num > 1
      ? three(num)
      : num == 1
      ? emp.push('I')
      : emp.push('');
    /*end of false ? ie num>=4(false)*/
    return emp.join('');
  }
  function forthyOrLess(num) {
    num < 4
      ? three(num)
      : num < 10
      ? Ten(num)
      : num < 20
      ? emp.push('X') + Ten(num - 10)
      : num < 30
      ? emp.push('XX') + Ten(num - 20)
      : num == 40
      ? emp.push('XL')
      : emp.push('XXX') + Ten(num - 30);
    return emp.join('');
  }
  function toNinty(num) {
    num < 50
      ? emp.push('XL') + Ten(num - 40)
      : /*>50*/ num < 90
      ? /*<90*/ num == 50
        ? /*50*/ emp.push('L')
        : /*>50&&<90*/ emp.push('L') + forthyOrLess(num - 50)
      : /*90*/ emp.push('XC');
    return emp.join('');
  }
  function toAHundred(num) {
    num <= 99 ? emp.push('XC') + Ten(num - 90) : emp.push('C');
    return emp.join('');
  }
  function to2Hundred(num) {
    num < 200
      ? /*to 110*/ num <= 110
        ? emp.push('C') + Ten(num - 100)
        : /*to 140*/ num <= 140
        ? emp.push('C') + forthyOrLess(num - 100)
        : /*to 190*/ num <= 190
        ? emp.push('C') + toNinty(num - 100)
        : emp.push('C') + toAHundred(num - 100)
      : emp.push('CC');
    return emp.join('');
  }
  function to3Hundred(num) {
    num < 300
      ? /*to 210*/ num <= 210
        ? emp.push('CC') + Ten(num - 200)
        : /*to 240*/ num <= 240
        ? emp.push('CC') + forthyOrLess(num - 200)
        : /*to 290*/ num <= 290
        ? emp.push('CC') + toNinty(num - 200)
        : emp.push('CC') + toAHundred(num - 200)
      : emp.push('CCC');
    return emp.join('');
  }
  function to4Hundred(num) {
    num < 400
      ? /*to 310*/ num <= 310
        ? emp.push('CCC') + Ten(num - 300)
        : /*to 340*/ num <= 340
        ? emp.push('CCC') + forthyOrLess(num - 300)
        : /*to 390*/ num <= 390
        ? emp.push('CCC') + toNinty(num - 300)
        : emp.push('CCC') + toAHundred(num - 300)
      : emp.push('CD');
    return emp.join('');
  }
  function to5Hundred(num) {
    num < 500
      ? /*to 410*/ num <= 410
        ? emp.push('CD') + Ten(num - 400)
        : /*to 440*/ num <= 440
        ? emp.push('CD') + forthyOrLess(num - 400)
        : /*to 490*/ num <= 490
        ? emp.push('CD') + toNinty(num - 400)
        : emp.push('CD') + toAHundred(num - 400)
      : emp.push('D');
    return emp.join('');
  }
  function to6Hundred(num) {
    num < 600
      ? /*to 510*/ num <= 510
        ? emp.push('D') + Ten(num - 500)
        : /*to 540*/ num <= 540
        ? emp.push('D') + forthyOrLess(num - 500)
        : /*to 590*/ num <= 590
        ? emp.push('D') + toNinty(num - 500)
        : emp.push('D') + toAHundred(num - 500)
      : emp.push('DC');
    return emp.join('');
  }
  function to7Hundred(num) {
    num < 700
      ? /*to 610*/ num <= 610
        ? emp.push('DC') + Ten(num - 600)
        : /*to 640*/ num <= 640
        ? emp.push('DC') + forthyOrLess(num - 600)
        : /*to 690*/ num <= 690
        ? emp.push('DC') + toNinty(num - 600)
        : emp.push('DC') + toAHundred(num - 600)
      : emp.push('DCC');
    return emp.join('');
  }
  function to8Hundred(num) {
    num < 800
      ? /*to 710*/ num <= 710
        ? emp.push('DCC') + Ten(num - 700)
        : /*to 740*/ num <= 740
        ? emp.push('DCC') + forthyOrLess(num - 700)
        : /*to 790*/ num <= 790
        ? emp.push('DCC') + toNinty(num - 700)
        : emp.push('DCC') + toAHundred(num - 700)
      : emp.push('DCCC');
    return emp.join('');
  }
  function to9Hundred(num) {
    num < 900
      ? /*to 810*/ num <= 810
        ? emp.push('DCCC') + Ten(num - 800)
        : /*to 840*/ num <= 840
        ? emp.push('DCCC') + forthyOrLess(num - 800)
        : /*to 890*/ num <= 890
        ? emp.push('DCCC') + toNinty(num - 800)
        : emp.push('DCCC') + toAHundred(num - 800)
      : emp.push('CM');
    return emp.join('');
  }
  function toAThousand(num) {
    num < 1000
      ? /*to 910*/ num <= 910
        ? emp.push('CM') + Ten(num - 900)
        : /*to 940*/ num <= 940
        ? emp.push('CM') + forthyOrLess(num - 900)
        : /*to 990*/ num <= 990
        ? emp.push('CM') + toNinty(num - 900)
        : emp.push('CM') + toAHundred(num - 900)
      : emp.push('M');
    return emp.join('');
  }
  function to2Thousand(num) {
    num < 2000
      ? /*to 1010*/ num <= 1010
        ? emp.push('M') + Ten(num - 1000)
        : /*to 1040*/ num <= 1040
        ? emp.push('M') + forthyOrLess(num - 1000)
        : /*to 1090*/ num <= 1090
        ? emp.push('M') + toNinty(num - 1000)
        : num <= 1100
        ? emp.push('M') + toAHundred(num - 1000)
        : num <= 1200
        ? emp.push('M') + to2Hundred(num - 1000)
        : num <= 1300
        ? emp.push('M') + to3Hundred(num - 1000)
        : num <= 1400
        ? emp.push('M') + to4Hundred(num - 1000)
        : num <= 1500
        ? emp.push('M') + to5Hundred(num - 1000)
        : num <= 1600
        ? emp.push('M') + to6Hundred(num - 1000)
        : num <= 1700
        ? emp.push('M') + to7Hundred(num - 1000)
        : num <= 1800
        ? emp.push('M') + to8Hundred(num - 1000)
        : num <= 1900
        ? push('M') + to9Hundred(num - 1000)
        : emp.push('M') + toAThousand(num - 1000)
      : emp.push('MM');
    return emp.join('');
  }
  function to3Thousand(num) {
    num < 3000
      ? /*to 2010*/ num <= 2010
        ? emp.push('MM') + Ten(num - 2000)
        : /*to 2040*/ num <= 2040
        ? emp.push('MM') + forthyOrLess(num - 2000)
        : /*to 2090*/ num <= 2090
        ? emp.push('MM') + toNinty(num - 2000)
        : num <= 2100
        ? emp.push('MM') + toAHundred(num - 2000)
        : num <= 2200
        ? emp.push('MM') + to2Hundred(num - 2000)
        : num <= 2300
        ? emp.push('MM') + to3Hundred(num - 2000)
        : num <= 2400
        ? emp.push('MM') + to4Hundred(num - 2000)
        : num <= 2500
        ? emp.push('MM') + to5Hundred(num - 2000)
        : num <= 2600
        ? emp.push('MM') + to6Hundred(num - 2000)
        : num <= 2700
        ? emp.push('MM') + to7Hundred(num - 2000)
        : num <= 2800
        ? emp.push('MM') + to8Hundred(num - 2000)
        : num <= 2900
        ? push('MM') + to9Hundred(num - 2000)
        : emp.push('MM') + toAThousand(num - 2000)
      : emp.push('MMM');
    return emp.join('');
  }
  function to4Thousand(num) {
    num < 4000
      ? /*to 3010*/ num <= 3010
        ? emp.push('MMM') + Ten(num - 3000)
        : /*to 3040*/ num <= 3040
        ? emp.push('MMM') + forthyOrLess(num - 3000)
        : /*to 3090*/ num <= 3090
        ? emp.push('MMM') + toNinty(num - 3000)
        : num <= 3100
        ? emp.push('MMM') + toAHundred(num - 3000)
        : num <= 3200
        ? emp.push('MMM') + to2Hundred(num - 3000)
        : num <= 3300
        ? emp.push('MMM') + to3Hundred(num - 3000)
        : num <= 3400
        ? emp.push('MMM') + to4Hundred(num - 3000)
        : num <= 3500
        ? emp.push('MMM') + to5Hundred(num - 3000)
        : num <= 3600
        ? emp.push('MMM') + to6Hundred(num - 3000)
        : num <= 3700
        ? emp.push('MMM') + to7Hundred(num - 3000)
        : num <= 3800
        ? emp.push('MMM') + to8Hundred(num - 3000)
        : num <= 3900
        ? push('MMM') + to9Hundred(num - 3000)
        : emp.push('MMM') + toAThousand(num - 3000)
      : emp.push('MMMM');
    return emp.join('');
  }

  //Where it all retruns
  return num == 0
    ? `The Number Zero Does Not Have Its Own Roman Numeral`
    : num <= 10
    ? Ten(num)
    : num <= 40
    ? forthyOrLess(num)
    : num <= 90
    ? toNinty(num)
    : num <= 100
    ? toAHundred(num)
    : num <= 200
    ? to2Hundred(num)
    : num <= 300
    ? to3Hundred(num)
    : num <= 400
    ? to4Hundred(num)
    : num <= 500
    ? to5Hundred(num)
    : num <= 600
    ? to6Hundred(num)
    : num <= 700
    ? to7Hundred(num)
    : num <= 800
    ? to8Hundred(num)
    : num <= 900
    ? to9Hundred(num)
    : num <= 1000
    ? toAThousand(num)
    : num <= 2000
    ? to2Thousand(num)
    : num <= 3000
    ? to3Thousand(num)
    : num < 4000
    ? to4Thousand(num)
    : `From the Number 4000 Roman Numerial starts gettig Funny 	&#128533; (Enter from 1-3999 instead! &#128578;)`;
}
/*End of Function that Converts Arabic Numbers to Numerial*/
