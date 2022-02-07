var zendesk = require('node-zendesk');

var client = zendesk.createClient({
  username:  'Dylan Shaw',
  token:     'BvRSXDZq4jhGsZavYxJDnKEhuY5buKNPHCEgeMZU',
  remoteUri: 'https://remote.zendesk.com/api/v2'
});

client.users.list(function (err, req, result) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(JSON.stringify(result[0], null, 2, true));//gets the first page
});