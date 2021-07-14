{{-- @extends('layouts.header')

@section('content')
      <div id="app">
          <script src="{{ asset('js/app.js') }}"></script>
      </div> --}}
    
      <form action="./update" method="post">
          @csrf 
          <label for="Name">Name</label>
          <input type="text" name="Name" value="{{$users->Name}}">
          <br>
          <label for="Username">Username</label>
          <input type="text" name="Username" value="{{$users->Username}}">
          <br>
          <label for="Password">Password</label>
          <input type="text" name="Password" value="{{$users->Password}}">
          <br>
          <label for="UserType">Usertype</label>
          <input type="text" name="UserType" value="{{$users->UserType}}">
          <br>
          <label for="Allow">Allow</label>
          <input type="text" name="Allow" value="{{$users->Allow}}">
          <br>
          <input type="hidden" name="Id" value="{{$users->Id}}">
          <button type="submit" class="btn btn-warning">Edit</button>
      </form>
{{-- @endsection --}}
