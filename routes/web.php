<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/lien-he', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/dich-vu-internet', function () {
    return Inertia::render('Internet');
})->name('internet');

Route::get('/dich-vu-it', function () {
    return Inertia::render('IT');
})->name('it');

Route::get('/camera', function () {
    return Inertia::render('Camera');
})->name('camera');

Route::get('/tin-tuc', function () {
    return Inertia::render('News');
})->name('news');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
