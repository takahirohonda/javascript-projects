import React from 'react';
import { useQuery } from '@apollo/client';
import { PROFILE_BY_ID } from './queries';
import { Profile } from '../types/graphql';

const ProfilesPage: React.VFC = () => {
  const { loading, data } = useQuery<Profile>(
    PROFILE_BY_ID,
    { variables: { id: 'account#4024' } },
  );

  return (
    <>
      <h1>Hello Profiles</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default ProfilesPage;
