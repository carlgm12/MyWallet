<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

 Route::get('/', function () {
    return view('welcome');
});

Route::get('/blog', function () {
    $blogArti=DB::table('blogs')->get();

    return $blogArti;
}); 
 

Route::get('/wallet','WalletController@index');
Route::post('/transfer','TransferController@store');
