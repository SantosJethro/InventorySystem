<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_items', function (Blueprint $table) {
                $table->bigIncrements('Id');
                $table->string('ItemName');
                $table->string('ItemDesc');
                $table->integer('itemQuantity');
                $table->integer('userId');
                $table->String('modifiedBy');
                $table->timestamps();
         });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_items');
    }
}
