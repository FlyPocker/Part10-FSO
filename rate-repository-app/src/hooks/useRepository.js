import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const variables = { id, reviewsFirst: 5 };
  const { data, loading, error, refetch, fetchMore } = useQuery(GET_REPOSITORY, {
    variables,
    skip: !id,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const reviews = data?.repository?.reviews;
    if (loading || !reviews?.pageInfo.hasNextPage) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        reviewsAfter: reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    repository: data?.repository,
    loading,
    error,
    refetch,
    fetchMore: handleFetchMore,
  };
};

export default useRepository;