<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255|min:6',
            'email' => ['required','string','email','max:255','unique:users,email,'.optional($this->user)->id],
            'username' => ['required','string','max:25','alpha_num','unique:users,username,'.optional($this->user)->id],
            'location' => 'required|string|max:255',
        ];
    }
}
