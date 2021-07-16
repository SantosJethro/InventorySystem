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
          
        //    $userDet= new
           $Cusername=$username;
           $Cpassword=$password;
        //   return 'success' . $username . $password;
            $IsLogIn='YES';
            $FindUser= DB::select("select * from users where username='$username' and password='$password'");
            
           if ($FindUser) {
            
                 
                // return $userId.' % Name: % ' . $userUN;
                // return $FindUser;
                
                foreach ($FindUser as $found){
                    $userID = $found->Id;
                    $allow = $found->Allow;
                    $userUN = $found->Username;
                    $userP = $found->Password;
                    $userT = $found->UserType;
                   break;
                }
                 session()->put('Username',$username);
                 session()->put('Password',$password);
                 session()->put('IsLogIn',$IsLogIn);
                 session()->put('Id',$userID);
                  return 'ÍD: ' .$userID.' Allow: '.$allow.' Username: '.$userUN.' Password: '.$userP.' Usertype: '.$userT;
                
                // $IsLogIn();
                //  $IsLogIn->session(['IsLogIn' => 'YES']);
                // return $username.'s';
                //$FindUserType= DB::select("select UserType from users where username='$Cusername' and password='$Cpassword'");
                // $userP = DB::table('users')->where('username', $Cusername)->value('Password');
                // $allow = DB::table('users')->where('Password', $userP)->value('Allow');
                // $userT = DB::table('users')->where('Password', $userP)->value('UserType');
               
                if ($allow==1) {
                    if($userT==2){
                        // return 'ÍD: ' .$userID.' Allow: '.$allow.' Username: '.$userUN.' Password: '.$userP.' Usertype: '.$userT;
                        // return redirect('user');
                        // // header('Location: localhost/InventorySystem1/public/admin');
                        // return 'ÍD: ' .$userID.' Allow: '.$allow.' Username: '.$userUN.' Password: '.$userP.' Usertype: '.$userT;
                        return response()->json([
                            'id' => $userID ,
                            'allow' => $allow ,
                            'userUN' => $userUN,
                            'userP' => $userP,
                            'userT' => $userT
                          ],200); 

                        //   return 'ÍD: ' .$userID.' Allow: '.$allow.' Username: '.$userUN.' Password: '.$userP.' Usertype: '.$userT;
                    }elseif($userT==1){
                        return redirect('admin');
                    }
                }elseif($allow>1){
                    return 'REACH YOUR ADMINISTRATOR';
                }
                // $GetUser= DB::select
                

                //  return redirect('userLogin');
           }
        //    return redirect('/login')->with('Message','USERNAME OR PASSSWORD IS INVALID <br/>' ,'Login Failed');
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
