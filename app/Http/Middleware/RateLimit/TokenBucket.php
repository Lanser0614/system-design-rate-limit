<?php
declare(strict_types=1);

namespace App\Http\Middleware\RateLimit;

use Closure;
use Illuminate\Support\Facades\Cache;

class TokenBucket
{
    public function __construct()
    {
    }

    protected float $rate = 0.1; // скорость пополнения (маркеры в секунду)
    protected int $capacity = 1; // максимальная емкость корзины

    /**
     * @throws \RedisException
     */
    public function handle($request, Closure $next)
    {
        $ip = $request->ip();
        $bucket = $this->getBucket($ip);

        if ($bucket['tokens'] < 1) {
            // Недостаточно маркеров
            return response('Too Many Requests', 429);
        }

        // Уменьшаем количество маркеров на 1
        $this->consumeToken($ip);

        return $next($request);
    }

    /**
     * @throws \RedisException
     */
    protected function getBucket($ip): array
    {
        $key = "bucket:{$ip}";
        $lastTimestamp = Cache::get($key) ?? microtime(true);
        $tokens = Cache::get($key) ?? $this->capacity;

        $currentTime = microtime(true);
        $elapsedTime = $currentTime - $lastTimestamp;

        // Пополняем корзину в зависимости от прошедшего времени
        $newTokens = min($this->capacity, $tokens + $elapsedTime * $this->rate);

        return [
            'tokens' => $newTokens,
            'lastTimestamp' => $currentTime,
        ];
    }

    /**
     * @throws \RedisException
     */
    protected function consumeToken($ip): void
    {
        $key = "bucket:{$ip}";
        $bucket = $this->getBucket($ip);

        Cache::set($key, $bucket['tokens'] - 1);
        Cache::set($key, $bucket['lastTimestamp']);
    }
}
