'use strict';
var express = require('express');
let app = express();
var port = process.env.PORT || 8000;

var html = require('express-handlebars');

var engines = require('consolidate');
let path = require('path');

app.use('/assets', express.static(__dirname + '/assets'));

app.listen(port, function () {
    console.log('Protoype node server listening on port ' + port);
});

app.get('/', (req,res) => {
    console.log("Hello and welcome to web server prototyping!");
    query();
    res.sendFile(path.join(__dirname,"loginPage.html"));
});
//
  async function query() {
    const {BigQuery} = require('@google-cloud/bigquery');
    const bigquery = new BigQuery();
    const query = `SELECT *
      FROM \`bigquery-public-data.chicago_crime.crime\`
      LIMIT 100`; 

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'US',
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();

    // Print the results
    console.log('Rows:');
    rows.forEach(row => console.log(row));
  }