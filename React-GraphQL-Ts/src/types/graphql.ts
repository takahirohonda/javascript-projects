import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Avatar = {
  __typename?: 'Avatar';
  fileName: Scalars['String'];
  fileSize: Scalars['Float'];
  fileManagerHash: Scalars['String'];
};

export type AvatarInput = {
  fileName: Scalars['String'];
  fileSize: Scalars['Float'];
  fileManagerHash: Scalars['String'];
};

export enum BudgetRange {
  Unknown = 'Unknown',
  LessThan100k = 'LessThan100k',
  From100kTo250k = 'From100kTo250k',
  From250kTo500k = 'From250kTo500k',
  From500kTo750k = 'From500kTo750k',
  From750kTo1m = 'From750kTo1m',
  From1mto1_5m = 'From1mto1_5m',
  From1_5mTo2m = 'From1_5mTo2m',
  From2mTo3m = 'From2mTo3m',
  From3mTo4m = 'From3mTo4m',
  From4mTo5m = 'From4mTo5m',
  From5mTo10m = 'From5mTo10m',
  From10mTo15m = 'From10mTo15m',
  From15mTo20m = 'From15mTo20m',
  From20mTo30m = 'From20mTo30m',
  From30mTo50m = 'From30mTo50m',
  From50mTo100m = 'From50mTo100m',
  From100mTo200m = 'From100mTo200m',
  MoreThan200m = 'MoreThan200m'
}

export type Certificate = {
  __typename?: 'Certificate';
  fileName: Scalars['String'];
  fileSize: Scalars['Float'];
  fileManagerHash: Scalars['String'];
  documentName: Scalars['String'];
  expiry?: Maybe<Scalars['DateTime']>;
};

export type CertificateInput = {
  fileName: Scalars['String'];
  fileSize: Scalars['Float'];
  fileManagerHash: Scalars['String'];
  documentName: Scalars['String'];
  expiry?: Maybe<Scalars['DateTime']>;
};

export type Contact = {
  __typename?: 'Contact';
  name: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  position: Scalars['String'];
  userId?: Maybe<Scalars['Float']>;
  officeId: Scalars['Float'];
};

export type ContactInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  position: Scalars['String'];
  userId?: Maybe<Scalars['Float']>;
  officeId: Scalars['Float'];
};


export type Endorsement = {
  __typename?: 'Endorsement';
  remarks?: Maybe<Scalars['String']>;
  approved: Scalars['Boolean'];
  builderAccountId: Scalars['Float'];
  tradeIds: Array<Scalars['Int']>;
};

export type EndorsementInput = {
  remarks?: Maybe<Scalars['String']>;
  approved: Scalars['Boolean'];
  builderAccountId: Scalars['Float'];
  tradeIds: Array<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrUpdateProfile: Profile;
};


export type MutationAddOrUpdateProfileArgs = {
  profile: ProfileInput;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  accountId: Scalars['Float'];
  companyIntro?: Maybe<Scalars['String']>;
  preferredBudgets: Array<BudgetRange>;
  workforceSize: WorkforceSize;
  projects: Array<ProjectWork>;
  regions: Array<WorkRegion>;
  specialisations: Array<Specialisation>;
  certificates: Array<Certificate>;
  contacts: Array<Contact>;
  avatar?: Maybe<Avatar>;
};

export type ProfileInput = {
  id: Scalars['ID'];
  accountId: Scalars['Float'];
  companyIntro?: Maybe<Scalars['String']>;
  preferredBudgets?: Maybe<Array<BudgetRange>>;
  workforceSize: WorkforceSize;
  projects?: Maybe<Array<ProjectWorkInput>>;
  regions?: Maybe<Array<WorkRegionInput>>;
  specialisations?: Maybe<Array<SpecialisationInput>>;
  certificates?: Maybe<Array<CertificateInput>>;
  contacts?: Maybe<Array<ContactInput>>;
  avatar?: Maybe<AvatarInput>;
};

export type ProjectPhoto = {
  __typename?: 'ProjectPhoto';
  fileName: Scalars['String'];
  fileSize: Scalars['Float'];
  fileManagerHash: Scalars['String'];
  description: Scalars['String'];
  cover: Scalars['Boolean'];
};

export type ProjectPhotoInput = {
  fileName: Scalars['String'];
  fileSize: Scalars['Float'];
  fileManagerHash: Scalars['String'];
  description: Scalars['String'];
  cover: Scalars['Boolean'];
};

export type ProjectWork = {
  __typename?: 'ProjectWork';
  name: Scalars['String'];
  budget: Scalars['String'];
  constructionType: Scalars['Float'];
  sectors: Array<Sector>;
  status: Scalars['String'];
  builderName: Scalars['String'];
  summary: Scalars['String'];
  startDate: Scalars['DateTime'];
  completionDate: Scalars['DateTime'];
  photos: Array<ProjectPhoto>;
  endorsements: Array<Endorsement>;
  stageId?: Maybe<Scalars['Float']>;
};

export type ProjectWorkInput = {
  name: Scalars['String'];
  budget: Scalars['String'];
  constructionType: Scalars['Float'];
  sectors?: Maybe<Array<Sector>>;
  status: Scalars['String'];
  builderName: Scalars['String'];
  summary: Scalars['String'];
  startDate: Scalars['DateTime'];
  completionDate: Scalars['DateTime'];
  photos?: Maybe<Array<ProjectPhotoInput>>;
  endorsements?: Maybe<Array<EndorsementInput>>;
  stageId?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  profiles: Array<Profile>;
  profile: Profile;
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};

export enum Sector {
  Commercial = 'COMMERCIAL',
  Corrections = 'CORRECTIONS',
  Health = 'HEALTH'
}

export type Specialisation = {
  __typename?: 'Specialisation';
  name: Scalars['String'];
  tradeId: Scalars['Float'];
};

export type SpecialisationInput = {
  name: Scalars['String'];
  tradeId: Scalars['Float'];
};

export type WorkRegion = {
  __typename?: 'WorkRegion';
  state: Scalars['String'];
  regionId: Scalars['Float'];
};

export type WorkRegionInput = {
  state: Scalars['String'];
  regionId: Scalars['Float'];
};

export enum WorkforceSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}

export type ProfileByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProfileByIdQuery = (
  { __typename?: 'Query' }
  & { profile: (
    { __typename?: 'Profile' }
    & Pick<Profile, 'id' | 'accountId' | 'companyIntro' | 'preferredBudgets'>
    & { regions: Array<(
      { __typename?: 'WorkRegion' }
      & Pick<WorkRegion, 'regionId' | 'state'>
    )>, projects: Array<(
      { __typename?: 'ProjectWork' }
      & Pick<ProjectWork, 'name'>
    )>, avatar?: Maybe<(
      { __typename?: 'Avatar' }
      & Pick<Avatar, 'fileName' | 'fileSize' | 'fileManagerHash'>
    )> }
  ) }
);

export type ProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfilesQuery = (
  { __typename?: 'Query' }
  & { profiles: Array<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'id' | 'accountId' | 'companyIntro' | 'preferredBudgets'>
    & { regions: Array<(
      { __typename?: 'WorkRegion' }
      & Pick<WorkRegion, 'regionId' | 'state'>
    )>, projects: Array<(
      { __typename?: 'ProjectWork' }
      & Pick<ProjectWork, 'name'>
    )>, avatar?: Maybe<(
      { __typename?: 'Avatar' }
      & Pick<Avatar, 'fileName' | 'fileSize' | 'fileManagerHash'>
    )> }
  )> }
);


export const ProfileByIdDocument = gql`
    query profileById($id: ID!) {
  profile(id: $id) {
    id
    accountId
    companyIntro
    preferredBudgets
    regions {
      regionId
      state
    }
    projects {
      name
    }
    avatar {
      fileName
      fileSize
      fileManagerHash
    }
  }
}
    `;

/**
 * __useProfileByIdQuery__
 *
 * To run a query within a React component, call `useProfileByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProfileByIdQuery(baseOptions?: Apollo.QueryHookOptions<ProfileByIdQuery, ProfileByIdQueryVariables>) {
        return Apollo.useQuery<ProfileByIdQuery, ProfileByIdQueryVariables>(ProfileByIdDocument, baseOptions);
      }
export function useProfileByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileByIdQuery, ProfileByIdQueryVariables>) {
          return Apollo.useLazyQuery<ProfileByIdQuery, ProfileByIdQueryVariables>(ProfileByIdDocument, baseOptions);
        }
export type ProfileByIdQueryHookResult = ReturnType<typeof useProfileByIdQuery>;
export type ProfileByIdLazyQueryHookResult = ReturnType<typeof useProfileByIdLazyQuery>;
export type ProfileByIdQueryResult = Apollo.QueryResult<ProfileByIdQuery, ProfileByIdQueryVariables>;
export const ProfilesDocument = gql`
    query profiles {
  profiles {
    id
    accountId
    companyIntro
    preferredBudgets
    regions {
      regionId
      state
    }
    projects {
      name
    }
    avatar {
      fileName
      fileSize
      fileManagerHash
    }
  }
}
    `;

/**
 * __useProfilesQuery__
 *
 * To run a query within a React component, call `useProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfilesQuery(baseOptions?: Apollo.QueryHookOptions<ProfilesQuery, ProfilesQueryVariables>) {
        return Apollo.useQuery<ProfilesQuery, ProfilesQueryVariables>(ProfilesDocument, baseOptions);
      }
export function useProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfilesQuery, ProfilesQueryVariables>) {
          return Apollo.useLazyQuery<ProfilesQuery, ProfilesQueryVariables>(ProfilesDocument, baseOptions);
        }
export type ProfilesQueryHookResult = ReturnType<typeof useProfilesQuery>;
export type ProfilesLazyQueryHookResult = ReturnType<typeof useProfilesLazyQuery>;
export type ProfilesQueryResult = Apollo.QueryResult<ProfilesQuery, ProfilesQueryVariables>;