var firebaseConfig = {
    apiKey: "AIzaSyACg2UFu9DkSWqhFBExwUqAZXJceHDuC2I",
    authDomain: "ffmms-1de74.firebaseapp.com",
    databaseURL: "https://ffmms-1de74.firebaseio.com",
    projectId: "ffmms-1de74",
    storageBucket: "ffmms-1de74.appspot.com",
    messagingSenderId: "987002586400",
    appId: "1:987002586400:web:199131864a00f5e2128345",
    measurementId: "G-RSDK7F3CWV"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL;
  
  $("#login").click(function()
  {
    var email =  $("#email").val();
    var psw = $("#psw").val();

    if(email != "" && psw != "")
    {
        var result = firebase.auth().signInWithEmailAndPassword(email, psw);

        result.catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : " + errorMessage);
        });
    }else
    {
        window.alert("Form is incomplete. Please fill out all fields");
    }
  });

  $("#signup").click(function()
  {
    var fullname = $("#fname").val(); 
    var email =  $("#email").val();
    var psw = $("#psw").val();
    var conpsw = $("#conpsw").val();

    if(fullname != "" && email != "" && psw != "" && conpsw != "")
    {
        if(psw == conpsw){
            var result = firebase.auth().createUserWithEmailAndPassword(email, psw); 

        result.catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : " + errorMessage);
        });
        }
        else{
            window.alert("Password do not match")
        }
    }else
    {
        window.alert("Form is incomplete. Please fill out all fields");
    }
  });

  $("#reset").click(function(){
    var auth = firebase.auth();
    var email = $("#email").val();

    if(email != ""){
        auth.sendPasswordResetEmail(email).then(function()
        {
             window.alert("Email has been sent to you. Please check and verify");
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : " + errorMessage);
        });
    }
    else{
        window.alert("Please enter your email");
    }
  });
