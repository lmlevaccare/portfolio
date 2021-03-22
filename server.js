const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
var cors = require("cors");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/api/v1.0/email/send", function (req, res) {
  let formData= formData
  var data = {
    service_id: "service_m2iyk2m",
    template_id: "template_mubeppm",
    user_id: "user_TBGKrbhyTYR3q1Oa1Ydv2",
    template_params: {
      username: "LAUREN LEVACCARE",
      "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
    },

    // const role = req.body.band;
    data = () => {
      res.json(message);
      console.log("hello");
    }
  };
})






  app.listen(process.env.PORT || PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });

