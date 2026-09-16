import { useContext } from 'react';
import { AuthContex } from '../context/AuthContex';

export function useAuth() {
    return useContext(AuthContext);
}