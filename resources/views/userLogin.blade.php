@extends('layouts.header')

@section('content')
<div id="app">
    <script src="{{ asset('js/app.js') }}"></script>
</div>
       <h1>Hello , {{session('Username')}}, password is , {{session('Password')}},
        You Are ,{{session('IsLogIn')}}, Your Id , {{session('Id')}}, USERTYPE , {{session('userT')}}
       </h1>

    </body>
@endsection
