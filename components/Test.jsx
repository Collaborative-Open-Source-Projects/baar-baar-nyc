'use client';

import { useState, useEffect } from "react";
import axios from 'axios';

export default function BannerUploader() {
    const [bannerUrl, setBannerUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBanner();
    }, []);

    const fetchBanner = async () => {
        try {
            const res = await axios.get("/api/upload");
            setBannerUrl(res.data);
        } catch (err) {
            console.error(err);
            setError("Could not load banner.");
        }
    };

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        fileURL = URL.createObjectURL(file);
        setBannerUrl(fileURL);

        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append("banner", file);

        try {
            await axios.post("/api/upload", formData);

            if (!fileURL) fetchBanner();
        } catch (err) {
            console.error(err);
            setError("Upload failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 pt-20 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Banner Image</h2>

            {bannerUrl ? (
                <img src={bannerUrl} alt="Banner" className="w-full rounded-lg shadow" />
            ) : (
                <p className="text-gray-500">No banner available</p>
            )}

            <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="mt-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                disabled={loading}
            />

            {loading && <p className="mt-2 text-blue-500">Uploading...</p>}
            {error && <p className="mt-2 text-red-500">{error}</p>}
        </div>
    );
}

