# 🎥 Otimização de Vídeo - Site ONG

## 🚨 **IMPORTANTE: Vídeo Muito Grande para Commit**

O arquivo `public/video-background.mp4` está muito grande para ser commitado no Git. Este guia mostra como otimizá-lo.

## 📊 **Status Atual**
- **Arquivo**: `public/video-background.mp4`
- **Tamanho**: Muito grande (> 50MB)
- **Problema**: Não pode ser commitado no Git

## 🎯 **Solução: Otimizar o Vídeo**

### **Opção 1: Script Automático (Recomendado)**

#### **Windows (PowerShell)**
```powershell
# Executar como administrador
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\scripts\optimize-video.ps1
```

#### **Linux/Mac (Bash)**
```bash
chmod +x scripts/optimize-video.sh
./scripts/optimize-video.sh
```

### **Opção 2: Manual com FFmpeg**

#### **Instalar FFmpeg**
- **Windows**: https://ffmpeg.org/download.html
- **Mac**: `brew install ffmpeg`
- **Linux**: `sudo apt install ffmpeg`

#### **Comando de Otimização**
```bash
ffmpeg -i public/video-background.mp4 \
  -c:v libx264 \
  -crf 28 \
  -preset medium \
  -c:a aac \
  -b:a 128k \
  -vf "scale=1280:720" \
  -movflags +faststart \
  public/video-background-optimized.mp4
```

### **Opção 3: Ferramentas Online**
- **CloudConvert.com**
- **Convertio.co**
- **OnlineVideoConverter.com**

## 📱 **Especificações Recomendadas**

| Aspecto | Valor | Justificativa |
|---------|-------|---------------|
| **Resolução** | 1280x720 | Balanceia qualidade e tamanho |
| **Codec** | H.264 | Máxima compatibilidade |
| **Bitrate** | 1-2 Mbps | Qualidade adequada |
| **FPS** | 24-30 | Fluidez natural |
| **Áudio** | AAC 128k | Qualidade suficiente |

## 🔧 **Configurações FFmpeg**

### **Compressão Agressiva (Tamanho Mínimo)**
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 32 -preset slow -vf "scale=1280:720" output.mp4
```

### **Compressão Balanceada (Recomendado)**
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset medium -vf "scale=1280:720" output.mp4
```

### **Compressão Suave (Qualidade Alta)**
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 24 -preset fast -vf "scale=1280:720" output.mp4
```

## 📋 **Checklist de Otimização**

- [ ] **Fazer backup** do vídeo original
- [ ] **Reduzir resolução** para 1280x720
- [ ] **Ajustar bitrate** para 1-2 Mbps
- [ ] **Usar codec H.264** para compatibilidade
- [ ] **Testar qualidade** visual
- [ ] **Verificar tamanho** (< 5MB)
- **Commitar** apenas o vídeo otimizado

## 🚀 **Resultado Esperado**

| Métrica | Antes | Depois |
|---------|-------|--------|
| **Tamanho** | > 50MB | < 5MB |
| **Resolução** | 1920x1080 | 1280x720 |
| **Qualidade** | Alta | Adequada |
| **Carregamento** | Lento | Rápido |
| **Git** | ❌ Não commitável | ✅ Commitável |

## ⚠️ **Avisos Importantes**

1. **SEMPRE faça backup** antes de otimizar
2. **Teste a qualidade** visual após otimização
3. **Não commite** vídeos grandes (> 10MB)
4. **Use o script** fornecido para segurança
5. **Verifique** se o vídeo funciona no site

## 🔍 **Verificação Pós-Otimização**

```bash
# Verificar tamanho
ls -lh public/video-background.mp4

# Verificar informações do vídeo
ffprobe public/video-background.mp4

# Testar no navegador
npm run dev
```

## 📞 **Suporte**

Se tiver problemas com a otimização:
1. Verifique se o FFmpeg está instalado
2. Execute o script como administrador
3. Verifique as permissões de arquivo
4. Teste com um vídeo menor primeiro

## ✅ **Próximos Passos**

1. **Execute o script** de otimização
2. **Teste o vídeo** no site
3. **Verifique a qualidade** visual
4. **Faça commit** do vídeo otimizado
5. **Atualize** este README se necessário

---

**🎯 Meta: Vídeo < 5MB, Qualidade Adequada, Site Funcionando**
