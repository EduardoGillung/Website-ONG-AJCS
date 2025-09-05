# 🎯 Script de Otimização REAL - Vídeo e Logo
# Otimiza os arquivos existentes sem substituí-los

Write-Host "🎯 Iniciando otimização dos arquivos existentes..." -ForegroundColor Green

# 1. VERIFICAR ARQUIVOS ATUAIS
Write-Host "📁 Verificando arquivos atuais..." -ForegroundColor Blue

$videoPath = "public/video-intro.mp4"
$logoPath = "src/assets/Logo.png"

if (Test-Path $videoPath) {
    $videoSize = (Get-Item $videoPath).Length / 1MB
    Write-Host "📹 Vídeo encontrado: $videoPath (Tamanho: $([math]::Round($videoSize, 2)) MB)" -ForegroundColor Yellow
} else {
    Write-Host "❌ Vídeo não encontrado: $videoPath" -ForegroundColor Red
}

if (Test-Path $logoPath) {
    $logoSize = (Get-Item $logoPath).Length / 1KB
    Write-Host "🖼️ Logo encontrado: $logoPath (Tamanho: $([math]::Round($logoSize, 2)) KB)" -ForegroundColor Yellow
} else {
    Write-Host "❌ Logo não encontrado: $logoPath" -ForegroundColor Red
}

# 2. CRIAR BACKUP
Write-Host "💾 Criando backups..." -ForegroundColor Blue

if (Test-Path $videoPath) {
    Copy-Item $videoPath "public/video-intro-backup.mp4"
    Write-Host "✅ Backup do vídeo criado" -ForegroundColor Green
}

if (Test-Path $logoPath) {
    Copy-Item $logoPath "src/assets/Logo-backup.png"
    Write-Host "✅ Backup do logo criado" -ForegroundColor Green
}

# 3. INSTRUÇÕES DE OTIMIZAÇÃO
Write-Host "📋 INSTRUÇÕES DE OTIMIZAÇÃO:" -ForegroundColor Cyan
Write-Host "" -ForegroundColor White
Write-Host "🎥 PARA O VÍDEO (video-intro.mp4):" -ForegroundColor Yellow
Write-Host "   - Use FFmpeg para comprimir:" -ForegroundColor White
Write-Host "   - Comando: ffmpeg -i video-intro.mp4 -c:v libx264 -crf 28 -preset medium -vf scale=1280:720 video-intro-optimized.mp4" -ForegroundColor White
Write-Host "   - Meta: reduzir para menos de 10MB" -ForegroundColor White
Write-Host "" -ForegroundColor White
Write-Host "🖼️ PARA O LOGO (Logo.png):" -ForegroundColor Yellow
Write-Host "   - Use https://squoosh.app/ para comprimir" -ForegroundColor White
Write-Host "   - Ou converta para SVG se possível" -ForegroundColor White
Write-Host "   - Meta: reduzir para menos de 100KB" -ForegroundColor White
Write-Host "" -ForegroundColor White

# 4. VERIFICAR FFMPEG
Write-Host "🔧 Verificando FFmpeg..." -ForegroundColor Blue
try {
    $ffmpegVersion = ffmpeg -version 2>$null
    if ($ffmpegVersion) {
        Write-Host "✅ FFmpeg encontrado! Você pode otimizar o vídeo agora." -ForegroundColor Green
        Write-Host "💡 Execute: ffmpeg -i public/video-intro.mp4 -c:v libx264 -crf 28 -preset medium -vf scale=1280:720 public/video-intro-optimized.mp4" -ForegroundColor Cyan
    }
} catch {
    Write-Host "⚠️ FFmpeg não encontrado. Instale em: https://ffmpeg.org/download.html" -ForegroundColor Yellow
}

# 5. ALTERNATIVAS ONLINE
Write-Host "🌐 ALTERNATIVAS ONLINE:" -ForegroundColor Cyan
Write-Host "   - Vídeo: https://www.onlinevideoconverter.com/" -ForegroundColor White
Write-Host "   - Imagem: https://squoosh.app/" -ForegroundColor White
Write-Host "   - Logo: https://convertio.co/png-svg/" -ForegroundColor White

Write-Host "" -ForegroundColor White
Write-Host "✅ Backup criado! Agora otimize os arquivos e substitua os originais." -ForegroundColor Green
Write-Host "🎯 Meta: Vídeo menos de 10MB, Logo menos de 100KB" -ForegroundColor Yellow
