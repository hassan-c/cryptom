$(document).ready(function(){
    $('#btn_submit').click(function(e){
        e.preventDefault();

        var input = $('#input').val();

var options, encrypted;
var pubkey = '-----BEGIN PGP PUBLIC KEY BLOCK-----\n'+
                        'Version: OpenPGP.js v.1.20130420' +
                        'Comment: http://openpgpjs.org\n'+
                        '\n'+
                        'xk0EWLKJfQECAImHpA00yFcN0Ph9YZG9OyaGmkfri+7wfd08dKhFJfK7Ioar\n'+
                        '/jWS2YPiXCq9hI0zofAfOEkIQ+zsnJPWflMM2gMAEQEAAc0kVGVzdCBNY1Rl\n'+
                        'c3Rpbmd0b24gPHRlc3RAZXhhbXBsZS5jb20+wlwEEAEIABAFAliyiX4JEAIC\n'+
                        'ymPGh3S9AACzZQH/RzdAS4VNxkjfE7Wqb/hnLJI0dXiOBKw9w4HTUwUGbfnG\n'+
                        'XNGytm+oMFXQ3tJIL8jQql6iEI+lCYJ0rPA1+95YRg==\n'+
                        '=WSPT\n'+
                        '-----END PGP PUBLIC KEY BLOCK-----';


options = {
    data: input,                             // input as String (or Uint8Array)
    publicKeys: openpgp.key.readArmored(pubkey).keys,  // for encryption
};

openpgp.encrypt(options).then(function(ciphertext) {
    encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
});


  
            $('#result').text(encrypted);

        ;
    });
 });
