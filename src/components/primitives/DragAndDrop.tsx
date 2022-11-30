const DragAndDrop = () => {
    return (
        <div className='w-full h-48 border-2 border-npink rounded-lg px-4 py-3'>
            <span>Choose a file or drag and drop it here'</span>
            <input
                type='file'
                name='dataset'
                className='hidden'
                accept='.csv'
            />
        </div>
    );
};

export default DragAndDrop;
