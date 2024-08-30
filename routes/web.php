<?php

use App\Http\Middleware\RateLimit\FixedWindowCounter;
use App\Http\Middleware\RateLimit\LeakyBucket;
use App\Http\Middleware\RateLimit\TokenBucket;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', function () {
    return view('welcome');
});

Route::get('/token-bucket', function () {
    return view('welcome');
})->middleware([TokenBucket::class]);

Route::get('/leaky-bucket', function () {
    return view('welcome');
})->middleware([LeakyBucket::class]);

Route::get('/fixed-window-counter', function () {
    return view('welcome');
})->middleware([FixedWindowCounter::class]);
