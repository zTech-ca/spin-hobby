export interface IMerchPreview {
  title: string;
  img: string;
  price: number;
  description: string;
}

export interface IGroupedMerchPreview {
  name: string;
  merchs: IMerchPreview[];
  subGroups?: IGroupedMerchPreview[];
}

export interface ICategory {
  name: string;
  img: string;
}
