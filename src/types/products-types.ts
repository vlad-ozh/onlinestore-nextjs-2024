export interface ICategoriesList {
  smartphones: 'smartphones';
  tablets: 'tablets';
  laptops: 'laptops';
};

export type TCategoriesList = 'smartphones' | 'tablets' | 'laptops';

export interface ICategory {
  name: TCategoriesList;
  brands: string[];
};

export interface ICharacteristics {
  connection?: {
    numOfSimCards?: string;
    simCardsFormat?: string[];
    communicationStandards?: string[];
  };
  screen?: {
    diagonal?: number;
    resolution?: string;
    refreshRate?: number;
    pixelDensity?: number;
    type?: string;
  };
  cpu?: {
    name?: string;
    coresNum?: number;
    gpu?: string;
    videoMemory?: number;
  };
  memory?: {
    internalMemory?: number;
    type?: string;
    ram?: number;
  };
  camera?: {
    camera?: string;
    videoRecording?: string;
    opticalStabilization?: 'yes' | 'no';
    frontCamera?: string;
  };
  os?: string;
  wirelessTechnologies?: {
    wifi?: string;
    gps?: string;
    bluetooth?: number;
    nfc?: string;
    wirelessCharging?: string;
    infraredPort?: string;
  };
  interfacesAndConnections?: string;
  frame?: {
    protectionStandard?: string;
    color?: string;
  };
  battery?: {
    capacity?: number;
    fastCharging?: string;
  };
  dimensions?: {
    dimensions?: string;
    weight?: number;
  };
};

interface IReview {
  userId: string;
  userName: string;
  rating: number;
  text: string;
  date: string;
};

export interface IReviewForModel extends IReview{
  _id: string;
};

export interface IReviewWithId extends IReview{
  id: string;
};

export interface IProduct {
  name: string;
  brand: string;
  category: { _id: string; name: string; };
  price: number;
  description: string;
  image: string[];
  salesCount: number;
  amount: number;
  reviews: IReviewForModel[];
  characteristics: ICharacteristics;
}

export interface IClientProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  description:
    'iphone-14-pro-max-description' |
    'ipad-air-description' |
    'macbook-pro-16-description';
  image: string[];
  salesCount: number;
  amount: number;
  reviews: IReviewWithId[];
  characteristics: ICharacteristics;
}
