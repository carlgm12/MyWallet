<?php

/* namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     
    public function testBasicTest()
    {
        $this->assertTrue(true);
    }
}
 */

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Wallet;
use App\Transfer;

class carteratest extends TestCase
{
    //use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetcartera()
    {
        $wallet=factory(Wallet::class)->create();
         $transfers=factory(Transfer::class, 3)->create([
            'wallet_id'=>$wallet->id
        ]); 

        $response = $this->get('api/wallet');

         $response->assertStatus(200)    
                ->assertJsonStructure([
                    'id','money','transfers'=>[
                        '*'=> [
                            'id','amount','description','wallet_id'
                        ]
                    ]
                ]);
        
       //$this->assertCount(3, $response->json()['transfers']); //validar objeto transfer        

    }
}
