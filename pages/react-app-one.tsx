import { useEffect, useState } from 'react'
import ReactAppOne from '../react-app-one/App'

const AppOne = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true) }, [])

  return isMounted ? <ReactAppOne /> : null;
}

export default AppOne;
