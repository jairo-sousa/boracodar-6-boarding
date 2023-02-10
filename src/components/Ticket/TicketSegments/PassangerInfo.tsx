import { Box, Flex, Text } from "@chakra-ui/react";
import { LightText } from "../../LightText";

export function PassangerInfo() {
	return (
		<Flex direction="column" w="100%" gap="2.4rem">
			<Flex w="100%" justify="space-between">
				<Box>
					<LightText text="Passenger" />
					<Text>Rodrigo Terron</Text>
				</Box>
				<Box textAlign="end">
					<LightText text="Seat" />
					<Text>28A</Text>
				</Box>
			</Flex>
		</Flex>
	);
}
