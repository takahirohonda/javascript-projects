import { gql } from '@apollo/client';

export const PROFILE_BY_ID = gql`
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

export const PROFILES = gql`
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
