var AWS = require('aws-sdk');
var sts = new AWS.STS();
sts.getCallerIdentity({}, function(err, data) {
   if (err) {
      console.log("Error", err);
   } else {
      console.log(JSON.stringify(data.Account));
   }
});
