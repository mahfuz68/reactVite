import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Post() {
    const params = useParams();
    const navigate = useNavigate();
    return (
        <div className="text-center">
            Post id is
            {' '}
            {params.postId}

            <div className="flex justify-center mt-4">
                <button
                    type="button"
                    className=" px-4 py-2 block bg-indigo-300 rounded-full "
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Go back
                    {' '}

                </button>
            </div>
        </div>
    );
}
