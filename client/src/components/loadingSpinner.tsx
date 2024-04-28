import { RingLoader } from 'react-spinners';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <RingLoader color={'#123abc'} size={100} />
    </div>
  );
};

