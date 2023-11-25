angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.onrender.com/postagens').
      success(function(data) {
          $scope.publicacoes = data;
      }
  );
});

angular.module('post', []);
angular.module('post').controller('Postagem', function ($scope, $http, $location){
  // var fig = $location.absUrl()
  // var url = fig.split('#')
  console.log('Hello')
  // $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagens').
  //     success(function(data) {
  //         $scope.publicacoes = data;
  //     }
  // );
});
