/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @param {*} divisions
 * @param {*} $scope
 * @param {*} $state
 * @param {import("../../../service/utils/LocationUtils")} locationUtils
 */
var TableDivisionsController = function(divisions, $scope, $state, locationUtils) {

    $scope.divisions = divisions;

    $scope.editDivision = function(id) {
        locationUtils.navigateToPath('/divisions/' + id);
    };

    $scope.createDivision = function() {
        locationUtils.navigateToPath('/divisions/new');
    };

    $scope.refresh = function() {
        $state.reload(); // reloads all the resolves for the view
    };

    angular.element(document).ready(function () {
        $('#divisionsTable').dataTable({
            "aLengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]],
            "iDisplayLength": 25,
            "aaSorting": []
        });
    });

};

TableDivisionsController.$inject = ['divisions', '$scope', '$state', 'locationUtils'];
module.exports = TableDivisionsController;
