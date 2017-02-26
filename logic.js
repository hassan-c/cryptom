$("tr._51mx").bind("DOMSubtreeModified", function() {
     var $span= $('span._5yl5');
    $span.each(function(){
		if ($(this).text().includes('-----BEGIN PGP MESSAGE-----')) {
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
			var privkey = '-----BEGIN PGP PRIVATE KEY BLOCK-----\n'+
			'Version: OpenPGP.js v.1.20130420\n'+
			'Comment: http://openpgpjs.org\n'+
			'\n'+
			'xcA4BFiyiX0BAgCJh6QNNMhXDdD4fWGRvTsmhppH64vu8H3dPHSoRSXyuyKG\n'+
			'q/41ktmD4lwqvYSNM6HwHzhJCEPs7JyT1n5TDNoDABEBAAEAAf42SuXokL3G\n'+
			'IB4u+tBZyGpheyHM4qALY8VMYWFsTF/+wmu6tBd9yYM+BUwCRxBYzb+lDFyG\n'+
			'wMJZEwL24x8W2+wBAQDaGd4JbEiz04cV/UwEfhTs1g7DokUQWPIp0rE+2ro3\n'+
			'4wEAoW2ZDmpJ+o1IptW0cVY5OKLj8+h9xKiBsOAdluvJL2EA/jJPhEiF7vxV\n'+
			'ussRov7nCU6PHeUlBOw1+o0BtJtBfe00UmHNJFRlc3QgTWNUZXN0aW5ndG9u\n'+
			'IDx0ZXN0QGV4YW1wbGUuY29tPsJcBBABCAAQBQJYsol+CRACAspjxod0vQAA\n'+
			's2UB/0c3QEuFTcZI3xO1qm/4ZyySNHV4jgSsPcOB01MFBm35xlzRsrZvqDBV\n'+
			'0N7SSC/I0KpeohCPpQmCdKzwNfveWEY=\n'+
			'=cN/+\n'+
			'-----END PGP PRIVATE KEY BLOCK-----';
                        var text = $(this).text();
			text = text.replace(/Version:/, '\n$&');
			text = text.replace(/Comment:/, '\n$&');
			text = text.replace(/openpgpjs\.org/, '$&\n\n');
			text = text.replace(/[^=]=/, '$&\n');
			text = text.replace(/-----END/, '\n$&');
			options = {
				message: openpgp.message.readArmored(text),     // parse armored message
				publicKeys: openpgp.key.readArmored(pubkey).keys,    // for verification (optional)
				privateKey: openpgp.key.readArmored(privkey).keys[0] // for decryption
			};

			var that = this;
			var a = openpgp.decrypt(options).then(function(plaintext) {
				 $(this).text(plaintext.data);
				// return plaintext.data;
				$(that).text(plaintext.data);
			})
			.catch(function (error) {
				alert('Failed: ' + error);
			});

		}
	});
});


