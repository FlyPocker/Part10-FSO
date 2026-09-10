import { useNavigate } from 'react-router-native';
import useCreateReview from '../../hooks/useCreateReview';
import CreateReviewContainer from './CreateReviewContainer';

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async ({ ownerName, repositoryName, rating, text }) => {
    const review = await createReview({
      ownerName,
      repositoryName,
      rating: Number(rating),
      text: text || undefined,
    });

    navigate(`/repository/${review.repositoryId}`);
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
