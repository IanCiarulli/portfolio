import { Image } from '@imagekit/react';
import type { ThumbnailProps } from '../../models';

export function Thumbnail({ thumbnailPath, thumbnailAltText }: ThumbnailProps) {
  return (
    <Image
      src={thumbnailPath}
      alt={thumbnailAltText}
      className="thumbnail"
      loading="lazy"
    />
  );
}
