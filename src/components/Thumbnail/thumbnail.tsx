import { Image } from '@imagekit/react';
import type { ThumbnailProps } from '../../models';

export function Thumbnail({
  thumbnailPath,
  thumbnailAltText,
  className,
}: ThumbnailProps) {
  return (
    <Image
      src={thumbnailPath}
      alt={thumbnailAltText}
      className={'thumbnail ' + (className ?? '')}
      loading="lazy"
    />
  );
}
