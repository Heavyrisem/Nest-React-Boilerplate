import React from 'react';

import useSWR from 'swr';

import HelloWorld from '@components/HelloWorld';
import { User } from '@shared/types/User';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Main: React.FC = () => {
  const { data: users } = useSWR<User[]>('/api/users', fetcher);

  return (
    <div className="flex h-screen flex-col items-center justify-around bg-gray-100">
      <HelloWorld />

      <pre>
        <div className="font-bold">/api/users</div>
        {JSON.stringify(users, null, 4)}
      </pre>
    </div>
  );
};

export default Main;
