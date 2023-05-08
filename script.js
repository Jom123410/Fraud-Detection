script.js

      function calculate() {
        // get the values of the input fields
        var CS = document.getElementById("CS").value;
        var CL = document.getElementById("CL").value;
        var TL = document.getElementById("TL").value;
        var TA = document.getElementById("TA").value;
        var SA = document.getElementById("SA").value;
        var FA = document.getElementById("FA").value;
        var INV = document.getElementById("INV").value;
        var CA = document.getElementById("CA").value;
  
        // perform the ratios calculation
        var Cash_CurrentLiabilites = CS / CL;
        var TotalLib_TotalAssets = TL / TA;
        var Sales_FixedAssets = SA / FA;
        var Inventories_CurrentAssets = INV / CA;
  
        // perform the calculation using the ratios
        var result = Probability(Cash_CurrentLiabilites, TotalLib_TotalAssets, Sales_FixedAssets, Inventories_CurrentAssets);
  
        // get the element to display the result
        var output = document.getElementById("result");
        output.innerHTML = "<b>" + result.toFixed(2) + "%</b>";
  
        // check if the result is greater than 50
        if (result > 50) {
          // if so, set the innerHTML of the result element to "No Fraud detected" with bold formatting
          output.innerHTML = "<b>Fraud detected: " + result.toFixed(2) + "%</b>";
        } else {
          // otherwise, set the innerHTML to "Fraud detected" with bold formatting
          output.innerHTML = "<b> No Fraud detected: " + result.toFixed(2) + "%</b>";
        }
      }

  function Probability(Cash_CurrentLiabilites,  TotalLib_TotalAssets, Sales_FixedAssets, Inventories_CurrentAssets) {
    return 100 * (1 / (1 + Math.exp(5.768 - 4.263 * Inventories_CurrentAssets - 0.029 * Sales_FixedAssets - 4.766 *  TotalLib_TotalAssets - 1.936 * Cash_CurrentLiabilites)));
  }

//Function to automatically enter the data of a fraudulent company into the number boxes when the button "Fraudulent Data Example" is pressed
function FraudExample(){
  
    // Declaring the constant variables used in the formula
    const cash = document.getElementById("CS")
    const currentLiability = document.getElementById("CL")
    const totalLiability = document.getElementById("TL")
    const totalAsset = document.getElementById("TA")
    const sales = document.getElementById("SA")
    const fixAsset = document.getElementById("FA")
    const inventory = document.getElementById("INV")
    const currentAssets  = document.getElementById("CA")

    //Set the values of the constants to those of a fraudulent company
    
    cash.value = 3000;
    currentLiability.value = 2500;
    totalLiability.value = 4500;
    totalAsset.value = 10000;
    sales.value = 3500;
    fixAsset.value = 1000;
    inventory.value = 5000;
    currentAssets . value = 2900;
  
}

//Function to automatically enter the data of a non-fraudulent company into the number boxes when the button "Non-Fraudulent Data Example" is pressed
function NoFraudExample(){
  
    //  Declaring the constant variables used in the formula
    const cash = document.getElementById("CS")
    const currentLiability = document.getElementById("CL")
    const totalLiability = document.getElementById("TL")
    const totalAsset = document.getElementById("TA")
    const sales = document.getElementById("SA")
    const fixAsset = document.getElementById("FA")
    const inventory = document.getElementById("INV")
    const currentAssets  = document.getElementById("CA")
  
    //Set the values of the constant to those of a non fraudulent company
    cash.value = 800;
    currentLiability.value = 7500;
    totalLiability.value = 550;
    totalAsset.value = 1000;
    sales.value = 3500;
    fixAsset.value = 2000;
    inventory.value = 4000;
    currentAssets . value = 6900;
}

  
//Function to clear input boxes and result field when the button "clear form" is pressed
function ClearButton() {

  //Assign the user input to constant
    const cash = document.getElementById("CS")
    const currentLiability = document.getElementById("CL")
    const totalLiability = document.getElementById("TL")
    const totalAsset = document.getElementById("TA")
    const sales = document.getElementById("SA")
    const fixAsset = document.getElementById("FA")
    const inventory = document.getElementById("INV")
    const currentAssets  = document.getElementById("CA")
  const result = document.getElementById("result")
  
  //Clear input and result fields by setting values to 'empty'
  
    cash.value = '';
    currentLiability.value = '';
    totalLiability.value = '';
    totalAsset.value = '';
    sales.value = '';
    fixAsset.value = '';
    inventory.value = '';
    currentAssets . value = '';
  result.innerHTML = "";
}

