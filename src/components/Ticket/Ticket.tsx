import { Flex } from "@chakra-ui/react";
import { TicketSegment } from "./TicketSegments/TicketSegment";
import { FlightInfo } from "./TicketSegments/FlightInfo";

export function Ticket() {
	return (
		<Flex>
			<TicketSegment>
				<FlightInfo />
			</TicketSegment>
		</Flex>
	);
}
