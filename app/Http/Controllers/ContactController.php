<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use Inertia\Inertia;
use App\Models\Contact;
use Gregwar\Captcha\CaptchaBuilder;
use App\Rules\CaptchaRule;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'captcha' => ['required', new CaptchaRule]
        ]);

        // Save to database
        Contact::create($validated);

        // Send email
        Mail::to('umeshprajapati1317@gmail.com')->send(new ContactFormMail($validated));

        return back()->with('success', 'Thank you for your message. I will get back to you soon!');
    }

    public function captcha()
    {
        $builder = new CaptchaBuilder;
        $builder->build();
        $phrase = $builder->getPhrase();
        
        $request = request();
        $request->session()->put('captcha', $phrase);
        
        return response($builder->output())->header('Content-Type', 'image/jpeg');
    }
}
