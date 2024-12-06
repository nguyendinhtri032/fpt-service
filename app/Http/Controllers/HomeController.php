<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function updateLocale(Request $request)
    {
        $locale = $request->input('locale', config('app.locale'));
        if (!in_array($locale, ['en', 'vi'])) {
            return response()->json(['message' => 'Invalid locale'], 400);
        }

        session(['locale' => $locale]);
        app()->setLocale($locale);

        return response()->json(['locale' => $locale], 200);
    }
}
