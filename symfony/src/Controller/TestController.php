<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class TestController
{
    /**
     * @Route(name="test", path="/test")
     */
    public function test(): JsonResponse
    {
        return new JsonResponse(['hello' => 'coco']);
    }
}
