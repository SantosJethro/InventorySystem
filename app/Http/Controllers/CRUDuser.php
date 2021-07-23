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
                return response()-> json(["datas" => $select],200);
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

           $exist=DB::select("select username from users where username='$username'");
            if ($exist) {
                return response()->json(["responseText" => "$username already exist","isError" => true],422);
            }else{
                $insertUser=DB::insert("insert into users (Username,Password,Name,UserType,Allow) values (?,?,?,?,?)",[$username,$password,$name,$usertype,$allow]);
                if($insertUser){
                    return response()->json(["Success"],200);
                }else{
                    return response()->json(['responseTExt' => 'ERROR TRY AGAIN'],422);
                }
        }

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
        
        $selectUser = DB::select("select * from users where UserId=$id");
        if($selectUser){
                return response()-> json(["data1User" => $selectUser],200);
        }else{
            return response()->JSON(['ERROR, TRY AGAIN'],422);
        }

    }

    public function prof($id)
    {
        //
        $ids=session('Id');
        $profiles = DB::select("select * from users where UserId=$ids");
 
        if($profiles){
                return response()-> json(["profile" => $profiles],200);
        }else{
            return response()->JSON(['ERROR, TRY AGAIN'],422);
        }

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
        $username= $request->NewUsername;
        $password= $request->NewPassword;
        $name= $request->NewName;
        $allow= $request->NewAllow;
        // return response()->json([$username,$password,$name,$allow,'Id:',$id],200);
            // $updateUser=DB::update("update users (Username,Password,Name,Allow) values (?,?,?,?) where id =$id ", [$username,$password,$name,$allow]);
            $updateUser=DB::update("update users set Username='$username', Password='$password', Name='$name', Allow=$allow where UserId=$id");
            if($updateUser){
                return response()->json(["Success"],200);
            }else{
                return response()->json(['responseTExt' => 'ERROR TRY AGAIN'],422);
            }

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
  
      $deleted = DB::delete("delete from users where UserId=$id");
      if($deleted){
        return response()->json(["Success"],200);
      }
      return response()->json(["ERROR"],422);
       
    }
}
