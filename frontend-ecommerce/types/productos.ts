export type ProductType = {
  id: number;
  attributes: {
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    price: number;
    origin: string;
    taste: string;
    isFeatured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    images: {
      data: ImageType[];
    };
    category: {
      data: CategoryType;
    };
  };
};

export type ImageType = {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    width: number;
    height: number;
    formats?: {
      large?: ImageFormat;
      small?: ImageFormat;
      medium?: ImageFormat;
      thumbnail?: ImageFormat;
    };
    mime: string;
    size: number;
    url: string;
    previewUrl?: string | null;
    createdAt: string;
    updatedAt: string;
  };
};

export type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes?: number;
};

export type CategoryType = {
  id: number;
  attributes: {
    categoryName: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};
