@extends('layouts.header')

@section('content')


<div id="adminPage">

</div>

<h1>HEllo Page admin</h1>
</div>


<div class="container">
  <a href="./createUsers"><button class="btn btn-primary">CREATE NEW USER</button></a>
    <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Usertype</th>
            <th>Allow</th>
            <th>Created_at</th>
            <th>Updated_at</th>
            <th>action</th>
          </tr>
        </thead>


      <tbody>
@foreach($name as $data)

<tr>
    <td>{{ $data->Name}}</td> 
    <td>{{ $data->Username}}</td>
    <td>{{ $data->Password}}</td>
    <td>{{ $data->UserType}}</td>
    <td>{{ $data->Allow}}</td>
    <td>{{ $data->created_at}}</td>
    <td>{{ $data->updated_at}}</td>
    <td><a href="./users/{{$data->UserId}}/update"><button class="btn btn-warning">Edit</button></a></td>
    <td><a href="./users/{{$data->UserId}}/delete"><button class="btn btn-danger">Delete</button></a></td>
   
</tr>
@endforeach
</tbody>

</table>


@endsection
