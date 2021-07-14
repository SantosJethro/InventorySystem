@if($errors->any())
<div style="color:red">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error}}</li>
            @endforeach
        </ul>
</div>
@endif
<form action="./createUsers" method="POST">
    @csrf
    <label for="Name">Name</label>
    <input type="text" name="Name">
<br>
    <label for="Username">Username</label>
    <input type="text" name="Username">
    <br>
    <label for="Password">Password</label>
    <input type="text" name="Password">
    <br>
    <label for="UserType">Usertype</label>
    <input type="text" name="UserType">
    <br>
    <label for="Allow">Allow</label>
    <input type="text" name="Allow">
    <br>
    <button>Create</button>
</form>