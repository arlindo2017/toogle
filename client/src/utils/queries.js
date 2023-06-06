import { gql } from "@apollo/client";

//tested 6/4 - working
export const GET_ME = gql`
  query me {
  me {
    _id
    firstName
    lastName
    email
    profileImage
    isProvider
  }
}
`;

//query returns all service names with service category ID
//tested 6/2 - working
export const QUERY_SERVICES = gql`
  query getServices($limit: Int) {
    services(limit: $limit) {
      _id
      serviceName
      servicePrice
      serviceCategory {
        categoryName
        categoryImage
      }
    }
  }
`;

//Query for Provider
export const QUERY_PROVIDERS = gql`
query Providers($limit: Int) {
  providers(limit: $limit) {
    _id
    firstName
    lastName
    profileImage
  }
}
`

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
