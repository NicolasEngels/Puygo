import { Container, Flex, Box } from "@chakra-ui/react";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user } = useAuth0();

  return (
    <Container className="mb-5">
      <Flex className="align-items-center profile-header mb-5 text-center text-md-left">
        <Box>
          <img
            src={user?.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Box>
        <Box>
          <h2>{user?.name}</h2>
          <p className="lead text-muted">{user?.email}</p>
        </Box>
      </Flex>
      <Flex>
        <p>{JSON.stringify(user, null, 2)}</p>
      </Flex>
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
