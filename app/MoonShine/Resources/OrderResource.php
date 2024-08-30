<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Order;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use MoonShine\ActionButtons\ActionButton;
use MoonShine\Enums\JsEvent;
use MoonShine\Exceptions\FieldException;
use MoonShine\Fields\Enum;
use MoonShine\Fields\Phone;
use MoonShine\Fields\Relationships\HasMany;
use MoonShine\Fields\Select;
use MoonShine\Fields\Text;
use MoonShine\Fields\Textarea;
use MoonShine\MoonShineRequest;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Field;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Support\AlpineJs;
use Throwable;

/**
 * @extends ModelResource<Order>
 */
class OrderResource extends ModelResource
{
    protected string $model = Order::class;

    protected string $title = 'Orders';


    /**
     * @return list<MoonShineComponent|Field>
     * @throws FieldException
     */
    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Phone::make('phone')->readonly(),
                Text::make('name')->readonly(),
                Text::make('address')->readonly()->hideOnIndex(),
                Select::make('status')->options([
                    'NEW' => 'Новий',
                    'PROCESSING' => 'В Протсесе',
                    'DELIVERED' => 'Доставлен',
                    'CANCELED' => 'Отменен',
                ])->native(),
                Textarea::make('description')->hideOnIndex(),
                HasMany::make('Images', 'images', resource: new ImageResource())->hideOnIndex()
            ]),
        ];
    }

    /**
     * @param Order $item
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
        return ['view', 'update'];
    }


    /**
     * @throws Throwable
     */
    public function indexButtons(): array
    {
        return [
            ActionButton::make('Send to partner')
                ->method('sendToTelegram')
                ->primary()
                ->icon('heroicons.outline.paper-airplane'),
        ];
    }


    /**
     * @throws Throwable
     */
    public function detailButtons(): array
    {
        return [
            ActionButton::make('Send to partner')
                ->method('sendToTelegram')
                ->primary()
                ->icon('heroicons.outline.paper-airplane'),
        ];
    }



    public function sendToTelegram(MoonShineRequest $request): RedirectResponse
    {

        Log::info($request->getResource()->getItem()->toArray());
        // $request->getResource();
        // $request->getResource()->getItem();
        // $request->getPage();


        return back();
    }

    public function filters(): array
    {
        return [
            Select::make('status')->options([
                'NEW' => 'Новий',
                'PROCESSING' => 'В Протсесе',
                'DELIVERED' => 'Доставлен',
                'CANCELED' => 'Отменен',
            ])->native(),
            Phone::make('phone'),
            Text::make('name'),
            Text::make('address'),
            ];
    }
}
