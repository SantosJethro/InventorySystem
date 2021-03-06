<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Inventory System</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

    <!-- Custom Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body>
    
    <div id="app">
        <script src="{{ asset('js/app.js') }}"></script>
    </div>
    {{-- <div id="displayU">
        <script src="{{ asset('js/app.js') }}"></script>
    </div> --}}
    {{-- <div id="CreateItem">
        <script src="{{ asset('js/app.js') }}"></script>
    </div> --}}
    {{-- <div id="Profile">
        <script src="{{ asset('js/app.js') }}"></script>
    </div> --}}
    {{-- <div id="RecipeReviewCard">
        <script src="{{ asset('js/app.js') }}"></script>
    </div> --}}
    
</body>

</html>