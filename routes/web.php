<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BlogController;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
Route::get('/api/medium-posts', [BlogController::class, 'getMediumPosts']);

require __DIR__.'/auth.php';

Route::get('/', function () {
    $data = json_decode(file_get_contents(resource_path('data/portfolio.json')), true);
    return Inertia::render('Home', ['data' => $data]);
})->name('home');

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');

Route::get('/works', function () {
    return Inertia::render('Works');
})->name('works');

Route::get('/resume', function () {
    return Inertia::render('Resume');
})->name('resume');

Route::get('/skills', function () {
    return Inertia::render('Skills');
})->name('skills');

Route::get('/testimonials', function () {
    return Inertia::render('Testimonials');
})->name('testimonials');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/hire-me', function () {
    return Inertia::render('HireMe');
})->name('hire-me');