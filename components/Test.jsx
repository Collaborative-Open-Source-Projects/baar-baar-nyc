'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function BannerUploader() {
    const [bannerUrl, setBannerUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchBanner();
    }, []);

    const fetchBanner = async () => {
        try {
            const response = await axios.get('/api/upload', {
                responseType: 'blob',
            });
            const objectUrl = URL.createObjectURL(response.data);
            setBannerUrl(objectUrl);
        } catch (err) {
            console.error(err);
            setError('Could not load banner.');
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const fileURL = URL.createObjectURL(file);
        setBannerUrl(fileURL);
        setFile(file);
    };

    const handleUpload = async () => {
        if (!file) {
            setError('No File Uploaded');
            return;
        }
        const fileURL = URL.createObjectURL(file);
        setBannerUrl(fileURL);

        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('banner', file);

        try {
            await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (!fileURL) {
                fetchBanner();
            }
        } catch (err) {
            console.error(err);
            setError('Upload failed.');
        } finally {
            setError('File Sucessfully Uploaded');
            setLoading(false);
            setFile(null);
        }
    };

    return (
        <div className='p-4 pt-20 max-w-md mx-auto'>
            <h2 className='text-xl font-bold mb-4'>Banner Image</h2>

            <div className='min-h-[200px] flex items-center justify-center bg-gray-100 rounded-lg mb-4'>
                {bannerUrl ? (
                    <img
                        src={bannerUrl}
                        alt='Banner'
                        className='w-full h-auto rounded-lg shadow'
                    />
                ) : (
                    <p className='text-gray-500'>No banner available</p>
                )}
            </div>

            <input
                type='file'
                accept='image/*'
                onChange={handleImageUpload}
                className='mt-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600'
                disabled={loading}
            />
            <button
                className='mt-4 block text-sm text-white p-2 file:px-4 rounded-lg border-0 font-semibold bg-blue-500 file:text-white hover:file:bg-blue-600'
                onClick={handleUpload}
            >
                Upload
            </button>

            {loading && <p className='mt-2 text-blue-500'>Uploading...</p>}
            {error && <p className='mt-2 text-red-500'>{error}</p>}
        </div>
    );
}
