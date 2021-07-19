<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Users;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class CRUDuser extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $select = DB::select('select * from users');
        if($select){
                return response()-> json(["data" => $select]);
        }else{
            return response()->JSON(['ERROR, TRY AGAIN'],422);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
           $username= $request->username;
           $password= $request->password;
           $name= $request->name;
           $usertype= $request->usertype;
           $allow= $request->allow;
        //    return response()->json([$usertype,$allow],200);
        
                $insertUser=DB::insert("insert into users (Username,Password,Name,UserType,Allow) values (?,?,?,?,?)",[$username,$password,$name,$usertype,$allow]);
            if($insertUser){
                return response()->json(["Success"],200);
            }else{
                return response()->json(['responseTExt' => 'ERROR TRY AGAIN'],422);
            }

            // $users = new Users();
            // $validator = Validator::make(request()->all(),[
            //     'Name' => 'required' ,
            //     'Username' => 'required',
            //     'Password' => 'required',
            //     'UserType' => 'required',
            //     'Allow' => 'required'
            //                             ]);
            // if($validator->fails()){
            //     return response()->json(['responseTExt' => 'ERROR TRY AGAIN'],422);
            // }
            // users::Create([
            // 'Name' => request('Name'),
            // 'Username' => request('Username'),
            // 'Password' => request('Password'),
            // 'UserType' => request('UserType'),
            // 'Allow' => request('Allow')
            // ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
