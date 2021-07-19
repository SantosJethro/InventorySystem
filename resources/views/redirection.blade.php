@extends('layouts.header')
@section('scripts')
@section('content')


@if ((session('userA')) == 1 )
    @if ((session('userT')) == 1)
    <script>window.location = "./admin";</script>
    @elseif ((session('userT')) == 2)
    <script>window.location = "./user";</script>
    @else
    <script>alert("ERROR USERTYPE DOES NOT EXIST");window.location = "./LogIn"</script>;
    @endif
@elseif ((session('userA')) == 2)
    <script>alert("ERROR PLEASE CONTACT ADMIN");window.location = "./LogIn"</script>;
@endif
    

@endsection
