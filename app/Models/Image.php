<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Image extends Model
{
    use HasFactory;


    protected $casts = [
        'path' => 'collection',
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }
}
