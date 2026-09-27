/**
 * Image helper utility for converting SVG data URIs into PNG data URIs for Gemini Multimodal reasoning
 */

export function svgToPngDataUrl(svgDataUrl: string): Promise<string> {
  return new Promise((resolve) => {
    if (!svgDataUrl || !svgDataUrl.startsWith('data:image/svg')) {
      resolve(svgDataUrl);
      return;
    }

    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = 600;
          canvas.height = 450;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.fillStyle = '#E8EFE9';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, 600, 450);
            resolve(canvas.toDataURL('image/png'));
          } else {
            resolve(svgDataUrl);
          }
        } catch {
          resolve(svgDataUrl);
        }
      };
      img.onerror = () => resolve(svgDataUrl);
      img.src = svgDataUrl;
    } catch {
      resolve(svgDataUrl);
    }
  });
}
