export interface LocationItem {
  city: string;
  country: string;
  email: string;
  phone: string;
  address: string;
  imageUrl?: string;
  timezone?: string;
}

export interface LocationGroup {
  name: string;
  slug: string;
  items: LocationItem[];
}