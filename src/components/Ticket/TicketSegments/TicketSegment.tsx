import { Flex } from "@chakra-ui/react";
type TicketSegmentProps = {
	children: React.ReactNode;
};
export function TicketSegment(props: TicketSegmentProps) {
	return (
		<Flex as="section" bg="#ffffff">
			{props.children}
		</Flex>
	);
}
