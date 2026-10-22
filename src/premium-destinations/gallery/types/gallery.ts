export type GalleryState =
  | "closed"
  | "hoverOpen"
  | "opening"
  | "expanded"
  | "focused"
  | "closing";

export type PhotoAspect = "portrait" | "landscape" | "wide" | "square";

export interface MosaicCell {
  col: number;
  row: number;
  w: number;
  h: number;
}

export interface DestinationPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  caption: string;
  focal: string;
  aspect: PhotoAspect;
}

export interface PhotoLayout {
  x: number;
  y: number;
  width: number;
  height: number;
  rotate: number;
  scale: number;
  opacity: number;
  zIndex: number;
  blur: number;
  brightness: number;
  saturate: number;
  delay: number;
}
