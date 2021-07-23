<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Inventory;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class CRUDitem extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $select = DB::select('select * from table_items');
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
            $ItemName=$request->ItemName;
            $ItemDesc=$request->ItemDesc;
            $ItemQuantity=$request->ItemQuantity;
            $userId= session('Id');
            $modifiedBy= session('Name');

        //   return response()->json([$ItemName,$ItemDesc,$ItemQuantity,$userId,$modifiedBy],200);
            $insertUser=DB::insert("insert into table_items (ItemName,ItemDesc,ItemQuantity,UserId,modifiedBy) values (?,?,?,?,?)",[$ItemName,$ItemDesc,$ItemQuantity,$userId,$modifiedBy]);
            if($insertUser){
                    return response()->json(["Success"],200);
            }else{
                return response()->json(['Response Text'],422);
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
        
      
        $selectItem = DB::select("select * from table_items where id=$id");
        if($selectItem){
                return response()-> json(["data1Item" => $selectItem],200);
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
        $ItemName= $request->NewItemName;
        $ItemDesc= $request->NewItemDesc;
        $ItemQuantity= $request->NewItemQuantity;
        $userId= session('Id');
        $modifiedBy= session('Name');
        //  return response()->json([$ItemName,$ItemDesc,$ItemQuantity,$userId,$modifiedBy],200);

            $updateUser=DB::update("update table_items set ItemName='$ItemName', ItemDesc='$ItemDesc', ItemQuantity='$ItemQuantity', userId=$userId,modifiedBy='$modifiedBy' where Id=$id");
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
        $deleted = DB::delete("delete from table_items where id=$id");
        if($deleted){
            return response()->json(["Success"],200);
        }else{
        return response()->json(["ERROR"],422);
        }

    }
}
