<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userAuth;
use App\Models\Users;
use Illuminate\Support\Facades\Validator;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
Route::get('/', function () {
    return view('welcome');
});
*/



Route::get('/', function () {
    return view('index');
});

Route::get('/user', function () {
    return view('userLogin');
});
Route::get('/redirect', function () {
    return view('redirection');
});


Route::get('/admin', function () {
    $select = DB::select('select * from users');
 return view ('adminLogin')->with('name',$select);
    //return view('adminLogin');
});

Route::get('/LogIn', function () {
    
        session()->pull('Password');
        session()->pull('Username');
        session()->pull('IsLogIn');
        session()->pull('Id');
    
    return view('LogIn');
});

Route::get('/LogOut', function () {
    
    
        session()->pull('Password');
        session()->pull('Username');
        session()->pull('IsLogIn');
        session()->pull('Id');
        
    
    return redirect('LogIn');
});
//login
//Route::post("user",[userAuth::class,'userLogin']);
Route::post('userLog', 'App\Http\Controllers\userAuth@userLogin');
Route::view("userLogin","userLogin");


Route::get('/welcome', function () {
    return view('welcome');
});


// Route::resource('/userCrud','./CRUDuser');
// Route::post('userLog', 'App\Http\Controllers\userAuth@userLogin');

//Profile
Route::get('userCrud/profile/{id}', 'App\Http\Controllers\CRUDuser@prof');

//CRUD USER
//Create User
Route::post('userCrud', 'App\Http\Controllers\CRUDuser@store');
//view User
Route::get('userAll', 'App\Http\Controllers\CRUDuser@index');
Route::post('userSingle/{id}', 'App\Http\Controllers\CRUDuser@show');
//Edit User
Route::post('userCrud/update/{id}', 'App\Http\Controllers\CRUDuser@update');

//Delete User
Route::post('userCrud/delete/{id}', 'App\Http\Controllers\CRUDuser@destroy');

//edit Password
Route::post('userCrud/updatePass', 'App\Http\Controllers\CRUDuser@update1');


//CRUD Item
//Create Item
Route::post('itemCrud', 'App\Http\Controllers\CRUDitem@store');
//view Item
Route::get('itemAll', 'App\Http\Controllers\CRUDitem@index');
Route::post('itemSingle/{id}', 'App\Http\Controllers\CRUDitem@show');
//Edit Item
Route::post('itemCrud/update/{id}', 'App\Http\Controllers\CRUDitem@update');
//Delete Item
Route::post('itemCrud/delete/{id}', 'App\Http\Controllers\CRUDitem@destroy');











































//blade Crud
Route::get('/createUsers',function(){
    return view('createUsers');
});
Route::post('/createUsers',function(){
    return ('sss');
    $users = new Users();
    $validator = Validator::make(request()->all(),[
        'name' => 'required' ,
        'username' => 'required',
        'password' => 'required',
        'usertype' => 'required',
        'allow' => 'required'
                                ]);
    if($validator->fails()){
        return response()->json(['responseTExt' => $validator],422);
        return redirect()->back()->withErrors($validator);
    }
    users::Create([
    'Name' => request('name'),
    'Username' => request('username'),
    'Password' => request('password'),
    'UserType' => request('usertype'),
    'Allow' => request('allow')
    ]);
     $select = DB::select('select * from users');
     return view ('adminLogin')->with('name',$select);
        //return view('adminLogin');
});

Route::get('/users/{id}/update', function ($id) {
    $users = users::find($id);
    return view('editUser',['users' => $users]);
});

Route::post('/users/{id}/update', function ($id) {
    $users = new Users();
    $validator = Validator::make(request()->all(),[
        'Id' => 'required',
        'Name' => 'required' ,
        'Username' => 'required',
        'Password' => 'required',
        'UserType' => 'required',
        'Allow' => 'required'
                                ]);
    $users=users::findOrFail($id);
    $Id = request('Id');
     $Name = request('Name');
     $Username = request('Username');
     $Password = request('Password');
     $UserType = request('UserType');
     $Allow = request('Allow');
     $users=DB::update( "update users set
     Name='$Name',
     Username= '$Username',
     Password = '$Password',
     UserType = '$UserType',
     Allow = '$Allow' where id = '$Id';"
     );
     $select = DB::select('select * from users');
     return redirect ('admin')->with('name',$select);
    
});

Route::get('/users/{id}/delete', function ($id) {
    $users = users::find($id);
    return view('deleteUser',['users' => $users]);
});

Route::post('/users/{id}/delete', function ($id) {
    $users = new Users();
    $users=users::findOrFail($id);
    $Id = request('Id');
     $delete=DB::delete( "delete from users where id = '$Id';"
     );
     $select = DB::select('select * from users');
     return redirect ('admin')->with('name',$select);
    
});