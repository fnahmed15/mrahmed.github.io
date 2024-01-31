var password = "bma123";
(function passcodeprotect() {
   var passcode = prompt("Enter PassCode");
   while (passcode !== password) {
      alert("Incorrect PassCode");
      return passcodeprotect();
   }
}());
alert('Welcome to mrahmedcomputing.co.uk');