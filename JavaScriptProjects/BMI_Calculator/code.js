/**
 * Basic expectation from this project:
 * Calculation of BMI with necessary parameters
 * basic understanding of how to add an event listener to  a form
 * basic understanding of what is e.preventDefault();
 * basic understanding of how to grab values from a form
 * -->parseInt()
 * -->document.getElementById("thisID").value
 *
 * First-Hand Thoughts
 * Logic:
 * calculate varti event listener lavoo
 * height gheu
 * weight gheu
 * bmi calculate karuyat
 * result cha id gheu ani innerhtml through display karu
 *
 *
 *
 * */

const form = document.querySelector('#thisForm');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // to prevent the default working of the forms submit operation

  console.log(e.target);
  const height = parseInt(document.getElementById('height').value) / 100; // in meters convert kelay
  // console.log(height);
  const weight = parseInt(document.getElementById('weight').value);
  // console.log(weight);
  const res = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    console.log('Please Enter valid height');
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    console.log('Please Enter valid weight');
  } else {
    const bmi = (weight / Math.pow(height, 2)).toFixed(1);
    let String = '';
    if (bmi < 18.6) {
      String = `Under Weight since your bmi is ${bmi}`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      String = `Normal since your bmi is ${bmi}`;
    } else {
      String = `Overweight since your bmi is ${bmi}`;
    }
    res.innerText = String;
  }
});
