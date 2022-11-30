import * as csv from '@fast-csv/parse';
import { useState } from 'react';
import DragAndDrop from '../src/components/primitives/DragAndDrop';

const LoadDataset = () => {
    const [data, setData] = useState<unknown[]>([]);

    if (data.length <= 0) {
        return (
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-npink'>You haven't loaded a dataset yet</h1>
                <h3 className='text-npink'>Upload one using the input below</h3>
                <div className='mt-5 w-auto'>
                    <DragAndDrop />
                </div>
            </div>
        );
    }
};

export default LoadDataset;
