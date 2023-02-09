import { Box, Flex, Text } from "@chakra-ui/react";
import { LightText } from "../../LightText";

export function FlightInfo() {
	return (
		<>
			<Flex>
				<Box>
					<LightText text="Flight" />
					<Text>R$995</Text>
				</Box>
				<Box>
					<LightText text="Date" />
					<Text>23/05/2023</Text>
				</Box>
			</Flex>
		</>
	);
}
