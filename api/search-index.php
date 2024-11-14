<?php
header('Content-Type: application/json');
error_reporting(E_ALL);
ini_set('display_errors', 1);

function scanDirectory($dir, &$results) {
    if (!is_dir($dir)) {
        throw new Exception("Directory not found: $dir");
    }

    $files = scandir($dir);
    
    foreach ($files as $file) {
        if ($file === '.' || $file === '..') continue;
        
        $path = $dir . DIRECTORY_SEPARATOR . $file;
        
        if (is_dir($path)) {
            scanDirectory($path, $results);
        } else if (pathinfo($file, PATHINFO_EXTENSION) === 'php') {
            // Получаем содержимое файла
            $content = file_get_contents($path);
            
            // Извлекаем только текстовое содержимое между тегами
            $content = strip_tags($content);
            
            // Получаем относительный путь
            $relativePath = str_replace([$_SERVER['DOCUMENT_ROOT'], '\\'], ['', '/'], 
                substr($path, strpos($path, 'docs')));
            
            // Убедимся, что путь начинается с одного /docs/
            $relativePath = '/docs/' . ltrim(str_replace('/docs/', '', $relativePath), '/');
            
            // Получаем заголовок из первого тега h1 или имени файла
            preg_match('/<h1[^>]*>(.*?)<\/h1>/i', file_get_contents($path), $matches);
            $title = isset($matches[1]) ? $matches[1] : pathinfo($file, PATHINFO_FILENAME);
            
            $results[] = [
                'title' => $title,
                'content' => $content,
                'path' => $relativePath,
                'url' => $relativePath
            ];
        }
    }
}

try {
    $searchIndex = [];
    // Используем абсолютный путть к директо рии docs
    $docsPath = realpath(__DIR__ . '/../docs');
    
    if (!$docsPath) {
        throw new Exception("Cannot resolve docs directory path");
    }
    
    if (!is_dir($docsPath)) {
        throw new Exception("Docs directory not found at: $docsPath");
    }
    
    scanDirectory($docsPath, $searchIndex);
    
    if (empty($searchIndex)) {
        throw new Exception("No documents found in $docsPath");
    }
    
    echo json_encode($searchIndex, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => $e->getMessage(),
        'path' => $docsPath ?? 'undefined',
        'root' => $_SERVER['DOCUMENT_ROOT']
    ]);
} 