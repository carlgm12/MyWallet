<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transfer;
use App\Wallet;

class TransferController extends Controller
{
    public function store(Request $request) {
        //primer registro y actualizar money 

        $wallet=Wallet::find($request->wallet_id);
        $wallet->money=$wallet->money + $request->amount;
        $wallet->update();
        //genera nuevo transfer en la db
        $transfer=new Transfer();
        $transfer->description=$request->description;
        $transfer->amount=$request->amount;
        $transfer->wallet_id=$request->wallet_id;
        $transfer->save();
    
        return response()->json($transfer,201);
      //echo "Además recibimos estos datos por formulario: " . implode(', ', $request->all());
    }


}
