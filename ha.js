function encryptWithTimestamp(key, password) {
    return new Promise(function (resolve, reject) {
        try {
            var timestamp = Math.floor(Date.now() / 1000);
            var ua = navigator.userAgent;
            var data = key + '|' + ua + '|' + timestamp;
            var encrypted = '';

            for (var i = 0; i < data.length; i++) {
                encrypted += String.fromCharCode(data.charCodeAt(i) ^ password.charCodeAt(i % password.length));
            }

            resolve(btoa(btoa(encrypted) + "1"));
        } catch (error) {
            reject(error);
        }
    });
}

function enc(s) {
    try {
        var hex = '';
        for (var i = 0; i < s.length; i++) {
            var charCode = s.charCodeAt(i).toString(16);
            hex += (i % 2 === 0 ? charCode.toUpperCase() : charCode.toLowerCase());
        }
        return hex;
    } catch (error) {
        console.error('Error in enc:', error);
        return '';
    }
}

setTimeout(function () {
    if (window.kdc && window.cdk) {
        if (window.cdk === enc(window.location.hostname)) {
            encryptWithTimestamp(window.kdc, "CDFIREWALL")
                .then(function (hash) {
                    document.cookie = '_H2_Verified=' + hash.split('').reverse().join('') + '; SameSite=Lax; path=/; Secure';
                    location.href = location.href;
                })
                .catch(function (error) {
                    console.error('Error:', error);
                });
        }
    }
    location.href = "https://example.com/";
}, 0);
