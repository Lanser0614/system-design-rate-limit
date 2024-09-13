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


Route::post('/new-order', function (Request $request) {
    $order = new Order();
    $order->phone = $request->phone;
    $order->name = $request->name;
    $order->address = $request->address;
    $order->save();

    // Get the base64 string from the request
    $base64Image = $request->input('image');

    // Strip out the base64 header (optional, but usually necessary)
    $imageData = explode(',', $base64Image)[1];  // Removes the 'data:image/png;base64,' part

    // Decode the base64 string into binary data
    $imageData = base64_decode($imageData);

    // Generate a unique file name for the PNG
    $fileName = $order->id . '_' . $order->created_at->timestamp . '_' . time() . '.png';

    // Save the binary image data as a .png file in the 'public' directory or 'storage/app/public'
    Storage::put('public/' . $fileName, $imageData);

    $save = new Image();
    $save->path = $fileName;
    $save->order_id = $order->id;
    $save->save();

    return response()->json(['result' => 'success']);
});
