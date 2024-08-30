<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use App\Models\Image;
use App\Models\Order;
use Illuminate\Database\Eloquent\Model;

use MoonShine\Fields\Preview;
use MoonShine\Fields\Relationships\BelongsTo;
use MoonShine\Fields\Text;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Field;
use MoonShine\Components\MoonShineComponent;

/**
 * @extends ModelResource<Image>
 */
class ImageResource extends ModelResource
{
    protected string $model = Image::class;

    protected string $title = 'Images';

    /**
     * @return list<MoonShineComponent|Field>
     */
    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable()->hideOnIndex(),
                Text::make('Номер клиента', 'order.phone')->readonly(),
                Text::make('Имя клиента', 'order.name')->readonly(),
                Text::make('Адресс клиента', 'order.address')->readonly(),
                BelongsTo::make('Order', 'order', function (Order $item) {
                   return "Name: " . $item->name . PHP_EOL . " Phone: " . $item->phone;
                }, new OrderResource())->disabled(),
                \MoonShine\Fields\Image::make('Thumbnail', 'path')
                    ->multiple()
                    ->removable()
                    ->disk('public'),
            ]),
        ];
    }

    /**
     * @param Image $item
     *
     * @return array<string, string[]|string>
     * @see https://laravel.com/docs/validation#available-validation-rules
     */
    public function rules(Model $item): array
    {
        return [];
    }


    public function getActiveActions(): array
    {
        return ['view', 'update', 'create'];
    }
}
