<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Transfer;
use App\Wallet;

class TransferTest extends TestCase
{
    //use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testPostTransfer()
    {
        //valores de prueba
        $wallet=factory(Wallet::class)->create();
        $transfer=factory(Transfer::class)->make();
        //cargar valores al json
        $response = $this->json('POST','/api/transfer', [
            'description'=>$transfer->description,
            'amount'=>$transfer->amount,
            'wallet_id'=>$wallet->id
        ]);
        //validar estructura json con status 201
        $response->assertJsonStructure([
            'id','description','amount','wallet_id'
        ])->assertStatus(201);
        //validar que tenga datos transfer
        $this->assertDatabaseHas('transfers',[
            'description'=>$transfer->description,
            'amount'=>$transfer->amount,
            'wallet_id'=>$wallet->id
        ]);    
        //validar que tenga datos wallet
        $this->assertDatabaseHas('wallets',[
            'id'=>$wallet->id,
            'money'=>$wallet->money + $transfer->amount
        ]);  

    }
}
