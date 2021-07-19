<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">

        <title>Inventory Systems</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Custom Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        
        <script src="js/app.js" defer></script>
        <script src="{{ asset('js/app.js') }}"></script>
        <style>
            body {
                width:100%;
                height:100%;
              background-color: #B9B49E;
            }
            </style>
        
    </head>
    <body>


      <div id="app">
        <script src="{{ asset('js/app.js') }}"></script>
      </div>
      <br>
      <div id="Login">
     
    </div>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
          <div class="col">
          <div class="card bg-primary text-white">
            <div class="card-body">
            <form action="userLog" method="post">
              @csrf
              <div class="form-group">
                <label for="Username">Username:</label>
                <input type="text" class="form-control" placeholder="Enter Username" name="username">
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" placeholder="Enter password" name="password">
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
              @if($errors->any())
              <div style="center">
                      <ul>
                          @foreach ($errors->all() as $error)
                              <div class="aler alert-danger">{{ $error}}</div>
                          @endforeach
                      </ul>
              </div>
            @endif
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  </body>
  </html>

