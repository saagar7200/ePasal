import { Avatar, Box, Text } from "@chakra-ui/react";
import { Stack } from "tabler-icons-react";

const UserAccountMenu = () => {
  return (
    <Box>
      <Stack>
        <Avatar boxSize={40} color="blue">
          BH
        </Avatar>
        <div>
          <Text>Bob Handsome</Text>
          <Text size="xs" color="dimmed">
            bob@handsome.inc
          </Text>
        </div>
      </Stack>
    </Box>
  );
};

export default UserAccountMenu;
