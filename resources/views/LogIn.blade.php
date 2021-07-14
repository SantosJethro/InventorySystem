@extends('layouts.header')

@section('content')
      <div id="app">
          <script src="{{ asset('js/app.js') }}"></script>
      </div>
      <br>
  
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
          <div class="col">
          <div class="card bg-primary text-white">
            <div class="card-body">
            <form action="./loginProcess" method="GET">
              <div class="form-group">
                <label for="Username">Username:</label>
                <input type="text" class="form-control" placeholder="Enter Username" name="Username">
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" placeholder="Enter password" name="Password">
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
@endsection
