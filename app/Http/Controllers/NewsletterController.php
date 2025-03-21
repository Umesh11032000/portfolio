<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Newsletter;
use Inertia\Inertia;

class NewsletterController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:newsletters,email',
        ]);

        sleep(2);

        Newsletter::create($validated);

        return back()->with('success', 'Thank you for subscribing to our newsletter!');
    }
}
