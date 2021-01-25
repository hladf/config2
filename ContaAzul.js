const fetch = require("node-fetch");

getCripto = async () => {
  const myToken = '7b24d44e7a4b20b9bb61b941429e1acc35b4666d'
  try {
    const answer = await fetch(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${myToken}`);
    const data = await answer.json();
    // console.log(data)
    const { cifrado, numero_casas } = data;
    // export default JSON.stringify(data);
    const decryptNumber = numero_casas * (-1);
    createJson(data, sha1(cifrado, decryptNumber));
    // sha1(cifrado, decryptNumber);
  } catch(e) {
    return (e.message)
  }
};

let createJson = function (data, output) {
  let answer = data;
  answer.decifrado = output;
  const decryptNumber = 10;
  answer.resumo_criptografico = sha1(output, decryptNumber);
  
  console.log(JSON.stringify(answer));

}

getCripto();

var sha1 = function (cifrado, decryptNumber) {
  // Wrap the decryptNumber
  if (decryptNumber < 0) {
    return sha1(cifrado, decryptNumber + 26);
  }

  // Make an output variable
  var output = "";

  // Go through each character
  for (var i = 0; i < cifrado.length; i++) {
    // Get the character we'll be appending
    var c = cifrado[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = cifrado.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + decryptNumber) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + decryptNumber) % 26) + 97);
      }
    }

    // Append
    output += c;
  }

  // All done!
  
  // console.log(output);
  return output;
};
