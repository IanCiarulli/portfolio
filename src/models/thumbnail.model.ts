export interface ThumbnailProps {
  thumbnailPath: string;
  thumbnailAltText: string;
}

export interface ProjectProps extends ThumbnailProps {
  className: string;
  onClick: () => void;
  title: string;
  description: string;
}
