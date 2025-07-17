export interface ThumbnailProps {
  thumbnailPath: string;
  thumbnailAltText: string;
}

export interface ProjectProps extends ThumbnailProps {
  onClick?: () => void;
  title: string;
  role: string;
}
