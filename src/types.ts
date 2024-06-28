export type Maybe<T> = T | null;

export type Scalars = {
  ID: {
      input: string;
      output: string;
  };
  String: {
      input: string;
      output: string;
  };
  Boolean: {
      input: boolean;
      output: boolean;
  };
  Int: {
      input: number;
      output: number;
  };
  Float: {
      input: number;
      output: number;
  };

  Address: {
      input: any;
      output: any;
  };

  ChainId: {
      input: any;
      output: any;
  };

  ChainLocation: {
      input: any;
      output: any;
  };

  ChainType: {
      input: any;
      output: any;
  };
  GenericTokenLocation: {
      input: any;
      output: any;
  };
  MetadataAttributes: {
      input: any;
      output: any;
  };
  MetadataProperties: {
      input: any;
      output: any;
  };
  MetadataRawAttributes: {
      input: any;
      output: any;
  };
};

export type Metadata = Node & {
  __typename: 'Metadata';
  attributes: Scalars['MetadataAttributes']['output'];
  id: Scalars['ID']['output'];
  properties: Scalars['MetadataProperties']['output'];
  uri: Scalars['String']['output'];
};