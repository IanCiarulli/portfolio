import { Image } from '@imagekit/react';
import type { Thumbnail } from '../../models';

export function Thumbnail({
  thumbnailPath,
  thumbnailAltText,
  className,
}: Thumbnail) {
  return (
    <Image
      src={thumbnailPath}
      alt={thumbnailAltText}
      className={'thumbnail ' + (className ?? '')}
      loading="lazy"
    />
  );
}
