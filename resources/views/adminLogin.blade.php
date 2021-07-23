@extends('layouts.header')

@section('content')

@if(session('userT') == 1)
        <div id="adminPage">
        </div>
@else
    <script>window.location = "./user";</script>
@endif

</div>


@endsection
