import { CSSProperties, useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface HlsVideoProps {
  src: string;
  className?: string;
  style?: CSSProperties;
}

export default function HlsVideo({ src, className = '', style }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 10, // Optimize buffering for performance
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => {
          console.log('HlsVideo: autoplay prevented', err);
        });
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native support in Safari and iOS devices
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch((err) => {
          console.log('HlsVideo Native: autoplay prevented', err);
        });
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={`${className}`}
      style={style}
      autoPlay
      loop
      muted
      playsInline
    />
  );
}
