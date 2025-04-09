export type ProductType = {
    id: number;
    documentId: string;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeatured: boolean;
    taste: string;
    origin: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    images?: {
      id: number;
      documentId: string;
      name: string;
      url: string;
      alternativeText?: string | null;
      caption?: string | null;
      width: number;
      height: number;
      formats?: {
        large?: {
          url: string;
        };
        small?: {
          url: string;
        };
        medium?: {
          url: string;
        };
        thumbnail?: {
          url: string;
        };
      };
      mime: string;
      size: number;
    }[];
    category?: {
      id: number;
      documentId: string;
      categoryName: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
  