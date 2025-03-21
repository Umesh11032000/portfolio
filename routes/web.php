<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\NewsletterController;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';
Route::get('/api/medium-posts', [BlogController::class, 'getMediumPosts']);

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/captcha', [ContactController::class, 'captcha'])->name('captcha');
Route::post('/newsletter', [NewsletterController::class, 'store'])->name('newsletter.store');

// require __DIR__.'/auth.php';
