import { gql } from '@apollo/client';

//query returns all service names with service category ID
//tested 6/2 - working
export const QUERY_SERVICES = gql`
  query getServices {
  services {
    serviceName
    serviceCategory {
      _id
      categoryName
    }
    serviceProviders {
      username
    }
  }
}
`;

export const QUERY_CATEGORIES = gql`
  query getCategories {
  categories {
    _id
    categoryName
  }
}
`;

export const QUERY_CATEGORIES_WITH_SERVICES = gql`
  query getAllCategoriesWithServices {
  getAllCategoriesWithServices {
    _id
    categoryName
    services {
      _id
      serviceName
      serviceDesc
      servicePrice
      serviceQty
    }
  }
}
`;
