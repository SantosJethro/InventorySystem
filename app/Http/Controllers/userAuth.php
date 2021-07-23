<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Users;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;


class userAuth extends Controller
{
    function userLogin(Request $req){
        
        
           $username= $req->username;
           $password= $req->password;
          #return $username . $password;
         
            $IsLogIn='NO';
            $userRe="user";
            $FindUser= DB::select("select * from users where username='$username' and password='$password'");
            
           if ($FindUser) {
            
            $IsLogIn='YES';
                // return $userId.' % Name: % ' . $userUN;
                // return $FindUser;
                
                foreach ($FindUser as $found){
                    $userID = $found->UserId;
                    $allow = $found->Allow;
                    $userUN = $found->Username;
                    $userP = $found->Password;
                    $userT = $found->UserType;
                    $Name = $found->Name;
                   break;
                }
                session()->put('Id',$UserId);
                session()->put('Name',$Name);
                 session()->put('Username',$username);
                 session()->put('Password',$password);
                 session()->put('IsLogIn',$IsLogIn);
                 session()->put('userT',$userT);
                 session()->put('userA',$allow);
                 session()->put('Name',$Name);
                 
                return response()->json([
                            'id' => $userID ,
                            'allow' => $allow ,
                            'userUN' => $userUN,
                            'userP' => $userP,
                            'userT' => $userT
                          ],200); 


                        //   return 'ÍD: ' .$userID.' Allow: '.$allow.' Username: '.$userUN.' Password: '.$userP.' Usertype: '.$userT;
                
                // $GetUser= DB::select
                

                //  return redirect('userLogin');
           }
        //    return redirect('/login')->with('Message','USERNAME OR PASSSWORD IS INVALID <br/>' ,'Login Failed');
        return response(json_encode(["message" => "USERNAME OR PASSSWORD IS INVALID"]),200);
        return 'USERNAME OR PASSSWORD IS INVALID';
           
        //    return back()->withInput()->withErrors(['USERNAME OR PASSSWORD IS INVALID']);

        // public function logIn()
        // $logIn = Post::find($Username,$Password)([
        //     'Username' => $request->title,
        //     'Password' => $request->Password
        // ]);
        // if($logIn){
        //     return response()->json(["status" => 200]);
        // }
           
        }
}
