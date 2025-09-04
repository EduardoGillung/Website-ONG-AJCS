# 🎥 Script de Otimização de Vídeo para o Site (Windows PowerShell)
# Este script otimiza o vídeo de fundo para reduzir o tamanho

Write-Host "🎥 Iniciando otimização do vídeo..." -ForegroundColor Green

# Verificar se o FFmpeg está instalado
try {
    $ffmpegVersion = ffmpeg -version 2>$null
    if (-not $ffmpegVersion) {
        throw "FFmpeg não encontrado"
    }
} catch {
    Write-Host "❌ FFmpeg não encontrado. Instale o FFmpeg primeiro." -ForegroundColor Red
    Write-Host "📥 Download: https://ffmpeg.org/download.html" -ForegroundColor Yellow
    exit 1
}

# Verificar se o vídeo original existe
if (-not (Test-Path "public/video-background.mp4")) {
    Write-Host "❌ Vídeo original não encontrado em public/video-background.mp4" -ForegroundColor Red
    exit 1
}

# Criar backup
Write-Host "💾 Criando backup do vídeo original..." -ForegroundColor Blue
Copy-Item "public/video-background.mp4" "public/video-background-backup.mp4"

# Otimizar MP4 (qualidade balanceada)
Write-Host "🔧 Otimizando MP4..." -ForegroundColor Blue
ffmpeg -i "public/video-background.mp4" `
    -c:v libx264 `
    -crf 28 `
    -preset medium `
    -c:a aac `
    -b:a 128k `
    -vf "scale=1280:720" `
    -movflags +faststart `
    -y `
    "public/video-background-optimized.mp4"

# Converter para WebM
Write-Host "🔄 Convertendo para WebM..." -ForegroundColor Blue
ffmpeg -i "public/video-background.mp4" `
    -c:v libvpx-vp9 `
    -crf 30 `
    -b:v 0 `
    -c:a libopus `
    -vf "scale=1280:720" `
    -y `
    "public/video-background.webm"

# Substituir o arquivo original
Write-Host "🔄 Substituindo arquivo original..." -ForegroundColor Blue
Move-Item "public/video-background-optimized.mp4" "public/video-background.mp4" -Force

# Mostrar estatísticas
Write-Host "📊 Estatísticas dos arquivos:" -ForegroundColor Green
Write-Host "MP4 otimizado:" -ForegroundColor Yellow
Get-ChildItem "public/video-background.mp4" | Select-Object Name, Length, @{Name="Size(MB)";Expression={[math]::Round($_.Length/1MB,2)}}
Write-Host "WebM:" -ForegroundColor Yellow
Get-ChildItem "public/video-background.webm" | Select-Object Name, Length, @{Name="Size(MB)";Expression={[math]::Round($_.Length/1MB,2)}}
Write-Host "Backup:" -ForegroundColor Yellow
Get-ChildItem "public/video-background-backup.mp4" | Select-Object Name, Length, @{Name="Size(MB)";Expression={[math]::Round($_.Length/1MB,2)}}

Write-Host "✅ Otimização concluída!" -ForegroundColor Green
Write-Host "💡 Dica: Teste o vídeo antes de fazer commit" -ForegroundColor Yellow
