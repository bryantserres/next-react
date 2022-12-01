import { useEffect, useState } from 'react'
import ReactAppTwo from '../react-app-two/App'

const AppTwo = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true) }, [])

  return isMounted ? <ReactAppTwo /> : null;
}

export default AppTwo;
