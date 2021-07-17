@extends('layouts.header')

@section('content')
      <div id="app">
        <script src="{{ asset('js/app.js') }}"></script>
      </div>
      <br>
      <div id="Login">
     
    </div>
    {{-- <div class="container">
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
    </div> --}}
    
@endsection
