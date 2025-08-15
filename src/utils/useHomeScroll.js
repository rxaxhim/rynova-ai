import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useHomeScroll() {
  const navigate = useNavigate();
  return useCallback((id) => {
    navigate('/', { state: { scrollTo: id } });
  }, [navigate]);
}
