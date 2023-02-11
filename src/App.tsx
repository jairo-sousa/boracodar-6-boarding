import { Flex, Heading, Text } from "@chakra-ui/react";

import { Ticket } from "./components/Ticket/Ticket";

function App() {
	return (
		<Flex
			direction="column"
			justify="center"
			align="center"
			gap="2rem"
			filter="drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25))"
		>
			<Heading as="h1" color="#FFFFFF" fontSize="2rem">
				Boarding pass
			</Heading>

			<Ticket />

			<Text
				color="#FFFFFF"
				fontWeight={400}
				fontSize="1.4rem"
				align="center"
				w="27rem"
			>
				If you have any problems, contact your airline's service desk.
			</Text>
		</Flex>
	);
}

export default App;
