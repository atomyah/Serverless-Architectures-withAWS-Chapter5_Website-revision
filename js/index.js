AWS.config.region = 'ap-northeast-1'; // Region
AWSCognito.config.region = 'ap-northeast-1'; // Region

var data = { UserPoolId: '', //ユーザープール名：user-identityのプール ID
    ClientId: ''   // アプリクライアントcreate-userのクライアントID
};
var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(data);
var cognitoUser = userPool.getCurrentUser();

if (cognitoUser != null) {
    cognitoUser.getSession(function(err, sessresult) {
        if (sessresult) {
            console.log('You are now logged in.');
            cognitoUser.getUserAttributes(function(err, attrresult) {
                if (err) {
                    alert(err);
                    return;
                }
                $("#username").html("Username: " + cognitoUser.username);

                for (i = 0; i < attrresult.length; i++) {
                    if (attrresult[i].getName()=="email"){
                        $("#email").html("EMail: " + attrresult[i].getValue());
                    }
                }
            });
        } else {
            var url = "login.html";
            $(location).attr("href", url);
        }
    });
} else {
    var url = "login.html";
    $(location).attr("href", url);
}
