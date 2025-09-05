@echo off
echo 🎥 Otimizando video-intro.mp4...
echo.

REM Verificar se FFmpeg está instalado
ffmpeg -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ FFmpeg não encontrado!
    echo 📥 Baixe em: https://ffmpeg.org/download.html
    echo.
    pause
    exit /b 1
)

echo ✅ FFmpeg encontrado! Iniciando otimização...
echo.

REM Criar backup
echo 💾 Criando backup...
copy "public\video-intro.mp4" "public\video-intro-backup.mp4"

REM Otimizar vídeo
echo 🔧 Otimizando vídeo...
ffmpeg -i "public\video-intro.mp4" -c:v libx264 -crf 28 -preset medium -vf "scale=1280:720" -movflags +faststart -y "public\video-intro-optimized.mp4"

if %errorlevel% equ 0 (
    echo ✅ Otimização concluída!
    echo.
    echo 📊 Tamanhos:
    echo    Original: video-intro.mp4
    echo    Otimizado: video-intro-optimized.mp4
    echo.
    echo 💡 Substitua o arquivo original pelo otimizado
    echo    ren "public\video-intro-optimized.mp4" "public\video-intro.mp4"
) else (
    echo ❌ Erro na otimização!
)

echo.
pause
