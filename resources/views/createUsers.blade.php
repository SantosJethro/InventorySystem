@extends('layouts.header')

@section('content')
      <div id="app">
          <script src="{{ asset('js/app.js') }}"></script>
      </div>

@if($errors->any())
<div style="color:red">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error}}</li>
            @endforeach
        </ul>
</div>
@endif
<br>
    <div class="container">
        <div class="col-3"></div>
        <div class="col-5">

            <div class="card bg-dark text-white">
                <div class="card-body">
                    <form action="./createUsers" method="POST" class="">
                        @csrf
                        <div class="form-group">
                            <label for="Name">Name</label>
                            <input type="text" class="form-control" name="name">
                        </div>
                    <br>
                        <div class="form-group">
                            <label for="Username">Username</label>
                            <input type="text" class="form-control" name="username">
                        </div>
                        <br>
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="text" class="form-control" name="password">
                        </div>
                        <br>
                        <div class="form-group">
                            <label for="UserType">Usertype</label>
                            <input type="text" class="form-control" name="usertype">
                        </div>
                        <br>
                        <div class="form-group">
                            <label for="Allow">Allow</label>
                            <input type="text" class="form-control" name="allow">
                        </div>
                        <br>
                        <button type="submit" class="btn btn-success">Create</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col">
    </div>


@endsection