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
       
        <div class="container">
              @yield('content')
        </div>
    </body>
</html>
