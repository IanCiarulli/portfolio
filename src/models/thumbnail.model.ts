export interface Thumbnail {
  thumbnailPath: string;
  thumbnailAltText: string;
  className?: string;
  /**
   * [width, height] para ImageKit, ej: [300, 300]
   */
  transform?: [number, number];
  loading?: 'lazy' | 'eager';
}
