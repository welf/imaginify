/* eslint-disable no-unused-vars */
import type { IImage } from "types";

// ====== USER PARAMS
declare type User = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type CreateUserParams = User;

declare type UpdateUserParams = Omit<User, "clerkId" | "email">;

// ====== IMAGE PARAMS
declare type Image = {
  title: string;
  publicId: string;
  transformationType: TransformationTypeKey;
  width: number;
  height: number;
  config: any;
  secureUrl: string;
  transformationURL: string;
  aspectRatio: string | undefined;
  prompt: string | undefined;
  color: string | undefined;
};

declare type AddImageParams = {
  image: Image;
  userId: string;
  path: string;
};

declare type UpdateImageParams = {
  image: Image & { _id: string };
  userId: string;
  path: string;
};

declare type Transformations = {
  restore?: boolean;
  fillBackground?: boolean;
  remove?: {
    prompt: string;
    removeShadow?: boolean;
    multiple?: boolean;
  };
  recolor?: {
    prompt?: string;
    to: string;
    multiple?: boolean;
  };
  removeBackground?: boolean;
};

// ====== TRANSACTION PARAMS
declare type Transaction = {
  stripeId: string;
  amount: number;
  credits: number;
  plan: string;
  buyerId: string;
  createdAt: Date;
};

declare type CheckoutTransactionParams = Omit<Transaction, "createdAt" | "stripeId">

declare type CreateTransactionParams = Transaction;

declare type TransformationTypeKey =
  | "restore"
  | "fill"
  | "remove"
  | "recolor"
  | "removeBackground";

// ====== URL QUERY PARAMS
declare type FormUrlQueryParams = {
  searchParams: string;
  key: string;
  value: string | number | null;
};

declare type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

declare type RemoveUrlQueryParams = {
  searchParams: string;
  keysToRemove: string[];
};

declare type SearchParamProps = {
  params: { id: string; type: TransformationTypeKey; };
  searchParams: { [key: string]: string | string[] | undefined; };
};

declare type TransformationFormProps = {
  action: "Add" | "Update";
  userId: string;
  type: TransformationTypeKey;
  creditBalance: number;
  data?: IImage | null;
  config?: Transformations | null;
};

declare type TransformedImageProps = {
  image: any;
  type: string;
  title: string;
  transformationConfig: Transformations | null;
  isTransforming: boolean;
  hasDownload?: boolean;
  setIsTransforming?: React.Dispatch<React.SetStateAction<boolean>>;
};