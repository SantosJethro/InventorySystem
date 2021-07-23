@extends('layouts.header')

@section('content')

@if(session('userT') == 2)
        <div id="userPage">
        </div>
@else
    <script>window.location = "./admin";</script>
@endif

</div>

       {{-- <h1>Hello , {{session('Username')}}, password is , {{session('Password')}},
        You Are ,{{session('IsLogIn')}}, Your Id , {{session('Id')}}, USERTYPE , {{session('userT')}}
       </h1> --}}

    </body>
@endsection
