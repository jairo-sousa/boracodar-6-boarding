import { Box } from "@chakra-ui/react";

type CornerProps = {
	left?: Boolean;
	right?: Boolean;
	top?: Boolean;
	bottom?: Boolean;
};

export function Corner(props: CornerProps) {
	return (
		<Box
			w="2.4rem"
			h="2.4rem"
			bg="linear-gradient(to bottom, #8257e5 0%, #271a45 100%)"
			borderRadius="50%"
			zIndex={1}
			position="absolute"
			backgroundSize="100vw 100vh"
			transform="translate(-1.2rem, -1.2rem)"
			backgroundPosition="50% 50%"
			left={`${props.left ? "0.1rem" : "unset"}`}
			right={`${props.right ? "-2.4rem" : "unset"}`}
			top={`${props.top ? "0.1rem" : "unset"}`}
			bottom={`${props.bottom ? "-2.4rem" : "unset"}`}
		></Box>
	);
}
