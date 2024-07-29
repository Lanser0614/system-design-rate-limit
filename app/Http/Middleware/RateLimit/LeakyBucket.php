<?php
declare(strict_types=1);

namespace App\Http\Middleware\RateLimit;

use Carbon\Carbon;
use Closure;
use Illuminate\Support\Facades\Redis;

class LeakyBucket
{
    protected $capacity = 5; // максимальная емкость ведра
    protected $leakRate = 1;  // скорость утечки (запросов в секунду)

    public function handle($request, Closure $next)
    {
        $ip = $request->ip();
        $bucketKey = "leaky_bucket:{$ip}";

        // Получаем текущее состояние ведра из Redis
        $bucket = Redis::hgetall($bucketKey);

        if (!$bucket) {
            // Если ведро не существует, создаем его
            Redis::hmset($bucketKey, [
                'count' => 0,
                'last_request' => Carbon::now()->timestamp
            ]);
            $bucket = Redis::hgetall($bucketKey);
        }

        $currentTime = Carbon::now()->timestamp;
        $elapsedTime = $currentTime - $bucket['last_request'];

        // Вычисляем количество утекших запросов
        $leakedRequests = floor($elapsedTime * $this->leakRate);

        // Обновляем количество запросов в ведре
        $newCount = max(0, $bucket['count'] - $leakedRequests);

        if ($newCount >= $this->capacity) {
            // Ведро переполнено
            return response('Too Many Requests', 429);
        }

        // Добавляем запрос в ведро
        Redis::hmset($bucketKey, [
            'count' => $newCount + 1,
            'last_request' => $currentTime
        ]);

        return $next($request);
    }
}
