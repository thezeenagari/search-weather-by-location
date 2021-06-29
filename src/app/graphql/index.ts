import gql from "graphql-tag";

export const GET_WEATHER = gql`
    query getCityByName($cityName: String!)
    {
        getCityByName(name: $cityName) {
            id
            name
            country
            coord {
            lon
            lat
            }
            weather {
            summary {
                title
                description
                icon
            }
            temperature {
                actual
                feelsLike
                min
                max
            }
            wind {
                speed
                deg
            }
            clouds {
                all
                visibility
                humidity
            }
            timestamp
            }
        }   
    }
`;