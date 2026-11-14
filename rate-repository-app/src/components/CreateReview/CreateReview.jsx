import { useNavigate } from 'react-router-native';
import useCreateReview from '../../hooks/useCreateReview';
import CreateReviewContainer from './CreateReviewContainer';
import { useState } from 'react';

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async ({ ownerName, repositoryName, rating, text }) => {
    setError(null);
    try {
      const review = await createReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text: text || undefined,
      });

      navigate(`/repository/${review.repositoryId}`);
    } catch (e) {
      setError(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} error={error} />;
};

export default CreateReview;
