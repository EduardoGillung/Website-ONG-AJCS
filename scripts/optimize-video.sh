#!/bin/bash

# 🎥 Script de Otimização de Vídeo para o Site
# Este script otimiza o vídeo de fundo para reduzir o tamanho

echo "🎥 Iniciando otimização do vídeo..."

# Verificar se o FFmpeg está instalado
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg não encontrado. Instale o FFmpeg primeiro."
    echo "📥 Download: https://ffmpeg.org/download.html"
    exit 1
fi

# Verificar se o vídeo original existe
if [ ! -f "public/video-background.mp4" ]; then
    echo "❌ Vídeo original não encontrado em public/video-background.mp4"
    exit 1
fi

# Criar backup
echo "💾 Criando backup do vídeo original..."
cp "public/video-background.mp4" "public/video-background-backup.mp4"

# Otimizar MP4 (qualidade balanceada)
echo "🔧 Otimizando MP4..."
ffmpeg -i "public/video-background.mp4" \
    -c:v libx264 \
    -crf 28 \
    -preset medium \
    -c:a aac \
    -b:a 128k \
    -vf "scale=1280:720" \
    -movflags +faststart \
    -y \
    "public/video-background-optimized.mp4"

# Converter para WebM
echo "🔄 Convertendo para WebM..."
ffmpeg -i "public/video-background.mp4" \
    -c:v libvpx-vp9 \
    -crf 30 \
    -b:v 0 \
    -c:a libopus \
    -vf "scale=1280:720" \
    -y \
    "public/video-background.webm"

# Substituir o arquivo original
echo "🔄 Substituindo arquivo original..."
mv "public/video-background-optimized.mp4" "public/video-background.mp4"

# Mostrar estatísticas
echo "📊 Estatísticas dos arquivos:"
echo "MP4 otimizado:"
ls -lh "public/video-background.mp4"
echo "WebM:"
ls -lh "public/video-background.webm"
echo "Backup:"
ls -lh "public/video-background-backup.mp4"

echo "✅ Otimização concluída!"
echo "💡 Dica: Teste o vídeo antes de fazer commit"
