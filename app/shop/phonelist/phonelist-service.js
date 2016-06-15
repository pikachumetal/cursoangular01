<<<<<<< HEAD
angular.module('appPhone').service("PhoneService", function ($http, $q) {
    var getPhones = function getPhones() {
        var deferred = $q.defer();
        $http.get('app/shop/phonelist/data/phones.json')
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (error) {
                deferred.resolve([]);
            });
        return deferred.promise;
    }

    return {
        getPhones: getPhones
    }
=======
phonecatApp.service("PhoneService", function ($http, $q) {
    var getPhones = function getPhones() {
        var deferred = $q.defer();
        $http.get('app/shop/phonelist/data/phones.json')
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (error) {
                deferred.resolve([]);
            });
        return deferred.promise;
    }

    return {
        getPhones: getPhones
    }
>>>>>>> 70465adc07f8abda15b75f39434d74f1a934f4ac
});