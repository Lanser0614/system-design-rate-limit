<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;


    public function images(): HasMany
    {
        return $this->hasMany(Image::class, 'order_id', 'id');
    }
}
