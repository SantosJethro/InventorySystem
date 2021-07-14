@extends('layouts.header')

@section('content')
      <div id="app">
          <script src="{{ asset('js/app.js') }}"></script>
      </div>
    
      <form action="./delete" method="post">
          @csrf 
          <label for="Name">Name</label>
          <input type="text" name="Name" value="{{$users->Name}}" readonly>
          <br>
          <label for="Username">Username</label>
          <input type="text" name="Username" value="{{$users->Username}}" readonly>
          <br>
          <label for="Password">Password</label>
          <input type="text" name="Password" value="{{$users->Password}}" readonly>
          <br>
          <label for="UserType">Usertype</label>
          <input type="text" name="UserType" value="{{$users->UserType}}" readonly>
          <br>
          <label for="Allow">Allow</label>
          <input type="text" name="Allow" value="{{$users->Allow}}" readonly>
          <br>
          <input type="hidden" name="Id" value="{{$users->Id}}">
          <button type="submit" class="btn btn-danger">Delete</button>
      </form>

