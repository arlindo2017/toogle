import { gql } from "@apollo/client";

//query returns all service names with service category ID
//tested 6/2 - working
export const QUERY_SERVICES = gql`
  query getServices($limit: Int) {
    services(limit: $limit) {
      _id
      serviceName
      serviceCategory {
        categoryName
        categoryImage
      }
    }
  }
`;

export const QUERY_SINGLE_SERVICE = gql`
  query Service($serviceId: ID!) {
    service(serviceId: $serviceId) {
      _id
      serviceName
      serviceDesc
      servicePrice
      serviceQty
      serviceCategory {
        _id
        categoryName
        categoryDesc
        categoryImage
      }
      serviceProviders {
        _id
        username
        firstName
        lastName
        email
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query getCategories {
    categories {
      _id
      categoryName
      categoryDesc
      categoryImage
    }
  }
`;

// Added additional information to link and render on page
export const QUERY_CATEGORIES_WITH_SERVICES = gql`
  query getAllCategoriesWithServices {
    getAllCategoriesWithServices {
      _id
      categoryName
      categoryDesc
      categoryImage
      services {
        _id
        serviceName
        serviceDesc
      }
    }
  }
`;
