function generatePassword(length, includeNumbers = true, includeSpecialChars = false) {
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let specialChars = "@#$%!&*";
  
  if (includeNumbers) {
    characters += numbers;
  }
  if (includeSpecialChars) {
    characters += specialChars;
  }
  
  let password = "";
  
  while (password.length < length) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  if (!/[A-Z]/.test(password)) {
    password = password.substring(0, password.length - 1) + "A";
  }
  
  if (includeNumbers && !/[0-9]/.test(password)) {
    password = password.substring(0, password.length - 1) + "1";
  }
  
  if (includeSpecialChars && !/[!@#$%&*]/.test(password)) {
    password = password.substring(0, password.length - 1) + "@";
  }
  
  return password;
}

console.log(generatePassword(10, true, true));
