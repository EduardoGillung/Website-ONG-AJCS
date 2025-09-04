# 🎥 Guia de Otimização de Vídeo para o Site

## 📊 **Status Atual**
- **Arquivo**: `public/video-background.mp4`
- **Tamanho**: Muito grande para commit
- **Formato**: MP4 (não otimizado)

## 🎯 **Objetivos de Otimização**
- [ ] Reduzir tamanho para < 5MB
- [ ] Manter qualidade visual aceitável
- [ ] Otimizar para web
- [ ] Adicionar formato WebM como fallback

## 🛠️ **Ferramentas Recomendadas**

### **1. FFmpeg (Gratuito)**
```bash
# Comprimir MP4
ffmpeg -i video-background.mp4 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k -movflags +faststart video-optimized.mp4

# Converter para WebM
ffmpeg -i video-background.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus video-background.webm
```

### **2. HandBrake (Interface Gráfica)**
- **Video Codec**: H.264
- **Quality**: RF 28-30
- **Audio**: AAC 128k
- **Optimize**: Web

### **3. Online (Alternativa)**
- **CloudConvert.com**
- **Convertio.co**
- **OnlineVideoConverter.com**

## 📱 **Especificações Recomendadas**

### **Para Desktop**
- **Resolução**: 1920x1080 ou 1280x720
- **Bitrate**: 1-2 Mbps
- **Codec**: H.264
- **FPS**: 24-30

### **Para Mobile**
- **Resolução**: 1280x720
- **Bitrate**: 500k-1Mbps
- **Codec**: H.264
- **FPS**: 24

## 🔧 **Comandos FFmpeg Específicos**

### **Compressão Agressiva (Qualidade Baixa, Tamanho Mínimo)**
```bash
ffmpeg -i video-background.mp4 -c:v libx264 -crf 32 -preset slow -c:a aac -b:a 96k -vf "scale=1280:720" -movflags +faststart video-compressed.mp4
```

### **Compressão Balanceada (Qualidade Média, Tamanho Moderado)**
```bash
ffmpeg -i video-background.mp4 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k -vf "scale=1280:720" -movflags +faststart video-balanced.mp4
```

### **Compressão Suave (Qualidade Alta, Tamanho Maior)**
```bash
ffmpeg -i video-background.mp4 -c:v libx264 -crf 24 -preset fast -c:a aac -b:a 160k -vf "scale=1280:720" -movflags +faststart video-quality.mp4
```

## 📋 **Checklist de Otimização**

- [ ] **Reduzir resolução** para 1280x720
- [ ] **Ajustar bitrate** para 1-2 Mbps
- [ ] **Usar codec H.264** para compatibilidade
- [ ] **Adicionar WebM** como fallback
- [ ] **Testar em diferentes dispositivos**
- [ ] **Verificar tempo de carregamento**

## 🚀 **Resultado Esperado**
- **Tamanho**: 3-5 MB
- **Qualidade**: Visualmente aceitável
- **Performance**: Carregamento rápido
- **Compatibilidade**: Todos os navegadores

## ⚠️ **Notas Importantes**
1. **Sempre faça backup** do vídeo original
2. **Teste em diferentes dispositivos** antes do commit
3. **Mantenha o vídeo em loop** para experiência contínua
4. **Use preload="metadata"** para otimizar carregamento
5. **Considere lazy loading** para dispositivos móveis

## 📁 **Estrutura de Arquivos Após Otimização**
```
public/
├── video-background.mp4     # Vídeo otimizado (< 5MB)
├── video-background.webm    # Fallback WebM
└── video-background-fallback.jpg  # Imagem de fallback
```

## 🔍 **Teste de Performance**
- **Lighthouse Score**: > 90
- **Tempo de Carregamento**: < 3s
- **Tamanho Total**: < 10MB
- **Mobile Performance**: Otimizado
