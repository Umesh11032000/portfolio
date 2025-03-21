<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Response;

class BlogController extends Controller
{
    private const CACHE_DURATION = 3600; // 1 hour

    public function getMediumPosts()
    {
        return Cache::remember('medium_posts', self::CACHE_DURATION, function () {
            try {
                $response = Http::get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@umeshp113/');

                if (!$response->successful()) {
                    throw new \Exception('Failed to fetch RSS feed');
                }

                $data = $response->json();

                if ($data['status'] !== 'ok') {
                    throw new \Exception($data['message'] ?? 'Invalid RSS feed');
                }

                // Get only the latest 3 posts
                $latestPosts = array_slice($data['items'], 0, 3);

                $posts = array_map(function ($item) {
                    // Use thumbnail from RSS feed or fallback to default
                    $image = $item['thumbnail'] ?? asset('images/default-blog.svg');

                    // Calculate reading time
                    $wordCount = str_word_count(strip_tags($item['content']));
                    $readingTime = max(1, ceil($wordCount / 200));

                    return [
                        'title' => $item['title'],
                        'link' => $item['link'],
                        'pubDate' => date('M d, Y', strtotime($item['pubDate'])),
                        'description' => strip_tags($item['description']),
                        'image' => $image,
                        'readTime' => "{$readingTime} min read",
                        'categories' => $item['categories'] ?? [],
                        'author' => $item['author'] ?? 'umeshp113'
                    ];
                }, $latestPosts);

                return Response::json([
                    'success' => true,
                    'posts' => $posts
                ]);
            } catch (\Exception $e) {
                return Response::json([
                    'success' => false,
                    'message' => 'Failed to fetch Medium posts',
                    'error' => $e->getMessage()
                ], 500);
            }
        });
    }
}
