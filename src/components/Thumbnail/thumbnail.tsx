import { Image } from '@imagekit/react';
import type { Thumbnail } from '../../models';

export function Thumbnail({
  thumbnailPath,
  thumbnailAltText,
  className,
  transform,
  loading = 'lazy',
}: Thumbnail) {
  let src = thumbnailPath;
  if (transform) {
    src += `?tr=w-${transform[0]},h-${transform[1]}`;
  }
  return (
    <Image
      src={src}
      alt={thumbnailAltText}
      className={'thumbnail ' + (className ?? '')}
      loading={loading}
    />
  );
}
