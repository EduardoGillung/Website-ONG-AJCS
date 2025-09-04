# 🚀 Script de Otimização REAL do Site ONG
# Este script resolve os problemas de peso e performance

Write-Host "🚀 Iniciando otimização REAL do site..." -ForegroundColor Green

# 1. REMOVER VÍDEOS PESADOS
Write-Host "🗑️ Removendo vídeos pesados..." -ForegroundColor Red
$videoFiles = @(
    "public/video-background.mp4",
    "public/video-intro.mp4",
    "public/video-background.webm",
    "public/video-intro.webm"
)

foreach ($video in $videoFiles) {
    if (Test-Path $video) {
        $size = (Get-Item $video).Length / 1MB
        Write-Host "❌ Removendo: $video (Tamanho: $([math]::Round($size, 2)) MB)" -ForegroundColor Yellow
        Remove-Item $video -Force
    }
}

# 2. OTIMIZAR IMAGENS EXISTENTES
Write-Host "🖼️ Otimizando imagens..." -ForegroundColor Blue

# Verificar se o ImageOptim CLI está disponível (alternativa ao FFmpeg)
if (Test-Path "C:\Program Files\ImageOptim\ImageOptim.exe") {
    Write-Host "✅ ImageOptim encontrado - otimizando imagens..." -ForegroundColor Green
    & "C:\Program Files\ImageOptim\ImageOptim.exe" "src/assets/*.png" "src/assets/*.jpg" "public/*.png" "public/*.jpg"
} else {
    Write-Host "⚠️ ImageOptim não encontrado - usando alternativas..." -ForegroundColor Yellow
    
    # Alternativa: mover imagens pesadas para backup
    $heavyImages = @(
        "src/assets/Logo.png"
    )
    
    foreach ($img in $heavyImages) {
        if (Test-Path $img) {
            $size = (Get-Item $img).Length / 1KB
            if ($size -gt 100) { # > 100KB
                Write-Host "📁 Movendo imagem pesada para backup: $img" -ForegroundColor Yellow
                $backupPath = $img.Replace("src/assets/", "backup/")
                New-Item -ItemType Directory -Force -Path (Split-Path $backupPath)
                Move-Item $img $backupPath
            }
        }
    }
}

# 3. CRIAR ARQUIVOS LEVES
Write-Host "📝 Criando arquivos leves..." -ForegroundColor Blue

# Criar imagem de fundo leve
$introBackground = @"
<!-- Imagem de fundo otimizada -->
<!-- Substitua por uma imagem JPG/WebP de 1920x1080 -->
<!-- Tamanho máximo: 500KB -->
<!-- Use: https://squoosh.app/ para compressão -->
"@
Set-Content "public/intro-background.jpg" $introBackground

# 4. LIMPAR ARQUIVOS DESNECESSÁRIOS
Write-Host "🧹 Limpando arquivos desnecessários..." -ForegroundColor Blue

$unnecessaryFiles = @(
    "public/vite.svg",
    "src/assets/react.svg",
    "TEMPLATE_INSTRUCTIONS.md",
    "VIDEO_OPTIMIZATION.md",
    "README_VIDEO_OPTIMIZATION.md"
)

foreach ($file in $unnecessaryFiles) {
    if (Test-Path $file) {
        Write-Host "🗑️ Removendo: $file" -ForegroundColor Yellow
        Remove-Item $file -Force
    }
}

# 5. VERIFICAR TAMANHO TOTAL
Write-Host "📊 Verificando tamanho total do projeto..." -ForegroundColor Green

$totalSize = 0
Get-ChildItem -Recurse -File | ForEach-Object {
    $totalSize += $_.Length
}

$totalSizeMB = [math]::Round($totalSize / 1MB, 2)
Write-Host "📁 Tamanho total do projeto: $totalSizeMB MB" -ForegroundColor Green

if ($totalSizeMB -gt 50) {
    Write-Host "⚠️ Projeto ainda está pesado ($totalSizeMB MB)" -ForegroundColor Yellow
    Write-Host "💡 Recomendações:" -ForegroundColor Cyan
    Write-Host "   - Comprima imagens com https://squoosh.app/" -ForegroundColor White
    Write-Host "   - Use formatos WebP quando possível" -ForegroundColor White
    Write-Host "   - Remova arquivos não utilizados" -ForegroundColor White
} else {
    Write-Host "✅ Projeto otimizado! Tamanho: $totalSizeMB MB" -ForegroundColor Green
}

# 6. CRIAR .gitignore OTIMIZADO
Write-Host "📝 Atualizando .gitignore..." -ForegroundColor Blue

$gitignoreContent = @"
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
dist-ssr/
*.local

# Editor files
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# OS files
.DS_Store
Thumbs.db

# Large media files
*.mp4
*.avi
*.mov
*.mkv
*.wmv
*.flv
*.webm

# Backup files
*-backup.*
*-original.*
backup/

# Keep only optimized files
!public/intro-background.jpg
!src/assets/Logo-optimized.svg
"@

Set-Content ".gitignore" $gitignoreContent

Write-Host "✅ Otimização REAL concluída!" -ForegroundColor Green
Write-Host "🎯 Próximos passos:" -ForegroundColor Cyan
Write-Host "   1. Substitua intro-background.jpg por uma imagem real (< 500KB)" -ForegroundColor White
Write-Host "   2. Substitua Logo-optimized.svg pelo seu logo real em SVG" -ForegroundColor White
Write-Host "   3. Teste o site: npm run dev" -ForegroundColor White
Write-Host "   4. Faça commit: git add . && git commit -m 'Site otimizado'" -ForegroundColor White
Write-Host "   5. Push: git push origin main" -ForegroundColor White
