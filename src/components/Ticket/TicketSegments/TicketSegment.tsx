import { Box, Flex } from "@chakra-ui/react";
import { Corner } from "./Corner";
type TicketSegmentProps = {
	top?: Boolean;
	bottom?: Boolean;
	children: React.ReactNode;
};
export function TicketSegment(props: TicketSegmentProps) {
	return (
		<Flex
			as="section"
			width="100%"
			h="100%"
			p="2.4rem 3.2rem"
			w="32.7rem"
			bg="#ffffff"
			borderRadius={`${props.top ? " 2.4rem 2.4rem" : "0 0"} ${
				props.bottom ? "2.4rem 2.4rem" : "0 0"
			}`}
			position="relative"
			overflow="hidden"
		>
			{props.children}

			{!props.top ? <Corner right={true} top={true} /> : ""}
			{!props.top ? <Corner left={true} top={true} /> : ""}

			{!props.bottom ? <Corner right={true} bottom={true} /> : ""}
			{!props.bottom ? <Corner left={true} bottom={true} /> : ""}
		</Flex>
	);
}
