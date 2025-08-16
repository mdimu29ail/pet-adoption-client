import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const useUserRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://my-assignment-12-server-one.vercel.app/users/role/${user.email}`
        )
        .then(res => {
          setRole(res.data.role);
          setRoleLoading(false);
        })
        .catch(() => {
          setRole(null);
          setRoleLoading(false);
        });
    } else {
      setRole(null);
      setRoleLoading(false);
    }
  }, [user]);

  return { role, roleLoading };
};

export default useUserRole;
