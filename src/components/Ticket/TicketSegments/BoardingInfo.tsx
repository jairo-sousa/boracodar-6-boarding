import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { LightText } from "../../LightText";

export function BoardingInfo() {
	return (
		<Flex direction="column" w="100%" gap="2.4rem">
			<Flex w="100%" justify="space-between" direction="column" gap="2.4rem">
				<Flex w="100%" justify="space-between">
					<Flex direction="column" gap="1.6rem">
						<Box>
							<LightText text="Boarding" />
							<Flex
								w="5.4rem"
								h="2.7rem"
								bg="#633BBC"
								justify="center"
								align="center"
								borderRadius="0.8rem"
							>
								<Text color="#FFFFFF">16:15</Text>
							</Flex>
						</Box>
						<Box>
							<LightText text="Terminal" />
							<Text>2</Text>
						</Box>
						<Box>
							<LightText text="Gate" />
							<Text>15</Text>
						</Box>
					</Flex>
					<Flex direction="column" gap="1rem">
						<Img src="./.github/qrcode.svg" alt="qrcode" />
						<LightText text="Boarding group: 3" />
					</Flex>
				</Flex>
				<Flex align="center" w="100%" gap="1rem">
					<Text display="inline">Attention:</Text>
					<LightText text=" the gate closes at 16:45" color="#000000cc" />
				</Flex>
			</Flex>
		</Flex>
	);
}
