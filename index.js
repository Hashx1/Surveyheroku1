  const express=require("express");
  const app=express();
  const passport=reqpire("passport");
  const GoogleStrategy=require('Passport-google-oauth20').Strategy;
  const keys=require('./Config/keys');

  passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
  },(accesToken)=>{
    console.log(accessToken);
  }
  ));

  const PORT=process.env.PORT|| 5000;
  app.listen(PORT);