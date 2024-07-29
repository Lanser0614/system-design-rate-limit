<?php
declare(strict_types=1);

namespace App\Http\Middleware\RateLimit;

use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class FixedWindowCounter
{
    protected int $limit = 100; // максимальное количество запросов
    protected int $interval = 60; // интервал в секундах

    public function handle(Request $request, Closure $next)
    {
        $ip = $request->ip();
        $currentTime = Carbon::now()->timestamp;
        $windowStart = floor($currentTime / $this->interval) * $this->interval;
        $key = "fixed_window_counter:{$ip}:{$windowStart}";

        $currentCount = Redis::get($key);

        if ($currentCount === null) {
            // Если ключ не существует, создаем его и устанавливаем значение
            Redis::set($key, 1, 'EX', $this->interval);
            $currentCount = 1;
        } else {
            // Если ключ существует, увеличиваем значение
            $currentCount = Redis::incr($key);

            if ($currentCount > $this->limit) {
                // Если превышен лимит запросов
                return response('Too Many Requests', 429);
            }
        }

        return $next($request);
    }
}
