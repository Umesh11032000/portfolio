<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Request;

class CaptchaRule implements Rule
{
    public function passes($attribute, $value)
    {
        return $value === Request::session()->get('captcha');
    }

    public function message()
    {
        return 'The captcha is invalid.';
    }
}
