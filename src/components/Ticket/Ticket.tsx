import { Flex } from "@chakra-ui/react";
import { TicketSegment } from "./TicketSegments/TicketSegment";
import { FlightInfo } from "./TicketSegments/FlightInfo";

export function Ticket() {
	return (
		<Flex direction="column">
			<TicketSegment top={true}>
				<FlightInfo />
			</TicketSegment>
			<TicketSegment>hi</TicketSegment>
			<TicketSegment bottom={true}>hi</TicketSegment>
		</Flex>
	);
}
