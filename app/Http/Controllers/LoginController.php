<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function create(){
        return inertia('Auth/Login');
    }

    public function store(Request $request){

        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        if(Auth::attempt($request->only('email', 'password'), $request->remember)){
            session()->regenerate();
            return to_route('dashboard')->with([
                'type' => 'success',
                'message' => 'You are now logged in.'
            ]);
        }

        throw ValidationException::withMessages([
                'email' => 'The provided credentials are incorrect.',
            ]);
    }

    public function destroy(){
        Auth::logout();
        return to_route('home')->with([
            'type' => 'success',
            'message' => 'You are now logged out.'
        ]);
    }
}
