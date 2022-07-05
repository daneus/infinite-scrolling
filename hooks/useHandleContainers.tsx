import { useState } from 'react';
import generateContainers from '../helpers/generateContainers';

const useHandleContainers = (): [string[], () => void] => {
  const [containers, setContainers] = useState(generateContainers());
  const addContainers = () => {
    setContainers(containers => [...containers, ...generateContainers()]);
  };
  return [containers, addContainers];
};

export default useHandleContainers;
