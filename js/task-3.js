"use strict";

function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
    
    const boxSizing = "border-box";
    let totalWidth;
    if (boxSizing === "border-box") {
    
    totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
  } else {
    totalWidth = contentWidth + 2 * paddingWidth;
  }
  return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));

function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  
  return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}
console.log(checkForSpam("Latest technology news")); 
console.log(checkForSpam("JavaScript weekly newsletter")); 
console.log(checkForSpam("Get best sale offers now!")); 
console.log(checkForSpam("Amazing SalE, only tonight!")); 
console.log(checkForSpam("Trust me, this is not a spam message")); 
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); 
console.log(checkForSpam("[SPAM] How to earn fast money?")); 