// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by nb-admin.js.
import { name as packageName } from "meteor/genroa:nb-admin";

// Write your tests here!
// Here is an example.
Tinytest.add('nb-admin - example', function (test) {
  test.equal(packageName, "nb-admin");
});
