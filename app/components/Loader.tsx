'use client';

import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen text-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#66caf1"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
