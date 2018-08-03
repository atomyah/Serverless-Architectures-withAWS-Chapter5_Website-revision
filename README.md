第5章のAuth0スクリプトはうごかーん😭

Cognitoを使用するように改造しました。

SPAというわけにはいかず、signup.html -> confirm.html -> login.html -> index.htmlと遷移します。

index.htmlにログインしないで直接行くとlogin.htmlにリダイレクトされます。

この機能があるため、API Gatewayに追加するカスタムオーガナイザーはサボって省略。

JavaScriptは、js/main.jsに認証機能のほとんどが、js/index.jsには認証セッションを確保するスクリプトが入ってます（セッション情報がなければ、login.htmlにリダイレクト）



Hey, Auth0 script of Chapter5 doesn't work.😭

I modified Website to use AWS Cognito.

Starting from signup.html -> confirm.html -> login.html -> index.html.

Redirected to login.html without loging in.(look at js/index.js, redirect script is in it)

js/main.js controlls all of Cognito authorization function.
and js/index.js which is retrieving session information from Cognito.



