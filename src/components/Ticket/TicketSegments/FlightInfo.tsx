import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { LightText } from "../../LightText";

export function FlightInfo() {
	return (
		<Flex direction="column" w="100%" gap="2.4rem">
			<Flex w="100%" justify="space-between">
				<Box>
					<LightText text="Flight" />
					<Text>R$995</Text>
				</Box>
				<Box textAlign="end">
					<LightText text="Date" />
					<Text>23/05/2023</Text>
				</Box>
			</Flex>
			<Flex w="100%" justify="space-between" align="center">
				<Box>
					<LightText text="São Paulo, Brazil" />
					<Text fontSize="4rem">GRU</Text>
					<LightText text="17:00" color="#000000cc" />
				</Box>
				<Img
					src="https://raw.githubusercontent.com/jairo-sousa/boracodar-6-boarding/main/.github/airplane.svg"
					alt="airplane icon"
				/>
				<Box textAlign="end">
					<LightText text="San Francisco, USA" />
					<Text fontSize="4rem">SFO</Text>
					<Flex justify="end">
						<LightText text="04:48" color="#000000cc" />
						<LightText text="+1" color="#000000cc" size="1rem" />
					</Flex>
				</Box>
			</Flex>
		</Flex>
	);
}
