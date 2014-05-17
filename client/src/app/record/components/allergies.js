/*=======================================================================
Copyright 2013 Amida Technology Solutions (http://amida-tech.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
======================================================================*/

angular.module('dre.record.allergies', [])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/record/allergies', {
      templateUrl: 'templates/record/components/allergies.tpl.html',
      controller: 'recordsCtrl'
    });
  }
])

.controller('allergiesCtrl', ['$scope', '$http', '$location', 'recordFunctions',
  function($scope, $http, $location, recordFunctions) {

    $scope.allergies = [];
    $scope.displayAllergies = false;
    $scope.allergyPredicate = "-severity_weight";

    $scope.getRecord = function() {
      $http({
        method: 'GET',
        url: '/api/v1/record/allergies'
      }).
      success(function(data, status, headers, config) {
        $scope.allergies = data.allergies;
        console.log($scope.allergies);
        if ($scope.allergies.length > 0) {
          $scope.displayAllergies = true;
        } else {
          $scope.displayAllergies = false;
        }
      }).
      error(function(data, status, headers, config) {
        console.log('error');
      });
    };

  $scope.getStub = function() {
    $scope.displayAllergies = true;
    $scope.allergies = [
                    {
                              "date": [
                                        {
                                                  "date": "2007-05-01T00:00:00.000Z",
                                                  "precision": "day"
                                        }
                              ],
                              "identifiers": [
                                        {
                                                  "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a66"
                                        }
                              ],
                              "severity": "Moderate to severe",
                              "status": "Inactive",
                              "reaction": [
                                        {
                                                  "severity": "Mild",
                                                  "name": "Nausea",
                                                  "code": "422587007",
                                                  "code_system_name": "SNOMED CT"
                                        }
                              ],
                              "name": "ALLERGENIC EXTRACT, PENICILLIN",
                              "code": "314422",
                              "code_system_name": "RXNORM"
                    },
                    {
                              "date": [
                                        {
                                                  "date": "2006-05-01T00:00:00.000Z",
                                                  "precision": "day"
                                        }
                              ],
                              "identifiers": [
                                        {
                                                  "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a66"
                                        }
                              ],
                              "severity": "Moderate",
                              "status": "Active",
                              "reaction": [
                                        {
                                                  "severity": "Mild",
                                                  "name": "Wheezing",
                                                  "code": "56018004",
                                                  "code_system_name": "SNOMED CT"
                                        }
                              ],
                              "name": "Codeine",
                              "code": "2670",
                              "code_system_name": "RXNORM"
                    },
                    {
                              "date": [
                                        {
                                                  "date": "2008-05-01T00:00:00.000Z",
                                                  "precision": "day"
                                        }
                              ],
                              "identifiers": [
                                        {
                                                  "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a66"
                                        }
                              ],
                              "severity": "Mild to moderate",
                              "status": "Active",
                              "reaction": [
                                        {
                                                  "severity": "Mild to moderate",
                                                  "name": "Hives",
                                                  "code": "247472004",
                                                  "code_system_name": "SNOMED CT"
                                        }
                              ],
                              "name": "Aspirin",
                              "code": "1191",
                              "code_system_name": "RXNORM"
                    }
          ];

  };

  //$scope.getAllergies();
  $scope.getStub();

    for (var i in $scope.allergies) {

      recordFunctions.formatDate($scope.allergies[i].date);

    }


  }
]);