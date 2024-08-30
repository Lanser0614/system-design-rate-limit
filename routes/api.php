<?php

use App\Models\Image;
use App\Models\Order;
use Faker\Factory;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/', function (Request $request) {
    $faker = Factory::create();


    $order = new Order();
    $order->phone = $faker->phoneNumber();
    $order->name = $faker->name();
    $order->address = $faker->address();
    $order->save();

    $files = $request->file('files');

    /** @var UploadedFile $file */
    foreach ($files as $file) {

        $path = Storage::disk('public')->putFile('storage/images', $file);

        $save = new Image();
        $save->path = $path;
        $save->order_id = $order->id;
        $save->save();
    }


    return response()->json(['file_uploaded'], 200);


});
