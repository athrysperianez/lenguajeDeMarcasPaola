const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hola");
});
exports.phoneIsForbidden = functions.database.ref("/messages/{pushId}/text").onCreate(myHandler =>{
    console.log("blocking phone number...");
    var originalData = myHandler.val();
    var forbidden = phoneIsForbbiden(originalData);

    return myHandler.ref.set(forbidden);

});

exports.emojify = functions.database.ref("/messages/(pushId)/text").onCreate(myHandler =>{
/**  console.log("Emojify...");
  var orData = myHandler.data.val();
  var emojiData = emojifyText(orData);

  return myHandler.ref.set(emojiData);**/
});


function emojifyText(text){
  emojifiedText = emojifiedText.replace(/\blol\b/ig, "😂");
  emojifiedText = emojifiedText.replace(/\bcat\b/ig, "😸");
  return emojifiedText;
}

 function tlfMagico(text) {

     var mensajetmp = text;
     var tlfquiza = mensajetmp.substring(mensajetmp.indexOf("6"), mensajetmp.indexOf("6")+9);
     try {
         parseInt(possiblePhonenumber);
         var mensajetmpReplaced = mensajetmp.replace(possiblePhonenumber, "PHONE NUMBER IS FORBIDDEN");
         return mensajetmpReplaced;
     } catch (Exception) {
         return mensajetmp;
     }

 }
