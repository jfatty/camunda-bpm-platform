"use strict";

define(["angular"], function(angular) {

  var module = angular.module("tasklist.pages");

  var Controller = function($scope, $location, EngineApi) {

    $scope.taskList = {};

    function loadTasks(filter, search) {
      $scope.taskList.tasks = EngineApi.getTasklist();

      /*$scope.taskList.tasks = allTasks[filter + (search ? "-" + search : "")];
      $scope.taskList.view = { filter: filter, search: search };
      $scope.taskList.selection = [];*/
    }

    $scope.$watch(function() { return $location.search(); }, function(newValue) {
      loadTasks(newValue.filter || "mytasks", newValue.search);
    });

    $scope.startTask = function(task) {

    };

    $scope.claimTask = function(task) {

    };

    $scope.delegateTask = function(task) {

    };

    $scope.isSelected = function(task) {
      return $scope.taskList.selection.indexOf(task) != -1;
    };

    $scope.selectAllTasks = function(task) {
      return $scope.taskList.selection.indexOf(task) != -1;
    };

    $scope.deselectAllTasks = function(task) {
      return $scope.taskList.selection = [];
    };

    $scope.taskList = {
      tasks: [],
      selection: []
    };
  };

  Controller.$inject = ["$scope", "$location", "EngineApi"];

  var RouteConfig = function($routeProvider) {
    $routeProvider.when("/overview", {
      templateUrl: "pages/overview.html",
      controller: Controller
    });
  };

  RouteConfig.$inject = [ "$routeProvider"];

  module
    .config(RouteConfig)
    .controller("OverviewController", Controller);
});