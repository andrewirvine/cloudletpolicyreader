var EdgeGrid = require('edgegrid');

    var client_token = "",
      client_secret = "",
      access_token = "",
      base_uri = "https://akab-tdxdkscmzbtqpscc-4xanot7bmxg4rphu.luna.akamaiapis.net/";
 

    var eg = new EdgeGrid(client_token, client_secret, access_token, base_uri);
    //var request_body = {"policyManagerRequest":{"command":"getPolicyInfoMapUsingACGIDs","getPolicyInfoMapUsingACGIDs":{}}};
     var request_body = {"policyManagerRequest": {"command": "read","read": {"id": "19895"}}};
    eg.auth({
      "path": "config-edgeredirector-data/api/v1/policymanager?command=getAllPolicyInfoMaps ",
      "method": "POST",
      "headers": {},
      "body": "query=" + encodeURIComponent(JSON.stringify(request_body))
    });
    eg.send(function (data, response) {
      
      response = JSON.parse(data).response;
      update_pol(response);
      //console.log(response);

      // for (var i = response.matchRules.length - 1; i >= 0; i--) {
      //   console.log(JSON.stringify(response.matchRules[i].matches) + response.matchRules[i].redirectURL);
      // };
    });


    // var request_body = {"policyManagerRequest":{"command":"getPolicyInfoMapUsingACGIDs","getPolicyInfoMapUsingACGIDs":{}}};
    // eg.auth({
    //   "path": "config-edgeredirector-data/api/v1/policymanager?command=getAllPolicyInfoMaps ",
    //   "method": "POST",
    //   "headers": {},
    //   "body": "query=" + encodeURIComponent(JSON.stringify(request_body))
    // });
    // eg.send(function (data, response) {
    //   response = JSON.parse(data).response;
    //   for (var i = response.length - 1; i >= 0; i--) {
    //     console.log(response[i].policyId + ' : ' + response[i].id + ' : '  + response[i].policyName);
    //   };
    // });

function update_pol (policy_1){
 var request_body = {"policyManagerRequest":{"command":"update","update":{"overwriteRules":true,"id":19895,"policyId":3198,"createdBy":"andrew.irvine@burberry.com","createDate":1433243351082,"version":2,"immutable":false,"activatedProduction":0,"activatedStaging":0,"activatedTest":0,"description":"add first rule","policyName":"api_update_test","assetId":0,"cloudletId":0,"cloudletConfig":{"id":0,"key":"ER","name":"EDGEREDIRECTOR","featureKey":"edge_redirector","engProduct":"Cloudlets::Edge_Redirector","policyFileNamePrefix":"nimbus_","openAPIContextRoot":"/configure-edgeredirector-data","isInternal":true,"stagingLocation":"tapioca_staging_ump_files","productionLocation":"tapioca_ump_files","logsLocation":null},"policyGroupId":0,"policyDescription":"Policy to allow test of Edge Redirector API","policyCreatedBy":"andrew.irvine@burberry.com","policyLastModifiedBy":"andrew.irvine@burberry.com","policyCreateDate":1433243351082,"policyLastModifiedDate":1433243351082,"matchRules":[{"matchURL":"http://this.com","start":0,"end":0,"type":"erMatchRule","useIncomingQueryString":false,"redirectURL":"http://that2.com","statusCode":"302","id":null}],"saasRules":null}}};
 
 eg.auth({
      "path": "config-edgeredirector-data/api/v1/policymanager/?command=update",
      "method": "POST",
      "headers": {},
      "body": "query=" + encodeURIComponent(JSON.stringify(request_body))
    });
    eg.send(function (data, response) {
      response = JSON.parse(data).response;
      console.log(data);
      // for (var i = response.matchRules.length - 1; i >= 0; i--) {
      //   console.log(JSON.stringify(response.matchRules[i].matches) + response.matchRules[i].redirectURL);
      // };
    });
}

