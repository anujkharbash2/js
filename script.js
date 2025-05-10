// Block 1: Alert Buttons
function showAlert(type) {
    switch(type) {
      case 'success': alert('✅ Success!'); break;
      case 'danger': alert('❌ Danger!'); break;
      case 'info': alert('ℹ️ Info Alert'); break;
      case 'warning': alert('⚠️ Warning!'); break;
    }
  }
  
  // Block 2: Add/Subtract
  function addNumbers() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    document.getElementById('result1').textContent = `Result: ${a + b}`;
  }
  function subtractNumbers() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    document.getElementById('result1').textContent = `Result: ${a - b}`;
  }
  
  // Block 3: Multiply/Divide
  function multiply() {
    const a = parseFloat(document.getElementById('num3').value);
    const b = parseFloat(document.getElementById('num4').value);
    document.getElementById('result2').textContent = `Result: ${a * b}`;
  }
  function divide() {
    const a = parseFloat(document.getElementById('num3').value);
    const b = parseFloat(document.getElementById('num4').value);
    if (b === 0) {
      alert("Cannot divide by zero!");
    } else {
      document.getElementById('result2').textContent = `Result: ${a / b}`;
    }
  }
  
  // Block 4: Number Checker
  function checkNumber() {
    const num = parseInt(document.getElementById('checkNum').value);
    let result = num % 2 === 0 ? "Even" : "Odd";
  
    function isPrime(n) {
      if (n <= 1) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    }
  
    if (isPrime(num)) result += " & Prime";
    else if (num > 1) result += " & Composite";
    document.getElementById('result3').textContent = result;
  }
  
  // Block 5: Voting Eligibility
  function checkEligibility() {
    const age = parseInt(document.getElementById('age').value);
    const msg = age >= 18 ? "Eligible to Vote" : "Not Eligible to Vote";
    document.getElementById('result4').textContent = msg;
  }
  
  // Block 6: Grade and CGPA
  function calculateCGPA() {
    const subjects = [
        { name: "Math", credit: 4 },
        { name: "Physics", credit: 3 },
        { name: "DSA", credit: 4 },
        { name: "Python", credit: 3 },
        { name: "Digital Logic", credit: 3 }
    ];

    let totalCredits = 0, weightedPoints = 0, result = '';

    for (let sub of subjects) {
        const mark = parseFloat(prompt(`Enter marks for ${sub.name}:`, 0));
        let grade = 'F', point = 0;

        if (mark >= 90) { grade = 'A+'; point = 10; }
        else if (mark >= 80) { grade = 'A'; point = 9; }
        else if (mark >= 70) { grade = 'B+'; point = 8; }
        else if (mark >= 60) { grade = 'B'; point = 7; }
        else if (mark >= 50) { grade = 'C'; point = 6; }
        else if (mark >= 40) { grade = 'D'; point = 5; }

        result += `${sub.name}: ${mark} → Grade: ${grade} (Point: ${point})\n`;
        weightedPoints += point * sub.credit;
        totalCredits += sub.credit;
    }

    const cgpa = (weightedPoints / totalCredits).toFixed(2);
    const finalOutput = result + `\nCGPA: ${cgpa}`;

    document.getElementById('gradeOutput').textContent = finalOutput;
    localStorage.setItem('cgpaData', finalOutput);
}

  
  // Block 7: Invoice Calculator
  function calculateInvoice() {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const base = parseFloat(document.getElementById('price').value);
    const discount = parseFloat(document.getElementById('discount').value);
    const cgst = parseFloat(document.getElementById('cgst').value);
    const sgst = parseFloat(document.getElementById('sgst').value);
  
    const discounted = base - (base * (discount / 100));
    const tax = discounted * ((cgst + sgst) / 100);
    const final = discounted + tax;
  
    const output = `
      Customer: ${name} (${contact})<br/>
      Base Price: ₹${base}<br/>
      Discounted Price: ₹${discounted.toFixed(2)}<br/>
      Tax (CGST+SGST): ₹${tax.toFixed(2)}<br/>
      <strong>Final Price: ₹${final.toFixed(2)}</strong>
    `;
    document.getElementById('invoiceOutput').innerHTML = output;
  }
  
  // Block 8: Event Handling
  function handleEvent(btn) {
    document.getElementById('eventOutput').textContent = `Button clicked: ${btn.textContent}`;
  }
  function handleDoubleClick() {
    document.getElementById('eventOutput').textContent = "Double Click Detected!";
  }
  function hoverEvent() {
    document.getElementById('eventOutput').textContent = "Mouse Hovered!";
  }
  
  // Block 9: Forms
  function handleForm(event) {
    event.preventDefault();
    const name = document.getElementById('username').value;
    const email = document.getElementById('useremail').value;
    document.getElementById('formOutput').textContent = `Name: ${name}, Email: ${email}`;
  }
  
  // Block 10: DOM Manipulation
  function changeText() {
    const text = document.getElementById('domText');
    text.textContent = text.textContent === "Original Text" ? "Text Changed!" : "Original Text";
  }
  
  // Block 11: Storage
  function saveToLocal() {
    const val = document.getElementById('storageData').value;
    localStorage.setItem('data', val);
    alert('Saved to LocalStorage');
  }
  function saveToSession() {
    const val = document.getElementById('storageData').value;
    sessionStorage.setItem('data', val);
    alert('Saved to SessionStorage');
  }
  
  // Block 12: Bulb Toggle
  let bulbOn = false;
  function toggleBulb() {
    const bulb = document.getElementById('bulb');
    bulbOn = !bulbOn;
    bulb.style.background = bulbOn ? 'yellow' : 'gray';
  }
 

  
  // Block 13: Color Mixer
  function mixColors() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const mixed = mixHexColors(color1, color2);
    document.getElementById('colorBox').style.background = mixed;
  }
  
  function mixHexColors(c1, c2) {
    const hex = (x) => parseInt(x, 16);
    const r = Math.floor((hex(c1[1] + c1[2]) + hex(c2[1] + c2[2])) / 2);
    const g = Math.floor((hex(c1[3] + c1[4]) + hex(c2[3] + c2[4])) / 2);
    const b = Math.floor((hex(c1[5] + c1[6]) + hex(c2[5] + c2[6])) / 2);
    return `rgb(${r}, ${g}, ${b})`;
  }
  function updateColor() {
    const r = parseInt(document.getElementById('red').value);
    const g = parseInt(document.getElementById('green').value);
    const b = parseInt(document.getElementById('blue').value);

    const colorBox = document.getElementById('colorPreview');
    const rgbText = document.getElementById('rgbValue');
    const hexText = document.getElementById('hexValue');

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

    colorBox.style.backgroundColor = rgb;
    rgbText.textContent = `RGB: ${rgb}`;
    hexText.textContent = `HEX: ${hex}`;
}